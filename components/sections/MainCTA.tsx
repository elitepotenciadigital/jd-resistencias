import { motion } from "framer-motion";
import { WA_LINKS } from "@/lib/constants";

export default function MainCTA() {
  return (
    <section
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a0800 0%, #0D0D0D 50%, #1a0800 100%)" }}
    >
      {/* Red glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at center, rgba(224,112,32,0.2) 0%, transparent 70%)" }}
      />
      {/* Metal grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #B0B8C0 40px, #B0B8C0 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #B0B8C0 40px, #B0B8C0 41px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#B0B8C0]/50 text-sm font-bold uppercase tracking-widest mb-3">
            Engenharia aplicada · Projetos térmicos industriais
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Pronto para transformar<br />
            <span style={{ color: "#E07020" }}>sua produção?</span>
          </h2>
          <p className="text-[#B0B8C0]/60 text-base sm:text-lg mb-3 max-w-xl mx-auto">
            Fale agora com nossos especialistas. Sem burocracia, sem enrolação.
            <strong className="text-white"> Resposta em minutos pelo WhatsApp.</strong>
          </p>
          <p className="text-[#B0B8C0]/30 text-sm mb-10">
            🔥 Suporte técnico especializado · Alta eficiência térmica · Soluções industriais personalizadas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINKS.mainCta}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-white font-black text-base sm:text-lg px-8 py-4 rounded-xl hover:scale-105 transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #E07020, #F08030)",
                boxShadow: "0 4px 24px rgba(224,112,32,0.4)",
              }}
            >
              <WhatsAppIcon />
              Falar com Especialista Agora
            </a>
            <a
              href="tel:+5511995509477"
              className="flex items-center justify-center gap-2 border border-[#B0B8C0]/20 text-[#B0B8C0] font-bold text-base px-8 py-4 rounded-xl hover:border-[#E07020] hover:text-white transition-all duration-200"
            >
              📞 Ligar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
