import type { GetServerSideProps } from "next";
import { PRODUCTS } from "@/lib/products";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const base = "https://www.jdresistencias.com.br";
  const pages = [
    { path: "", priority: "1.0", changeFrequency: "weekly" },
    ...PRODUCTS.map(product => ({
      path: `/produtos/${product.slug}`,
      priority: "0.8",
      changeFrequency: "monthly",
    })),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${base}${page.path}</loc>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.end(sitemap);
  return { props: {} };
};

export default function Sitemap() { return null; }
