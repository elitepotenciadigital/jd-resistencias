import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

export default function ProductRange() {
  return <section id="produtos" className="py-16 sm:py-20 bg-[#E8EBED] text-[#202327]">
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-black mb-4">Resistências e reformas para sua indústria</h2>
      <p className="max-w-2xl mb-10 leading-relaxed text-[#4A5056]">Escolha a aplicação e envie as especificações da peça ou do equipamento para nossa equipe.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
        {PRODUCTS.map(product => <Link key={product.slug} href={`/produtos/${product.slug}`} className="group border-t border-[#BAC1C7] py-6 flex gap-4 items-start hover:text-[#A52B24] transition-colors">
          <div className="min-w-0"><h3 className="font-bold text-lg mb-2">{product.title}</h3><p className="text-sm text-[#4A5056] leading-relaxed">{product.summary}</p></div>
          <ArrowUpRight size={22} className="shrink-0 mt-1" aria-hidden="true" />
        </Link>)}
      </div>
    </div>
  </section>;
}
