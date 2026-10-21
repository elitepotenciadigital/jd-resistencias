import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1).max(150),
  email: z.email().max(254),
  phone: z.string().trim().max(30).refine(value => /^\d{10,13}$/.test(value.replace(/\D/g, ""))),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1).max(5000),
  privacy: z.literal(true),
  website: z.string().max(0).optional(),
});

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdiS6Kx4jzSNtDQY4Ms8OwPriuHpEUGm8cxm4bCFv3VB7oYqg/formResponse";

const GOOGLE_FORM_FIELDS = {
  name: "entry.402208591",
  email: "entry.810966245",
  phone: "entry.1969700763",
  company: "entry.1623647206",
  message: "entry.306257552",
} as const;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Confira os dados e o consentimento de contato" });
  }
  const { name, email, phone, company, message } = parsed.data;
  const formData = new URLSearchParams({
    [GOOGLE_FORM_FIELDS.name]: name.trim(),
    [GOOGLE_FORM_FIELDS.email]: email.trim(),
    [GOOGLE_FORM_FIELDS.phone]: phone.trim(),
    [GOOGLE_FORM_FIELDS.company]: company?.trim() || "",
    [GOOGLE_FORM_FIELDS.message]: message.trim(),
  });

  try {
    const formResponse = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
      redirect: "manual",
      signal: AbortSignal.timeout(8000),
    });

    if (!formResponse.ok && ![301, 302, 303].includes(formResponse.status)) {
      console.error("Falha ao salvar lead no Google Forms", { status: formResponse.status });
      return res.status(502).json({ error: "Não foi possível salvar o contato" });
    }

    return res.status(200).json({ ok: true, stored: true });
  } catch {
    return res.status(502).json({ error: "Não foi possível salvar o contato" });
  }
}
