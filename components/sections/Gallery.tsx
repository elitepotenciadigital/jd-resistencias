import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";

const products = [
  { id: 1, emoji: "🔥", title: "Forno de Câmara", spec: "Até 1600°C | Alta precisão" },
  { id: 2, emoji: "⚡", title: "Resistência Tubular", spec: "Aço inox / Inconel" },
  { id: 3, emoji: "🏭", title: "Forno Contínuo", spec: "Produção em série" },
  { id: 4, emoji: "🔩", title: "Resistência de Imersão", spec: "Fluidos e gases" },
  { id: 5, emoji: "🌡️", title: "Forno Mufla", spec: "Laboratório e indústria" },
  { id: 6, emoji: "💡", title: "Elemento Aquecedor", spec: "Customizado sob demanda" },
];

export default function Gallery() {
  const [active, setActive] = useState<null | typeof products[0]>(null);

  return (
    <section className="py-16 sm:py-24" style={{ background: "#111111" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: "rgba(224,112,32,0.15)", color: "#E07020", border: "1px solid rgba(224,112,32,0.3)" }}
            >
              Produtos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-3">
              Nossos Produtos
            </h2>
            <p className="text-[#B0B8C0]/50 max-w-xl mx-auto text-sm">
              Clique em qualquer produto para ver detalhes técnicos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.07}>
              <button
                onClick={() => setActive(p)}
                className="w-full text-left rounded-xl overflow-hidden border border-white/5 hover:border-[#E07020]/40 transition-all duration-300 group"
                style={{ background: "#1C1C1C" }}
              >
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(224,112,32,0.08), rgba(28,28,28,0.5))" }}
                >
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {p.emoji}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-base group-hover:text-[#E07020] transition-colors">{p.title}</h3>
                  <p className="text-[#B0B8C0]/50 text-xs mt-1">{p.spec}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="rounded-2xl p-8 max-w-sm w-full text-center border border-[#E07020]/20"
              style={{ background: "#1C1C1C" }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-7xl">{active.emoji}</span>
              <h3 className="text-white text-2xl font-black mt-4">{active.title}</h3>
              <p className="mt-2 font-semibold" style={{ color: "#E07020" }}>{active.spec}</p>
              <p className="text-[#B0B8C0]/50 text-sm mt-3">
                Entre em contato para especificações técnicas completas e orçamento personalizado.
              </p>
              <button
                onClick={() => setActive(null)}
                className="mt-6 text-white font-bold px-6 py-2 rounded-lg hover:scale-105 transition-all"
                style={{ background: "linear-gradient(135deg, #E07020, #F08030)" }}
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
