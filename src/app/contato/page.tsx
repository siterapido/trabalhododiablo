import {
  DiscordIcon,
  WhatsAppIcon,
  CoinIcon,
} from "@/components/icons";

const canais = [
  {
    id: "discord",
    title: "Discord",
    desc: "Canal principal. Resposta em minutos.",
    action: "Entrar no Servidor",
    href: "https://discord.gg/2UmnhteyB",
    detail: "discord.gg/2UmnhteyB",
  },
  {
    id: "whatsapp",
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
    a: "Serviço de farm de gemas laterais no Diablo Immortal. A gente faz o grind completo e você fica com as gemas. R$ 30 avulso ou R$ 25 no pacote.",
  },
  {
    q: "O que é Fenda do Medo?",
    a: "Clear completo da Fenda do Medo. Recompensas garantidas. R$ 30 avulso ou R$ 25 no pacote.",
  },
  {
    q: "Qual a diferença do Pacote Mensal?",
    a: "No Pacote Mensal (R$ 150/mês) você recebe 4 execuções de cada serviço, com Brasa de bônus. Economia de R$ 90 em relação ao avulso.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Pagamento via Pix. Parcelamos pacotes acima de R$ 200.",
  },
  {
    q: "Minha conta corre risco?",
    a: "Mínimo. Usamos VPN dedicada, horários compatíveis, zero cheat. Tudo manual.",
  },
  {
    q: "E se der algo errado?",
    a: "Garantia inclusa. Refazemos ou devolvemos. Nunca tivemos problema.",
  },
];

export default function Contato() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hell-bg.jpg" alt="" className="parallax-img" />
          <div className="absolute inset-0 bg-gradient-to-b from-diablo-darker/90 via-diablo-black/80 to-diablo-darker/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-cinzel text-gold-gradient mb-4">
            Fale Conosco
          </h1>
          <div className="gothic-divider w-24 mx-auto mb-4" />
          <p className="text-text-secondary max-w-xl mx-auto inline-flex items-center gap-1.5">
            Escolhe o canal que preferir. Pagamento via Pix{" "}
            <CoinIcon size={20} className="text-diablo-gold" />
          </p>
        </div>
      </section>

      <section className="py-20 bg-diablo-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {canais.map((canal) => (
              <div
                key={canal.title}
                className="glass-card rounded-xl p-8 text-center group"
              >
                <div className="mb-4 flex justify-center">
                  {canal.id === "discord" ? (
                    <DiscordIcon size={48} className="text-[#5865F2]" />
                  ) : (
                    <WhatsAppIcon size={48} className="text-[#25D366]" />
                  )}
                </div>
                <h2 className="font-cinzel text-diablo-gold text-xl mb-2">
                  {canal.title}
                </h2>
                <p className="text-sm text-text-secondary mb-1">{canal.desc}</p>
                <p className="text-xs text-diablo-gold-dark mb-6 font-mono">
                  {canal.detail}
                </p>
                <a
                  href={canal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    canal.id === "discord"
                      ? "inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5865F2] to-[#4752C4] text-white font-semibold rounded-lg hover:from-[#4752C4] hover:to-[#5865F2] transition-all hover:shadow-lg hover:shadow-[#5865F2]/20 btn-glow"
                      : "inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
                  }
                >
                  {canal.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-diablo-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-cinzel text-gold-gradient mb-4">
              FAQ
            </h2>
            <div className="gothic-divider w-20 mx-auto" />
          </div>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group glass-card rounded-lg overflow-hidden"
              >
                <summary className="p-4 cursor-pointer flex items-center justify-between hover:bg-diablo-stone/30 transition-colors">
                  <span className="text-sm font-medium text-diablo-gold">
                    {item.q}
                  </span>
                  <svg
                    className="w-4 h-4 text-diablo-gold group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="p-4 border-t border-diablo-stone-light/30">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-diablo-black border-t border-diablo-stone-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-diablo-gold font-cinzel text-lg inline-flex items-center gap-2">
            <CoinIcon size={20} className="text-diablo-gold" />
            Pix — pagamento mais rápido do Brasil
          </p>
        </div>
      </section>
    </>
  );
}
