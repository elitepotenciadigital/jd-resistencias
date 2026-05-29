import { motion } from "framer-motion";
import { WA_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0D0D0D 0%, #1a0800 60%, #0D0D0D 100%)",
      }}
    >
      {/* Metal grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, #B0B8C0 60px, #B0B8C0 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #B0B8C0 60px, #B0B8C0 61px)",
        }}
      />

      {/* Molten glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[120px] opacity-25"
        style={{ background: "radial-gradient(ellipse, #E07020 0%, #660000 60%, transparent 100%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-[#E07020]/40 text-[#B0B8C0] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6"
          style={{ background: "rgba(224,112,32,0.08)" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#E07020] animate-pulse" />
          Resistências Elétricas Industriais · Fornos Industriais · Desde 1975
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
        >
          Há 49 anos fabricando{" "}
          <span style={{ color: "#E07020" }}>soluções industriais</span>
          <br />
          <span className="text-[#B0B8C0]">para alta temperatura</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/60 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Fornos industriais, resistências elétricas e manutenção especializada
          <br className="hidden sm:block" />
          até <strong className="text-white">1400°C</strong> · Atendimento em todo o Brasil.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {["✦ Atendimento Nacional", "✦ Fabricação Própria", "✦ Até 1400°C", "✦ Projetos sob Medida"].map((b) => (
            <span
              key={b}
              className="text-[#B0B8C0] text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10"
              style={{ background: "rgba(176,184,192,0.06)" }}
            >
              {b}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={WA_LINKS.hero}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 text-white font-black text-base sm:text-lg px-8 py-4 rounded-xl hover:scale-105 transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #E07020, #F08030)",
              boxShadow: "0 4px 24px rgba(224,112,32,0.4)",
            }}
          >
            <WhatsAppIcon />
            Falar com Especialista
          </a>
          <a
            href="tel:+5511995509477"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#B0B8C0]/30 text-[#B0B8C0] font-semibold text-base px-8 py-4 rounded-xl hover:border-[#E07020] hover:text-white transition-all duration-200"
            style={{ background: "rgba(176,184,192,0.05)" }}
          >
            📞 (11) 99550-9477
          </a>
        </motion.div>

        {/* Urgency tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 mb-16 text-white/30 text-xs"
        >
          🔥 Resposta rápida via WhatsApp · Suporte técnico especializado
        </motion.p>
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
