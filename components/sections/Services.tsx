import { SERVICES } from "@/lib/constants";
import ScrollReveal from "@/components/common/ScrollReveal";
import { WA_LINKS } from "@/lib/constants";

export default function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-24" style={{ background: "#0D0D0D" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span
              className="text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: "rgba(224,112,32,0.15)", border: "1px solid rgba(224,112,32,0.3)", color: "#E07020" }}
            >
              O que fazemos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-3">
              Nossos Serviços
            </h2>
            <p className="text-[#B0B8C0]/60 max-w-xl mx-auto text-sm">
              Soluções completas em fornos e resistências industriais com tecnologia de ponta
              e 49 anos de expertise.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div
                className="rounded-xl p-6 sm:p-8 border border-white/5 hover:border-[#E07020]/30 hover:-translate-y-1 transition-all duration-300 group"
                style={{ background: "#1C1C1C" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  {"tag" in s && (
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-md"
                      style={{ background: "rgba(224,112,32,0.15)", color: "#E07020", border: "1px solid rgba(224,112,32,0.25)" }}
                    >
                      {(s as typeof s & { tag: string }).tag}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#E07020] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#B0B8C0]/50 text-sm leading-relaxed mb-4">{s.description}</p>
                <a
                  href={WA_LINKS.hero}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold hover:text-white transition-colors"
                  style={{ color: "#E07020" }}
                >
                  Solicitar →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
