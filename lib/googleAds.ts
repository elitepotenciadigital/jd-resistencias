declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = "AW-17995709868";
export const GA4_MEASUREMENT_ID = "G-G54W7LW2CN";

type EventParameters = Record<string, unknown>;

function currentPagePath() {
  return typeof window === "undefined"
    ? undefined
    : `${window.location.pathname}${window.location.search}`;
}

export function trackAnalyticsEvent(name: string, parameters: EventParameters = {}) {
  window.gtag?.("event", name, parameters);
}

export function trackPageView(url: string) {
  window.gtag?.("event", "page_view", {
    page_location: `${window.location.origin}${url}`,
    page_path: url,
    page_title: document.title,
  });
}

export function trackWhatsAppConversion(source = "website_link") {
  trackAnalyticsEvent("whatsapp_click", {
    contact_method: "whatsapp",
    source,
    page_path: currentPagePath(),
  });

  window.gtag?.("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/fJeVCPm6x6EdEKz7goVD`,
    value: 1,
    currency: "BRL",
  });
}

export function trackPhoneClick(source = "website_link") {
  trackAnalyticsEvent("phone_click", {
    contact_method: "phone",
    source,
    page_path: currentPagePath(),
  });
}

export function trackEmailClick(source = "website_link") {
  trackAnalyticsEvent("email_click", {
    contact_method: "email",
    source,
    page_path: currentPagePath(),
  });
}

export function trackContactFormSubmit() {
  trackAnalyticsEvent("generate_lead", {
    contact_method: "contact_form",
    page_path: currentPagePath(),
  });
}

export function trackProductView(productId: string, productName: string) {
  trackAnalyticsEvent("view_item", {
    currency: "BRL",
    value: 0,
    items: [{ item_id: productId, item_name: productName }],
  });
}
