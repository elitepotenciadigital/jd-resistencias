import { PROCESS_STEPS } from "@/lib/constants";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Process() {
  return (
    <section className="py-16 sm:py-24 border-y border-white/5" style={{ background: "#111111" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: "rgba(176,184,192,0.08)", color: "#B0B8C0", border: "1px solid rgba(176,184,192,0.15)" }}
            >
              Transparência Total
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-3">
              Como funciona nosso processo?
            </h2>
            <p className="text-[#B0B8C0]/60 max-w-xl mx-auto text-sm">
              Do primeiro contato à entrega, acompanhamos cada etapa com total transparência.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #E07020, transparent)" }} />

          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1} className="flex-1">
              <div className="relative flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center lg:px-2">
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden absolute left-5 top-10 w-px h-full -z-10" style={{ background: "rgba(224,112,32,0.3)" }} />
                )}
                <div
                  className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full text-white font-black text-sm flex items-center justify-center flex-shrink-0 lg:mb-4"
                  style={{ background: "linear-gradient(135deg, #E07020, #F08030)", boxShadow: "0 0 16px rgba(224,112,32,0.4)" }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">{step.title}</h3>
                  <p className="text-[#B0B8C0]/40 text-xs mt-1">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
