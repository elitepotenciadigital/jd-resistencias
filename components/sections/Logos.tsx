import ScrollReveal from "@/components/common/ScrollReveal";

const clients = [
  { name: "Jomarca", segment: "Tratamento Térmico Industrial" },
  { name: "Belenos", segment: "Linha Industrial Automotiva" },
  { name: "Continental", segment: "Processos Térmicos" },
  { name: "Gerdau", segment: "Siderurgia Nacional" },
  { name: "Braskem", segment: "Petroquímica" },
  { name: "Embraer", segment: "Aeroespacial" },
  { name: "Usiminas", segment: "Metalurgia Pesada" },
  { name: "Vale", segment: "Mineração" },
];

export default function Logos() {
  return (
    <section className="py-14 border-y border-white/5" style={{ background: "#111111" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-[#B0B8C0]/50 text-xs font-bold mb-10 uppercase tracking-widest">
            Empresas que confiam na JD Resistências
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clients.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.05}>
              <div
                className="rounded-xl p-4 text-center border border-white/5 hover:border-[#E07020]/40 transition-all duration-300 group cursor-default"
                style={{ background: "rgba(176,184,192,0.03)" }}
              >
                <div className="font-black text-[#B0B8C0] group-hover:text-white text-base mb-1 transition-colors">
                  {c.name}
                </div>
                <div className="text-white/30 text-xs">{c.segment}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <p className="text-center text-white/20 text-xs mt-8">
            + de 500 empresas industriais atendidas em todo o Brasil
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
