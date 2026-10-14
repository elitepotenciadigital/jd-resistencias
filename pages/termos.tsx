import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return <main className="max-w-3xl mx-auto px-5 py-12 text-[#D5D9DD] leading-relaxed space-y-6">
    <Head><title>Informações Comerciais | JD Resistências</title><meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
    <Link href="/" className="text-white underline">Voltar ao site</Link>
    <h1 className="text-3xl font-bold text-white">Informações Comerciais e Uso do Site</h1>
    <p>O site apresenta produtos e serviços da JD Resistências. As informações gerais não substituem a avaliação técnica e o orçamento específico de cada projeto.</p>
    <p>Especificações, temperatura de operação, materiais, disponibilidade, preço, condições de pagamento e entrega são definidos na proposta comercial, conforme a necessidade e as condições de aplicação.</p>
    <p>O envio do formulário inicia uma solicitação de atendimento. A contratação e as condições de fornecimento dependem de proposta e aceite entre as partes.</p>
    <p>Para confirmar informações sobre um produto ou projeto, fale com nossa equipe pelo telefone (11) 99550-9477.</p>
  </main>;
}
