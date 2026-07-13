const canais = [
  {
    icon: "💬",
    title: "Discord",
    desc: "Canal principal. Resposta em minutos.",
    action: "Entrar no Servidor",
    href: "https://discord.gg/2UmnhteyB",
    detail: "discord.gg/2UmnhteyB",
  },
  {
    icon: "📱",
    title: "WhatsApp",
    desc: "Atendimento direto e rápido.",
    action: "Falar no WhatsApp",
    href: "https://wa.me/5584988062980",
    detail: "+55 (84) 98806-2980",
  },
];

const faq = [
  {
    q: "O que é Gema Laterais?",
    a: "Serviço de farm de gemas laterais no Diablo Immortal. A gente faz o grind completo e você fica com as gemas. Preço fixo de R$ 30 avulso ou R$ 25 no pacote.",
  },
  {
    q: "O que é Fenda do Medo?",
    a: "Clear completo da Fenda do Medo (Fear Rift). Recompensas garantidas. R$ 30 avulso ou R$ 25 no pacote.",
  },
  {
    q: "Qual a diferença do Pacote Mensal?",
    a: "No Pacote Mensal (R$ 150/mês) você recebe 4 execuções de cada serviço por mês, com Brassa de bônus. Economia de R$ 90 em relação ao avulso.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Pagamento via Pix. Pacotes mensais podem ser parcelados. Chama no WhatsApp ou Discord que a gente alinha.",
  },
  {
    q: "Minha conta corre risco?",
    a: "Mínimo. Usamos VPN dedicada com IP próximo ao seu, jogamos nos mesmos horários, zero cheat. É como se você mesmo estivesse jogando.",
  },
  {
    q: "E se der algo errado?",
    a: "Oferecemos garantia. Se algo acontecer (raro), refazemos ou devolvemos. Nosso protocolo de segurança nunca deu problema.",
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {canais.map((canal) => (
              <div
                key={canal.title}
                className="p-8 bg-diablo-stone/30 border border-diablo-stone-light/50 rounded-lg text-center hover:border-diablo-gold/20 transition-all"
              >
                <span className="text-5xl mb-4 block">{canal.icon}</span>
                <h2 className="font-cinzel text-diablo-gold text-xl mb-2">{canal.title}</h2>
                <p className="text-sm text-text-secondary mb-1">{canal.desc}</p>
                <p className="text-xs text-diablo-gold-dark mb-6 font-mono">{canal.detail}</p>
                <a
                  href={canal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-diablo-gold text-diablo-black font-semibold rounded hover:bg-diablo-gold-light transition-colors"
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
    </>
  );
}
