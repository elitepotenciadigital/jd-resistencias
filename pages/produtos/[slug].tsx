import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { PRODUCTS } from "@/lib/products";
import { WHATSAPP_NUMBER, COMPANY } from "@/lib/constants";

export const getStaticPaths: GetStaticPaths = async () => ({ paths: PRODUCTS.map(p => ({ params: { slug: p.slug } })), fallback: false });
export const getStaticProps: GetStaticProps<{ product: typeof PRODUCTS[number] }> = async ({ params }) => {
  const product = PRODUCTS.find(p => p.slug === params?.slug);
  return product ? { props: { product } } : { notFound: true };
};

export default function ProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  const url = `https://www.jdresistencias.com.br/produtos/${product.slug}`;
  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento da JD: ${product.title}.`)}`;
  return <>
    <Head>
      <title>{`${product.title} | Fabricação e Orçamento | JD Resistências`}</title>
      <meta name="description" content={`${product.summary} ${product.request}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={`${product.title} | JD Resistências`} />
      <meta property="og:description" content={product.summary} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://www.jdresistencias.com.br/og-image.png" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/logo.png" />
    </Head>
    <header className="border-b border-white/15"><div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center gap-4"><Link href="/" className="flex items-center gap-3"><img src="/logo.png" alt="JD Resistências" width={44} height={44}/><span className="font-bold">JD RESISTÊNCIAS</span></Link><a href={`tel:+${WHATSAPP_NUMBER}`} className="text-sm text-[#C6CDD3]">{COMPANY.phone}</a></div></header>
    <main className="max-w-5xl mx-auto px-5 pt-10 pb-16">
      <Link href="/#produtos" className="text-[#C6CDD3] text-sm underline">Todos os produtos e serviços</Link>
      <p className="mt-10 mb-4 text-sm text-[#C6CDD3]">FABRICAÇÃO PRÓPRIA · ATENDIMENTO DIRETO</p>
      <h1 className="text-[32px] sm:text-5xl font-black leading-tight mb-6">{product.title}</h1>
      <p className="text-lg text-[#D5D9DD] max-w-3xl leading-relaxed mb-8">{product.summary}</p>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#A52B24] hover:bg-[#BF352D] text-white font-bold px-6 py-4 rounded-lg transition-colors">Solicitar orçamento no WhatsApp</a>
      <div className="grid md:grid-cols-2 gap-10 mt-14 border-t border-white/15 pt-10">
        <section><h2 className="text-2xl font-bold mb-4">Aplicação e especificação</h2><p className="text-[#C6CDD3] leading-relaxed">{product.detail}</p></section>
        <section><h2 className="text-2xl font-bold mb-4">Informações para o orçamento</h2><p className="text-[#C6CDD3] leading-relaxed">{product.request}</p><p className="text-[#C6CDD3] mt-4 leading-relaxed">Materiais, preço e condições de fornecimento são definidos na proposta, após a avaliação da sua necessidade.</p></section>
      </div>
      <section className="mt-12 border-t border-white/15 pt-8"><h2 className="text-2xl font-bold mb-3">Fale com a JD Resistências</h2><p className="text-[#C6CDD3] mb-4">Carapicuíba, SP · Atendimento nacional</p><a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a><p className="mt-4"><Link href="/privacidade" className="text-sm underline text-[#C6CDD3]">Política de privacidade</Link></p></section>
    </main>
  </>;
}
