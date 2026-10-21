import Head from "next/head";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-5 py-16 text-[#D5D9DD]">
      <Head>
        <title>Página não encontrada | JD Resistências</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <p className="text-sm font-bold text-[#E07020]">ERRO 404</p>
      <h1 className="mt-4 text-4xl font-black text-white">Página não encontrada</h1>
      <p className="mt-4 max-w-xl leading-relaxed">O endereço informado não existe ou foi alterado. Consulte os produtos e serviços disponíveis no site da JD Resistências.</p>
      <Link href="/#produtos" className="mt-8 inline-flex w-fit bg-[#B83A2F] px-5 py-3 font-bold text-white hover:bg-[#C74639]">Ver produtos e serviços</Link>
    </main>
  );
}
