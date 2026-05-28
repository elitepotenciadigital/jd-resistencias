import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone, company, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Campos obrigatórios faltando" });
  }

  // Log para debug (substituir por nodemailer/SendGrid em produção)
  console.log("📧 Novo contato:", { name, email, phone, company, message });

  // TODO: integrar nodemailer ou Resend para envio real de email
  // Por enquanto retorna sucesso para demonstração
  return res.status(200).json({ ok: true });
}
