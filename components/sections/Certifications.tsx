import ScrollReveal from "@/components/common/ScrollReveal";

const certs = [
  { badge: "ISO", label: "ISO 9001", desc: "Gestão da Qualidade" },
  { badge: "ISO", label: "ISO 14001", desc: "Gestão Ambiental" },
  { badge: "CE", label: "CE Mark", desc: "Conformidade Europeia" },
  { badge: "INMET", label: "INMETRO", desc: "Cert. Nacional" },
  { badge: "NR12", label: "NR-12", desc: "Segurança Máquinas" },
  { badge: "ABNT", label: "ABNT NBR", desc: "Normas Técnicas" },
];

export default function Certifications() {
  return (
    <section id="certificacoes" className="py-16 sm:py-24" style={{ background: "#0D0D0D" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: "rgba(224,112,32,0.15)", color: "#E07020", border: "1px solid rgba(224,112,32,0.3)" }}
            >
              Qualidade Garantida
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-3">
              Certificações e Conformidades
            </h2>
            <p className="text-[#B0B8C0]/60 max-w-xl mx-auto text-sm">
              Todos os nossos produtos e processos atendem às mais rigorosas normas
              nacionais e internacionais.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certs.map((c, i) => (
            <ScrollReveal key={c.label} delay={i * 0.07}>
              <div
                className="rounded-xl p-5 text-center border border-white/5 hover:border-[#E07020]/30 hover:-translate-y-1 transition-all duration-300 group"
                style={{ background: "#1C1C1C" }}
              >
                <div
                  className="w-12 h-12 rounded-full text-white text-xs font-black flex items-center justify-center mx-auto mb-3 transition-all group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #E07020, #F08030)" }}
                >
                  {c.badge}
                </div>
                <div className="font-bold text-white text-sm">{c.label}</div>
                <div className="text-[#B0B8C0]/40 text-xs mt-1">{c.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
