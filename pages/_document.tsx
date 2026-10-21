import { Html, Head, Main, NextScript } from "next/document";
import { GA4_MEASUREMENT_ID, GOOGLE_ADS_ID } from "@/lib/googleAds";
import { CONSENT_STORAGE_KEY } from "@/lib/consent";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
  var consent = {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  };
  try {
    var saved = JSON.parse(localStorage.getItem('${CONSENT_STORAGE_KEY}') || 'null');
    if (saved && saved.version === 1) {
      consent.analytics_storage = saved.analytics ? 'granted' : 'denied';
      consent.ad_storage = saved.advertising ? 'granted' : 'denied';
      consent.ad_user_data = saved.advertising ? 'granted' : 'denied';
    }
  } catch (error) {}
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', consent);
  window.gtag('js', new Date());
  window.gtag('config', '${GA4_MEASUREMENT_ID}');
  window.gtag('config', '${GOOGLE_ADS_ID}');
})();`,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
