import type { NextApiRequest, NextApiResponse } from "next";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone, company, message } = req.body as LeadPayload;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Campos obrigatórios faltando" });
  }

  const lead = {
    createdAt: new Date().toISOString(),
    source: "jdresistencias.com.br",
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    company: company?.trim() || "",
    message: message.trim(),
    userAgent: req.headers["user-agent"] || "",
    ip:
      (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "",
  };

  console.log("Novo lead JD Resistências:", lead);

  if (!process.env.LEADS_WEBHOOK_URL) {
    return res.status(202).json({
      ok: true,
      stored: false,
      message: "Webhook de leads não configurado; lead disponível nos logs da Vercel.",
    });
  }

  const webhookResponse = await fetch(process.env.LEADS_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });

  if (!webhookResponse.ok) {
    console.error("Falha ao salvar lead no webhook", {
      status: webhookResponse.status,
      statusText: webhookResponse.statusText,
    });
    return res.status(502).json({ error: "Não foi possível salvar o contato" });
  }

  return res.status(200).json({ ok: true, stored: true });
}
