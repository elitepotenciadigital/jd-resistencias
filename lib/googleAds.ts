declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppConversion() {
  window.gtag?.("event", "conversion", {
    send_to: "AW-17995709868/fJeVCPm6x6EdEKz7goVD",
    value: 1,
    currency: "BRL",
  });
}
