import ScrollReveal from "@/components/common/ScrollReveal";
import { WA_LINKS } from "@/lib/constants";

const applications = [
  { icon: "🏭", title: "Fundição de Alumínio", desc: "Fornos e resistências para fusão e manutenção de temperatura em fundições." },
  { icon: "⚙️", title: "Tratamento Térmico", desc: "Têmpera, revenimento, recozimento e normalização de peças metálicas." },
  { icon: "🔩", title: "Metalúrgicas", desc: "Soluções completas para processos metalúrgicos de alta performance." },
  { icon: "🚗", title: "Indústria Automotiva", desc: "Resistências e fornos para fabricação de componentes automotivos." },
  { icon: "⚡", title: "Fabricantes de Parafusos", desc: "Processos de têmpera e revenimento para parafusaria industrial." },
  { icon: "🏗️", title: "Petroquímica", desc: "Equipamentos certificados para ambientes industriais severos." },
];

export default function Applications() {
  return (
    <section id="aplicacoes" className="py-16 sm:py-24" style={{ background: "#111111" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: "rgba(224,112,32,0.15)", color: "#E07020", border: "1px solid rgba(224,112,32,0.3)" }}
            >
              Segmentos Atendidos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-3">
              Aplicações Industriais
            </h2>
            <p className="text-[#B0B8C0]/60 max-w-xl mx-auto text-sm">
              Fornecemos resistências industriais e fornos industriais para os principais segmentos da indústria brasileira. Resistências para fundição de alumínio, forno tratamento térmico, metalúrgicas e indústria automotiva.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.07}>
              <div
                className="flex items-start gap-4 p-5 rounded-xl border border-white/5 hover:border-[#E07020]/40 transition-all duration-300 group"
                style={{ background: "#1C1C1C" }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{a.icon}</span>
                <div>
                  <h3 className="font-bold text-white group-hover:text-[#E07020] text-sm sm:text-base transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-[#B0B8C0]/40 text-xs sm:text-sm mt-1 leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Urgency CTA */}
        <ScrollReveal delay={0.3}>
          <div
            className="mt-12 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#E07020]/20"
            style={{ background: "linear-gradient(135deg, rgba(224,112,32,0.12), rgba(13,13,13,0.8))" }}
          >
            <div>
              <p className="text-white font-black text-lg sm:text-xl">
                🔥 Precisa de suporte para seu forno industrial?
              </p>
              <p className="text-[#B0B8C0]/60 text-sm mt-1">
                Resistência queimada, forno com defeito, produção parada? Fale agora.
              </p>
            </div>
            <a
              href={WA_LINKS.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 text-white font-black px-6 py-3 rounded-xl hover:scale-105 transition-all duration-200 whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #E07020, #F08030)", boxShadow: "0 4px 20px rgba(224,112,32,0.3)" }}
            >
              Solicitar Atendimento Técnico →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
