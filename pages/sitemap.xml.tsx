import type { GetServerSideProps } from "next";
import { PRODUCTS } from "@/lib/products";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const base = "https://www.jdresistencias.com.br";
  const paths = ["", ...PRODUCTS.map(p => `/produtos/${p.slug}`), "/privacidade", "/termos"];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${base}${path}</loc></url>`).join("")}</urlset>`;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.end(sitemap);
  return { props: {} };
};

export default function Sitemap() { return null; }
