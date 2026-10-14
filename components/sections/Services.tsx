import { SERVICES } from "@/lib/constants";
import ScrollReveal from "@/components/common/ScrollReveal";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { Flame, Zap, Wrench, Ruler, Lightbulb, LifeBuoy } from "lucide-react";

const icons = [Flame, Zap, Wrench, Ruler, Lightbulb, LifeBuoy];

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
              Resistências Elétricas e Fornos Industriais
            </h2>
            <p className="text-[#B0B8C0]/60 max-w-xl mx-auto text-sm">
              Fabricação sob medida desde 1975. Resistências elétricas, fornos para processos industriais e reforma de equipamentos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = icons[i];
            return (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div
                className="rounded-lg h-full p-6 sm:p-8 border border-white/15 hover:border-[#E07020]/40 transition-all duration-300 group"
                style={{ background: "#1C1C1C" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon size={28} className="text-[#C6CDD3] shrink-0" aria-hidden="true" />
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
                <p className="text-[#C6CDD3] text-sm leading-relaxed mb-4">{s.description}</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Vim pelo site e gostaria de um orçamento: ${s.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold hover:text-white transition-colors"
                  style={{ color: "#E07020" }}
                >
                  Solicitar orçamento →
                </a>
              </div>
            </ScrollReveal>
          );})}
        </div>
      </div>
    </section>
  );
}
