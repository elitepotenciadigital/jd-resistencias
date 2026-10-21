import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return <main className="max-w-3xl mx-auto px-5 py-12 text-[#D5D9DD] leading-relaxed space-y-6">
    <Head><title>Privacidade | JD Resistências</title><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="robots" content="noindex, follow" /></Head>
    <Link href="/" className="text-white underline">Voltar ao site</Link>
    <h1 className="text-3xl font-bold text-white">Política de Privacidade</h1>
    <p>O formulário coleta nome, email, telefone, empresa e mensagem para atender sua solicitação comercial. Ao continuar, esses dados são incluídos na mensagem destinada ao WhatsApp da JD Resistências.</p>
    <p>O site também processa os dados no servidor e registra informações técnicas de acesso, como IP e navegador. Quando configurada, a integração de contatos encaminha a solicitação para o sistema de atendimento da empresa.</p>
    <p>O atendimento pelo WhatsApp utiliza um serviço externo, sujeito às políticas de privacidade desse serviço. Não inclua senhas, documentos pessoais ou dados bancários na mensagem.</p>
    <h2 className="text-xl font-bold text-white">Medição do site e dos anúncios</h2>
    <p>Com sua autorização, usamos o Google Analytics para medir visitas e interações e o Google Ads para atribuir campanhas e conversões. A medição pode incluir páginas visitadas, parâmetros da campanha, tipo de dispositivo e interações com telefone, email, formulário ou WhatsApp. Um clique no WhatsApp não confirma o envio da mensagem.</p>
    <p>As categorias opcionais começam desativadas. Você pode aceitar, recusar ou alterar sua escolha a qualquer momento em “Preferências de cookies”, no rodapé. A escolha fica armazenada neste navegador.</p>
    <p>A JD não ativa anúncios personalizados por meio desta configuração. Os serviços do Google tratam dados conforme suas próprias políticas e os sinais de consentimento enviados pelo site.</p>
    <p>Para dúvidas sobre seus dados ou para solicitar correção ou exclusão, entre em contato com a JD pelo telefone (11) 99550-9477.</p>
  </main>;
}
