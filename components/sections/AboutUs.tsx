import ScrollReveal from "@/components/common/ScrollReveal";
import { WA_LINKS } from "@/lib/constants";

const values = [
  {
    icon: "🏭",
    title: "Fabricação Própria",
    desc: "Produzimos tudo internamente — do projeto à entrega. Sem terceiros, sem intermediários.",
  },
  {
    icon: "🎯",
    title: "Precisão Técnica",
    desc: "Cada resistência e cada forno é fabricado com especificações exatas para sua aplicação.",
  },
  {
    icon: "🤝",
    title: "Atendimento Direto",
    desc: "Você fala diretamente com quem entende do produto. Sem call center, sem enrolação.",
  },
  {
    icon: "🇧🇷",
    title: "Atendimento Nacional",
    desc: "Atendemos indústrias em todo o Brasil com envio para qualquer estado.",
  },
];

export default function AboutUs() {
  return (
    <section
      id="quem-somos"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: "#111111" }}
    >
      {/* Subtle orange glow top-left */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "#E07020" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: "rgba(224,112,32,0.15)", color: "#E07020", border: "1px solid rgba(224,112,32,0.3)" }}
            >
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
              Quem somos nós
            </h2>
            <p className="text-[#B0B8C0]/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              A JD Resistências nasceu em 1975 com um único propósito: entregar soluções
              industriais de alta temperatura com qualidade real e atendimento de verdade.
            </p>
          </div>
        </ScrollReveal>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text */}
          <ScrollReveal direction="left">
            <div className="space-y-5 text-[#B0B8C0]/70 text-sm sm:text-base leading-relaxed">
              <p>
                Somos uma empresa familiar com{" "}
                <strong className="text-white">49 anos de experiência</strong> na fabricação
                de resistências elétricas e fornos industriais. Fundada por José Dias Pereira,
                a JD nasceu da paixão pela engenharia aplicada e pelo compromisso com quem
                trabalha com indústria pesada.
              </p>
              <p>
                Ao longo dessas quase cinco décadas, atendemos metalúrgicas, fundições,
                indústrias automotivas, petroquímicas e centenas de outros segmentos que
                dependem de equipamentos confiáveis e duráveis para manter sua produção rodando.
              </p>
              <p>
                Nossa força está na{" "}
                <strong className="text-white">fabricação própria</strong> — desenvolvemos
                desde o projeto até a peça final, com controle total de qualidade. Cada
                resistência sai daqui testada e pronta para trabalhar em condições extremas,
                até <strong className="text-white">1400°C</strong>.
              </p>
              <p>
                Não somos um catálogo online. Somos uma equipe técnica que entende o seu
                problema e entrega a solução certa, no prazo combinado.
              </p>
            </div>

            <a
              href={WA_LINKS.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #E07020, #F08030)", boxShadow: "0 4px 20px rgba(224,112,32,0.3)" }}
            >
              Fale com a Gente →
            </a>
          </ScrollReveal>

          {/* Visual card */}
          <ScrollReveal direction="right">
            <div
              className="rounded-2xl p-8 border border-white/5 relative"
              style={{ background: "linear-gradient(160deg, #1a0a00 0%, #0D0D0D 100%)" }}
            >
              {/* Glowing accent line */}
              <div className="w-12 h-1 rounded-full mb-6" style={{ background: "linear-gradient(90deg, #E07020, #F08030)" }} />

              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "1975", label: "Ano de fundação" },
                  { val: "49+", label: "Anos no mercado" },
                  { val: "500+", label: "Clientes atendidos" },
                  { val: "1400°C", label: "Capacidade máxima" },
                ].map((s) => (
                  <div key={s.label} className="text-center py-4 px-2 rounded-xl border border-white/5" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <div className="text-2xl sm:text-3xl font-black mb-1" style={{ color: "#E07020" }}>
                      {s.val}
                    </div>
                    <div className="text-[#B0B8C0]/50 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-[#B0B8C0]/50 text-xs leading-relaxed text-center italic">
                  "Nossa missão é simples: seu equipamento funcionando, sua produção rodando."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08}>
              <div
                className="p-5 rounded-xl border border-white/5 hover:border-[#E07020]/30 transition-all duration-300 group text-center"
                style={{ background: "#1C1C1C" }}
              >
                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-300">
                  {v.icon}
                </span>
                <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#E07020] transition-colors">
                  {v.title}
                </h3>
                <p className="text-[#B0B8C0]/40 text-xs leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
