import "@/styles/globals.css";
import type { AppProps } from "next/app";
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
    <Component {...pageProps} />
  );
}
