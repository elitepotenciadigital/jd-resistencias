import ScrollReveal from "@/components/common/ScrollReveal";
import { WA_LINKS } from "@/lib/constants";

const points = [
  "Fabricação própria — controle total de qualidade em cada peça",
  "49 anos de engenharia aplicada em projetos térmicos industriais",
  "Atendimento nacional com suporte técnico especializado no pós-venda",
  "Resistências sob especificação técnica para qualquer aplicação",
  "Projetos até 1400°C com controle de temperatura de alta precisão",
  "Certificações ISO e conformidade com normas nacionais e internacionais",
];

export default function Differentials() {
  return (
    <section id="sobre" className="py-16 sm:py-24" style={{ background: "#0D0D0D" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div
                className="w-full aspect-square max-w-md mx-auto rounded-2xl flex items-center justify-center border border-white/5"
                style={{
                  background: "linear-gradient(160deg, #1a0800 0%, #0D0D0D 100%)",
                  boxShadow: "inset 0 0 60px rgba(224,112,32,0.08)",
                }}
              >
                <div className="text-center p-8">
                  <div className="font-black leading-none" style={{ fontSize: "7rem", color: "#E07020" }}>49</div>
                  <div className="text-white text-xl font-bold mt-2">Anos</div>
                  <div className="text-[#B0B8C0]/40 text-sm mt-1">de Experiência</div>
                  <div className="w-16 h-0.5 mx-auto my-6" style={{ background: "#E07020" }} />
                  <div className="text-[#B0B8C0]/60 text-sm leading-relaxed">
                    Fundada em 1975, a JD Resistências é referência nacional em fornos e
                    resistências industriais de alta performance.
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 text-white font-black text-sm px-4 py-3 rounded-xl"
                style={{ background: "linear-gradient(135deg, #E07020, #F08030)" }}
              >
                🏆 Líder de Mercado
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="right">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: "rgba(224,112,32,0.15)", color: "#E07020", border: "1px solid rgba(224,112,32,0.3)" }}
            >
              Nossos Diferenciais
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-6">
              Por que escolher{" "}
              <span className="px-2 py-0.5 rounded" style={{ color: "#E07020" }}>
                JD Resistências?
              </span>
            </h2>
            <ul className="space-y-4 mb-8">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#E07020" }}
                  >
                    ✓
                  </span>
                  <span className="text-[#B0B8C0]/70 text-sm sm:text-base leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={WA_LINKS.mainCta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #E07020, #F08030)", boxShadow: "0 4px 20px rgba(224,112,32,0.3)" }}
            >
              Conheça Nossa Diferença →
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
