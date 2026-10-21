import Link from "next/link";
import { ShieldCheck, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  readConsentPreferences,
  saveConsentPreferences,
  type ConsentPreferences,
} from "@/lib/consent";

type DraftPreferences = Pick<ConsentPreferences, "analytics" | "advertising">;

const DEFAULT_PREFERENCES: DraftPreferences = {
  analytics: false,
  advertising: false,
};

const subscribeToClient = () => () => {};

export default function CookieConsent() {
  const isClient = useSyncExternalStore(subscribeToClient, () => true, () => false);
  const [manuallyVisible, setManuallyVisible] = useState(false);
  const [resolvedThisVisit, setResolvedThisVisit] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<DraftPreferences>(DEFAULT_PREFERENCES);
  const hasSavedPreferences = isClient && Boolean(readConsentPreferences());
  const visible = manuallyVisible || (isClient && !hasSavedPreferences && !resolvedThisVisit);

  useEffect(() => {
    const openSettings = () => {
      const current = readConsentPreferences();
      if (current) {
        setPreferences({ analytics: current.analytics, advertising: current.advertising });
      }
      setShowDetails(true);
      setManuallyVisible(true);
    };

    window.addEventListener("jd-open-consent-settings", openSettings);
    return () => window.removeEventListener("jd-open-consent-settings", openSettings);
  }, []);

  function commit(next: DraftPreferences) {
    saveConsentPreferences(next);
    setPreferences(next);
    setResolvedThisVisit(true);
    setManuallyVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      aria-describedby="consent-description"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl border border-white/15 bg-[#151515] p-5 shadow-2xl sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center bg-[#252525] text-[#E07020] sm:flex">
          <ShieldCheck aria-hidden="true" size={21} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="consent-title" className="text-base font-bold text-white">Privacidade e medição</h2>
              <p id="consent-description" className="mt-2 text-sm leading-relaxed text-[#C6CDD3]">
                Usamos cookies opcionais para entender o uso do site e medir os anúncios. Cookies necessários permanecem ativos para o funcionamento do site.
              </p>
            </div>
            {readConsentPreferences() && (
              <button
                type="button"
                onClick={() => setManuallyVisible(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-[#C6CDD3] hover:border-white/35 hover:text-white"
                aria-label="Fechar preferências"
                title="Fechar"
              >
                <X aria-hidden="true" size={18} />
              </button>
            )}
          </div>

          {showDetails && (
            <div className="mt-5 grid gap-3 border-y border-white/10 py-4 sm:grid-cols-2">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={event => setPreferences(current => ({ ...current, analytics: event.target.checked }))}
                  className="mt-1 h-4 w-4"
                  style={{ accentColor: "#E07020" }}
                />
                <span>
                  <strong className="block text-sm text-white">Medição do site</strong>
                  <span className="mt-1 block text-xs leading-relaxed text-[#AEB5BB]">Analytics, páginas visitadas e interações com produtos.</span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={preferences.advertising}
                  onChange={event => setPreferences(current => ({ ...current, advertising: event.target.checked }))}
                  className="mt-1 h-4 w-4"
                  style={{ accentColor: "#E07020" }}
                />
                <span>
                  <strong className="block text-sm text-white">Medição de anúncios</strong>
                  <span className="mt-1 block text-xs leading-relaxed text-[#AEB5BB]">Atribuição de campanhas e conversões do Google Ads, sem anúncios personalizados.</span>
                </span>
              </label>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => commit({ analytics: true, advertising: true })}
              className="bg-[#B83A2F] px-5 py-3 text-sm font-bold text-white hover:bg-[#C74639]"
            >
              Aceitar medição
            </button>
            {showDetails ? (
              <button
                type="button"
                onClick={() => commit(preferences)}
                className="border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-white/40"
              >
                Salvar preferências
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-white/40"
              >
                <SlidersHorizontal aria-hidden="true" size={16} />
                Configurar
              </button>
            )}
            <button
              type="button"
              onClick={() => commit(DEFAULT_PREFERENCES)}
              className="px-3 py-2 text-sm font-semibold text-[#C6CDD3] underline underline-offset-4 hover:text-white"
            >
              Recusar opcionais
            </button>
            <Link href="/privacidade" className="text-center text-xs text-[#AEB5BB] underline underline-offset-4 hover:text-white sm:ml-auto">
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

