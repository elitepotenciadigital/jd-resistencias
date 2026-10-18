import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { trackWhatsAppConversion } from "@/lib/googleAds";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const trackWhatsAppLink = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");

      if (link && /(?:wa\.me|api\.whatsapp\.com)/i.test(link.href)) {
        trackWhatsAppConversion();
      }
    };

    document.addEventListener("click", trackWhatsAppLink);
    return () => document.removeEventListener("click", trackWhatsAppLink);
  }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17995709868"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17995709868');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
