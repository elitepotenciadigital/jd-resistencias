import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect } from "react";
import { PRODUCTS } from "@/lib/products";
import { WHATSAPP_NUMBER, COMPANY } from "@/lib/constants";
import { trackProductView } from "@/lib/googleAds";

export const getStaticPaths: GetStaticPaths = async () => ({ paths: PRODUCTS.map(p => ({ params: { slug: p.slug } })), fallback: false });
export const getStaticProps: GetStaticProps<{ product: typeof PRODUCTS[number] }> = async ({ params }) => {
  const product = PRODUCTS.find(p => p.slug === params?.slug);
  return product ? { props: { product } } : { notFound: true };
};

export default function ProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  const url = `https://www.jdresistencias.com.br/produtos/${product.slug}`;
  const image = product.image
    ? `https://www.jdresistencias.com.br${product.image}`
    : "https://www.jdresistencias.com.br/og-image.png";
  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento da JD: ${product.title}.`)}`;
  const isService = product.slug === "reforma-de-forno-eletrico";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.jdresistencias.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "Produtos e serviços", "item": "https://www.jdresistencias.com.br/#produtos" },
          { "@type": "ListItem", "position": 3, "name": product.title, "item": url },
        ],
      },
      isService
        ? {
            "@type": "Service",
            "@id": `${url}#service`,
            "name": product.title,
            "description": product.summary,
            "url": url,
            "provider": { "@id": "https://www.jdresistencias.com.br/#business" },
            "areaServed": { "@type": "Country", "name": "Brasil" },
            "serviceType": "Reforma e manutenção de fornos elétricos industriais",
          }
        : {
            "@type": "Product",
            "@id": `${url}#product`,
            "name": product.title,
            "description": product.summary,
            "url": url,
            "image": [image, ...(product.gallery?.map(photo => `https://www.jdresistencias.com.br${photo.src}`) || [])],
            "brand": { "@type": "Brand", "name": "JD Resistências" },
            "manufacturer": { "@id": "https://www.jdresistencias.com.br/#business" },
            "category": "Equipamentos e componentes para aquecimento industrial",
            "keywords": product.keywords.join(", "),
          },
    ],
  };

  useEffect(() => {
    trackProductView(product.slug, product.title);
  }, [product.slug, product.title]);

  return <>
    <Head>
      <title>{`${product.title} | Fabricação e Orçamento | JD Resistências`}</title>
      <meta name="description" content={`${product.summary} ${product.request}`} />
      <meta name="keywords" content={product.keywords.join(", ")} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={`${product.title} | JD Resistências`} />
      <meta property="og:description" content={product.summary} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={product.imageAlt || product.title} />
      <meta property="og:type" content="product" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="JD Resistências" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${product.title} | JD Resistências`} />
      <meta name="twitter:description" content={product.summary} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <link rel="icon" href="/logo.png" />
    </Head>
    <header className="border-b border-white/15"><div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center gap-4"><Link href="/" className="flex items-center gap-3"><Image src="/logo.png" alt="JD Resistências" width={44} height={44}/><span className="font-bold">JD RESISTÊNCIAS</span></Link><a href={`tel:+${WHATSAPP_NUMBER}`} className="text-sm text-[#C6CDD3]">{COMPANY.phone}</a></div></header>
    <main className="max-w-5xl mx-auto px-5 pt-10 pb-16">
      <Link href="/#produtos" className="text-[#C6CDD3] text-sm underline">Todos os produtos e serviços</Link>
      <p className="mt-10 mb-4 text-sm text-[#C6CDD3]">FABRICAÇÃO PRÓPRIA · ATENDIMENTO DIRETO</p>
      <h1 className="text-[32px] sm:text-5xl font-black leading-tight mb-6">{product.title}</h1>
      <p className="text-lg text-[#D5D9DD] max-w-3xl leading-relaxed mb-8">{product.summary}</p>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#A52B24] hover:bg-[#BF352D] text-white font-bold px-6 py-4 rounded-lg transition-colors">Solicitar orçamento no WhatsApp</a>
      {!!product.specifications?.length && <section className="mt-10 border-y border-white/15 py-8" aria-labelledby="product-specifications-title">
        <h2 id="product-specifications-title" className="text-2xl font-bold mb-6">Modelos e capacidades</h2>
        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {product.specifications.map(spec => <div key={spec.label}><dt className="text-sm text-[#C6CDD3] mb-1">{spec.label}</dt><dd className="font-semibold leading-relaxed">{spec.value}</dd></div>)}
        </dl>
        {product.specificationNote && <p className="text-sm text-[#C6CDD3] leading-relaxed mt-6 max-w-3xl">{product.specificationNote}</p>}
      </section>}
      {product.image && <figure className="mt-10">
        <div className="relative w-full h-[480px] max-h-[70vh] bg-[#202327] rounded-lg overflow-hidden border border-white/15">
          <Image src={product.image} alt={product.imageAlt || product.title} fill sizes="(max-width: 1024px) 100vw, 984px" className="object-contain" priority />
        </div>
        <figcaption className="mt-3 text-sm text-[#C6CDD3]">{product.title} · JD Resistências</figcaption>
      </figure>}
      {!!product.gallery?.length && <section className="mt-12" aria-labelledby="product-gallery-title">
        <h2 id="product-gallery-title" className="text-2xl font-bold mb-6">Detalhes dos fornos para fundição</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {product.gallery.map(photo => <figure key={photo.src}>
            <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar foto: ${photo.caption}`} className="block relative aspect-[3/4] bg-[#202327] rounded-lg overflow-hidden border border-white/15 hover:border-[#A52B24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition-colors">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 639px) 100vw, 480px" className="object-contain" />
            </a>
            <figcaption className="mt-3 text-sm text-[#C6CDD3]">{photo.caption}</figcaption>
          </figure>)}
        </div>
      </section>}
      <div className="grid md:grid-cols-2 gap-10 mt-14 border-t border-white/15 pt-10">
        <section><h2 className="text-2xl font-bold mb-4">Aplicação e especificação</h2><p className="text-[#C6CDD3] leading-relaxed">{product.detail}</p></section>
        <section><h2 className="text-2xl font-bold mb-4">Informações para o orçamento</h2><p className="text-[#C6CDD3] leading-relaxed">{product.request}</p><p className="text-[#C6CDD3] mt-4 leading-relaxed">Materiais, preço e condições de fornecimento são definidos na proposta, após a avaliação da sua necessidade.</p></section>
      </div>
      <section className="mt-12 border-t border-white/15 pt-8"><h2 className="text-2xl font-bold mb-3">Fale com a JD Resistências</h2><p className="text-[#C6CDD3] mb-4">Carapicuíba, SP · Atendimento nacional</p><a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a><p className="mt-4"><Link href="/privacidade" className="text-sm underline text-[#C6CDD3]">Política de privacidade</Link></p></section>
    </main>
  </>;
}
