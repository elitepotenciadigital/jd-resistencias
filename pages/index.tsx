import Head from "next/head";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Metrics from "@/components/sections/Metrics";
import Services from "@/components/sections/Services";
import Applications from "@/components/sections/Applications";
import Differentials from "@/components/sections/Differentials";
import Gallery from "@/components/sections/Gallery";
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
        <title>JD Resistências — Fornos e Resistências Industriais | Desde 1975</title>
        <meta
          name="description"
          content="49 anos de precisão em alta temperatura. Fornos industriais e resistências elétricas customizadas para sua produção. Qualidade certificada, entrega no prazo. Carapicuíba, SP."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jdresistencias.com.br" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jdresistencias.com.br" />
        <meta property="og:title" content="JD Resistências — Fornos e Resistências Industriais" />
        <meta
          property="og:description"
          content="49 anos de precisão em alta temperatura. Fornos industriais e resistências elétricas para sua produção."
        />
        <meta property="og:locale" content="pt_BR" />

        {/* Favicon placeholder */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Logos />
        <Metrics />
        <Services />
        <Applications />
        <Differentials />
        <Gallery />
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
