import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1).max(150),
  email: z.email().max(254),
  phone: z.string().trim().max(30).refine(value => /^\d{10,13}$/.test(value.replace(/\D/g, ""))),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1).max(5000),
  privacy: z.literal(true),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Confira os dados e o consentimento de contato" });
  }
  const { name, email, phone, company, message } = parsed.data;

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

  try {
  const webhookResponse = await fetch(process.env.LEADS_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(6000),
  });

  if (!webhookResponse.ok) {
    console.error("Falha ao salvar lead no webhook", {
      status: webhookResponse.status,
      statusText: webhookResponse.statusText,
    });
    return res.status(502).json({ error: "Não foi possível salvar o contato" });
  }

  return res.status(200).json({ ok: true, stored: true });
  } catch {
    return res.status(502).json({ error: "Não foi possível salvar o contato" });
  }
}
