import Head from "next/head";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Applications from "@/components/sections/Applications";
import Differentials from "@/components/sections/Differentials";
import Videos from "@/components/sections/Videos";
import AboutUs from "@/components/sections/AboutUs";
import Process from "@/components/sections/Process";
import MainCTA from "@/components/sections/MainCTA";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resistências Industriais e Fornos Industriais | JD Resistências — Desde 1975</title>
        <meta
          name="description"
          content="Resistências elétricas e fornos industriais sob medida desde 1975. Fabricação, manutenção e reforma. Solicite orçamento com a JD Resistências, Carapicuíba, SP."
        />
        <meta
          name="keywords"
          content="resistências industriais, resistência elétrica industrial, comprar resistência industrial, resistência para forno industrial, resistência tubular industrial, resistência de imersão, fornos industriais, forno industrial preço, forno tratamento térmico, forno fundição alumínio, forno mufla, forno câmara industrial, manutenção forno industrial, reforma forno industrial, resistência Kanthal, resistência Inconel, forno têmpera, forno revenimento, forno recozimento, aquecimento industrial, elementos aquecedores, fabricante de resistências, fornos industriais São Paulo, resistências industriais Carapicuíba, JD Resistências"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="JD Resistências Industriais" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="Carapicuíba" />
        <link rel="canonical" href="https://www.jdresistencias.com.br" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jdresistencias.com.br" />
        <meta property="og:title" content="Resistências Industriais e Fornos Industriais | JD Resistências" />
        <meta property="og:description" content="Resistências elétricas e fornos industriais desde 1975. Fabricação, reforma e manutenção. Solicite orçamento." />
        <meta property="og:image" content="https://www.jdresistencias.com.br/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="JD Resistências" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resistências Industriais e Fornos | JD Resistências" />
        <meta name="twitter:description" content="Desde 1975, resistências elétricas e fornos industriais. Fabricação, reforma e manutenção." />
        <meta name="twitter:image" content="https://www.jdresistencias.com.br/og-image.png" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.jdresistencias.com.br",
                  "name": "JD Resistências Industriais",
                  "description": "Fabricação de resistências elétricas e fornos industriais desde 1975. Reforma e manutenção de equipamentos industriais.",
                  "url": "https://www.jdresistencias.com.br",
                  "telephone": "+5511995509477",
                  "email": "jd.ltda@uol.com.br",
                  "foundingDate": "1975",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Carapicuíba",
                    "addressRegion": "SP",
                    "addressCountry": "BR"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Brasil"
                  },
                  "priceRange": "$$",
                  "image": "https://www.jdresistencias.com.br/logo.png",
                  "logo": "https://www.jdresistencias.com.br/logo.png",
                  "sameAs": [],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Resistências e Fornos Industriais",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Resistências Elétricas Industriais", "description": "Resistências tubulares, de imersão e elementos aquecedores fabricados sob especificação em aço inox, Kanthal e Inconel. Até 1400°C." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Fornos Industriais", "description": "Fornos de câmara, contínuos e mufla para tratamento térmico, têmpera, revenimento, recozimento e fusão industrial." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manutenção e Reforma de Fornos", "description": "Manutenção preventiva e corretiva de fornos industriais de qualquer marca. Troca de resistências." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Projetos Customizados", "description": "Fabricação de resistências e fornos sob especificação técnica para qualquer aplicação industrial." } }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.jdresistencias.com.br/#website",
                  "url": "https://www.jdresistencias.com.br",
                  "name": "JD Resistências",
                  "description": "Resistências Elétricas Industriais e Fornos Industriais",
                  "inLanguage": "pt-BR"
                }
              ]
            })
          }}
        />

        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Services />
        <Videos />
        <Applications />
        <Differentials />
        <AboutUs />
        <Process />
        <MainCTA />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
