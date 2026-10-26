import Image from "next/image";
import { WA_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex items-center min-h-[620px] sm:min-h-[680px] pt-28 pb-16 overflow-hidden">
      <Image src="/videos/resistencia-detalhe.jpg" alt="Resistência industrial da JD Resistências" fill priority sizes="100vw" className="object-cover object-center -z-20" />
      <div className="absolute inset-0 bg-black/75 -z-10" />
      <div className="max-w-6xl w-full mx-auto px-5 sm:px-6">
        <p className="text-[#D5D9DD] text-sm font-semibold mb-5">JD RESISTÊNCIAS · DESDE 1975</p>
        <h1 className="text-[32px] sm:text-5xl font-black text-white leading-tight max-w-3xl mb-6">
          Resistências elétricas e fornos industriais
        </h1>
        <p className="text-[#E0E2E4] text-base sm:text-lg leading-relaxed max-w-xl mb-6">
          Fabricação sob medida, reforma e manutenção. Envie sua necessidade direto pelo WhatsApp e receba orientação da equipe técnica.
        </p>
        <p className="text-[#D5D9DD] text-sm mb-8">Fabricação própria · Carapicuíba, SP · Atendimento nacional</p>
        <div className="flex flex-col sm:flex-row gap-3 items-start">
          <a href={WA_LINKS.hero} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-[#A52B24] hover:bg-[#BF352D] text-white font-bold px-6 py-4 rounded-lg transition-colors">Falar com a JD no WhatsApp</a>
          <a href="#videos" className="w-full sm:w-auto text-center border border-white/50 text-white font-semibold px-6 py-4 rounded-lg hover:bg-white/10 transition-colors">Conhecer a fábrica</a>
        </div>
        <p className="mt-5 text-sm text-[#D5D9DD]">Resistências, fornos industriais ou reforma. Informe aplicação, potência e temperatura.</p>
      </div>
    </section>
  );
}
