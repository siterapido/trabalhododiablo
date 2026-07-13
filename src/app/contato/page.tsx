import Link from "next/link";

const canais = [
  {
    icon: "💬",
    title: "Discord",
    desc: "Canal principal. Resposta em minutos.",
    action: "Entrar no Servidor",
    href: "https://discord.gg/trabalhododiablo",
    detail: "trabalhododiablo",
  },
  {
    icon: "📱",
    title: "WhatsApp",
    desc: "Para clients que preferem algo mais direto.",
    action: "Chamar no WhatsApp",
    href: "https://wa.me/5511999999999",
    detail: "+55 (11) 99999-9999",
  },
  {
    icon: "📧",
    title: "E-mail",
    desc: "Para propostas e parcerias.",
    action: "Enviar E-mail",
    href: "mailto:contato@trabalhododiablo.com",
    detail: "contato@trabalhododiablo.com",
  },
];

const faq = [
  {
    q: "Como funciona o serviço?",
    a: "Você escolhe o serviço, entra em contato, paga via Pix, a gente faz o boost e avisa quando terminar. Simples.",
  },
  {
    q: "Por que preço em Real?",
    a: "Porque somos brasileiros e nossos clientes são brasileiros. Pagamento via Pix, sem taxa de câmbio, sem surpresa de IOF. O preço que tá na tela é o que você paga.",
  },
  {
    q: "Minha conta corre risco?",
    a: "Mínimo. Usamos VPN dedicada com IP próximo ao seu, jogamos nos mesmos horários que você, zero cheat. É como se você mesmo estivesse jogando.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Depende do serviço. Level 1-60 leva 2-4 horas. Helliquary boss é 15 minutos. PvP rank boost pode levar até 12h para ranks altos.",
  },
  {
    q: "Quais formas de pagamento?",
    a: "Pix (principal) e Crypto (BTC, ETH, USDT). Pagamento antecipado para serviços avulsos. Parcelamos pacotes acima de R$ 200.",
  },
  {
    q: "E se der algo errado?",
    a: "Oferecemos garantia de 48h. Se algo acontecer (raro), refazemos ou devolvemos. Nunca tivemos problema com ban por seguir nosso protocolo.",
  },
];

export default function Contato() {
  return (
    <>
      <section className="py-16 bg-diablo-dark border-b border-diablo-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-cinzel text-diablo-gold mb-4">
            Fale Conosco
          </h1>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="text-text-secondary max-w-xl mx-auto">
            Escolhe o canal que preferir. Pagamento via Pix 💰
          </p>
        </div>
      </section>

      <section className="py-16 bg-diablo-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {canais.map((canal) => (
              <div
                key={canal.title}
                className="p-6 bg-diablo-stone/30 border border-diablo-stone-light/50 rounded-lg text-center hover:border-diablo-gold/20 transition-all"
              >
                <span className="text-4xl mb-3 block">{canal.icon}</span>
                <h2 className="font-cinzel text-diablo-gold text-lg mb-2">{canal.title}</h2>
                <p className="text-sm text-text-secondary mb-1">{canal.desc}</p>
                <p className="text-xs text-diablo-gold-dark mb-4 font-mono">{canal.detail}</p>
                <a
                  href={canal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-diablo-gold text-diablo-black text-sm font-semibold rounded hover:bg-diablo-gold-light transition-colors"
                >
                  {canal.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-diablo-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-cinzel text-diablo-gold mb-4">
              Perguntas Frequentes
            </h2>
            <div className="gold-divider w-20 mx-auto" />
          </div>

          <div className="space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="group border border-diablo-stone-light/30 rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer flex items-center justify-between bg-diablo-stone/20 hover:bg-diablo-stone/40 transition-colors">
                  <span className="text-sm font-medium text-diablo-gold">{item.q}</span>
                  <svg
                    className="w-4 h-4 text-diablo-gold group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 border-t border-diablo-stone-light/30">
                  <p className="text-sm text-text-secondary leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-diablo-black border-t border-diablo-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-diablo-gold font-cinzel text-lg mb-2">💰 Pix — pagamento mais rápido do Brasil</p>
          <p className="text-text-secondary text-sm">
            💬 Discord é onde a gente responde mais rápido.
          </p>
        </div>
      </section>
    </>
  );
}
