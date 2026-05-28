import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { METRICS } from "@/lib/constants";
import ScrollReveal from "@/components/common/ScrollReveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-black" style={{ color: "#E07020" }}>
      {count}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section
      className="py-16 sm:py-20 border-b border-white/5"
      style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #111111 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.1}>
              <div className="text-center border-l-2 pl-4" style={{ borderColor: "#E07020" }}>
                <Counter value={m.value} suffix={m.suffix} />
                <p className="text-[#B0B8C0]/60 text-sm mt-2 font-medium">{m.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
