import { Html, Head, Main, NextScript } from "next/document";
import { GA4_MEASUREMENT_ID, GOOGLE_ADS_ID } from "@/lib/googleAds";

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
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_MEASUREMENT_ID}');
gtag('config', '${GOOGLE_ADS_ID}');`,
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
