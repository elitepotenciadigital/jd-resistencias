export const CONSENT_STORAGE_KEY = "jd-consent-v1";

export type ConsentPreferences = {
  version: 1;
  analytics: boolean;
  advertising: boolean;
  updatedAt: string;
};

export function readConsentPreferences(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const saved = JSON.parse(window.localStorage.getItem(CONSENT_STORAGE_KEY) || "null");
    if (
      saved?.version === 1 &&
      typeof saved.analytics === "boolean" &&
      typeof saved.advertising === "boolean"
    ) {
      return saved as ConsentPreferences;
    }
  } catch {
    return null;
  }

  return null;
}

export function saveConsentPreferences(
  preferences: Pick<ConsentPreferences, "analytics" | "advertising">,
) {
  const saved: ConsentPreferences = {
    version: 1,
    ...preferences,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(saved));
  window.gtag?.("consent", "update", {
    analytics_storage: saved.analytics ? "granted" : "denied",
    ad_storage: saved.advertising ? "granted" : "denied",
    ad_user_data: saved.advertising ? "granted" : "denied",
    ad_personalization: "denied",
  });

  window.dispatchEvent(new CustomEvent("jd-consent-changed", { detail: saved }));
  return saved;
}

