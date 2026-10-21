import { INDUSTRIAL_FAQ } from "@/lib/industrialFaq";

export default function IndustrialFAQ() {
  return (
    <section id="perguntas-frequentes" className="py-16 sm:py-24 bg-white text-[#17191B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold uppercase text-[#A52B24]">Perguntas técnicas</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-black">Quem fabrica resistências e fornos industriais?</h2>
        <p className="mt-4 text-[#4A5056] leading-relaxed">
          Respostas diretas sobre a fabricação, reforma e especificação dos equipamentos fornecidos pela JD Resistências.
        </p>
        <div className="mt-10 border-t border-black/10">
          {INDUSTRIAL_FAQ.map(item => (
            <details key={item.question} className="group border-b border-black/10 py-5">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-5 font-bold text-lg">
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-[#A52B24] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 max-w-3xl text-[#4A5056] leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
