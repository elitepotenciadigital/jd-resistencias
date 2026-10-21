import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { trackContactFormSubmit, trackWhatsAppConversion } from "@/lib/googleAds";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  privacy: boolean;
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "saved" | "whatsappOnly" | "error">("idle");

  const [whatsappUrl, setWhatsappUrl] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const text = [
        "Olá! Vim pelo site da JD Resistências e quero solicitar atendimento.",
        "",
        `Nome: ${data.name}`,
        `Email: ${data.email}`,
        `Telefone/WhatsApp: ${data.phone}`,
        `Empresa: ${data.company || "Não informado"}`,
        "",
        `Mensagem: ${data.message}`,
      ].join("\n");
      const destination = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      setWhatsappUrl(destination);

      let stored = false;
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          signal: AbortSignal.timeout(8000),
        });
        const result = await response.json().catch(() => null);
        stored = response.ok && result?.stored === true;
      } catch {
        stored = false;
      }

      setStatus(stored ? "saved" : "whatsappOnly");
      trackContactFormSubmit();
      trackWhatsAppConversion("contact_form");
      window.location.assign(destination);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-lg border text-white text-sm outline-none transition-all placeholder:text-white/20 ${
      hasError
        ? "border-red-500 bg-[#1C1C1C]"
        : "border-white/10 bg-[#1C1C1C] focus:border-[#E07020]"
    }`;

  return (
    <section id="contato" className="py-16 sm:py-24" style={{ background: "#0D0D0D" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: "rgba(224,112,32,0.15)", color: "#E07020", border: "1px solid rgba(224,112,32,0.3)" }}
            >
              Fale Conosco
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-3">
              Deixe seus dados
            </h2>
            <p className="text-[#B0B8C0]/50 text-sm">
              Preencha os dados e continue o atendimento pelo WhatsApp da JD.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl p-6 sm:p-10 border border-white/5 space-y-5"
            style={{ background: "#1C1C1C" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-[#B0B8C0] mb-1.5">Nome completo *</label>
                <input id="contact-name" autoComplete="name" {...register("name", { required: "Nome obrigatório", validate: value => !!value.trim() || "Informe seu nome" })} placeholder="João Silva" className={inputClass(!!errors.name)} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-[#B0B8C0] mb-1.5">Email *</label>
                <input id="contact-email" autoComplete="email" {...register("email", { required: "Email obrigatório", pattern: { value: /^\S+@\S+\.\S+$/, message: "Email inválido" } })} type="email" placeholder="joao@empresa.com.br" className={inputClass(!!errors.email)} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#B0B8C0] mb-1.5">Telefone / WhatsApp *</label>
                <input id="contact-phone" autoComplete="tel" {...register("phone", { required: "Telefone obrigatório", validate: value => /^\d{10,13}$/.test(value.replace(/\D/g, "")) || "Informe um telefone com DDD" })} type="tel" placeholder="(11) 99999-9999" className={inputClass(!!errors.phone)} />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label htmlFor="contact-company" className="block text-xs font-semibold text-[#B0B8C0] mb-1.5">Empresa</label>
                <input id="contact-company" autoComplete="organization" {...register("company")} placeholder="Nome da empresa" className={inputClass(false)} />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-[#B0B8C0] mb-1.5">Mensagem *</label>
              <textarea
                id="contact-message"
                {...register("message", { required: "Mensagem obrigatória", validate: value => !!value.trim() || "Descreva sua necessidade" })}
                placeholder="Descreva sua necessidade: tipo de forno, temperatura, volume de produção..."
                rows={4}
                className={`${inputClass(!!errors.message)} resize-none`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <div className="flex items-start gap-3">
              <input {...register("privacy", { required: true })} type="checkbox" id="privacy" className="mt-0.5" style={{ accentColor: "#E07020" }} />
              <label htmlFor="privacy" className="text-xs text-[#B0B8C0]/40 cursor-pointer">
                Concordo com a{" "}
                <a href="/privacidade" target="_blank" rel="noopener noreferrer" className="text-[#B0B8C0] underline hover:text-white">política de privacidade</a>{" "}
                e autorizo o contato da JD Resistências.
              </label>
            </div>
            {errors.privacy && <p className="text-red-500 text-xs -mt-3">Aceite a política de privacidade</p>}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full text-white font-black text-base py-4 rounded-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: "linear-gradient(135deg, #E07020, #F08030)", boxShadow: "0 4px 24px rgba(224,112,32,0.3)" }}
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Enviando...
                </span>
              ) : "Continuar no WhatsApp"}
            </button>
            <p className="text-sm text-[#B0B8C0]">A mensagem será preenchida com seus dados. Toque em enviar no WhatsApp para falar com a JD.</p>
            {whatsappUrl && <a href={whatsappUrl} className="block text-center text-white underline py-3">Abrir WhatsApp com minha mensagem</a>}
          </form>
        </ScrollReveal>

        <AnimatePresence>
          {status === "saved" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-xl z-50">
              ✅ Dados registrados. O WhatsApp foi aberto para continuar o atendimento.
            </motion.div>
          )}
          {status === "whatsappOnly" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-[#E07020] text-white font-semibold px-6 py-3 rounded-xl shadow-xl z-50">
              WhatsApp aberto com seus dados. É só enviar a mensagem.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-red-600 text-white font-semibold px-6 py-3 rounded-xl shadow-xl z-50">
              ❌ Não conseguimos registrar seus dados. Chame pelo WhatsApp.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
