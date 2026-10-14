import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return <main className="max-w-3xl mx-auto px-5 py-12 text-[#D5D9DD] leading-relaxed space-y-6">
    <Head><title>Privacidade | JD Resistências</title><meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
    <Link href="/" className="text-white underline">Voltar ao site</Link>
    <h1 className="text-3xl font-bold text-white">Política de Privacidade</h1>
    <p>O formulário coleta nome, email, telefone, empresa e mensagem para atender sua solicitação comercial. Ao continuar, esses dados são incluídos na mensagem destinada ao WhatsApp da JD Resistências.</p>
    <p>O site também processa os dados no servidor e registra informações técnicas de acesso, como IP e navegador. Quando configurada, a integração de contatos encaminha a solicitação para o sistema de atendimento da empresa.</p>
    <p>O atendimento pelo WhatsApp utiliza um serviço externo, sujeito às políticas de privacidade desse serviço. Não inclua senhas, documentos pessoais ou dados bancários na mensagem.</p>
    <p>Para dúvidas sobre seus dados ou para solicitar correção ou exclusão, entre em contato com a JD pelo telefone (11) 99550-9477.</p>
  </main>;
}
