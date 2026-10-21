import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  trackEmailClick,
  trackPageView,
  trackPhoneClick,
  trackWhatsAppConversion,
} from "@/lib/googleAds";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const trackContactLink = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      if (/(?:wa\.me|api\.whatsapp\.com)/i.test(link.href)) {
        trackWhatsAppConversion("website_link");
      } else if (link.protocol === "tel:") {
        trackPhoneClick("website_link");
      } else if (link.protocol === "mailto:") {
        trackEmailClick("website_link");
      }
    };

    document.addEventListener("click", trackContactLink);
    return () => document.removeEventListener("click", trackContactLink);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => trackPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <Component {...pageProps} />
  );
}
