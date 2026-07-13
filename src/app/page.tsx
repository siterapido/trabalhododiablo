import Link from "next/link";

const servicos = [
  {
    icon: "💎",
    title: "Gema Laterais",
    desc: "Farm de gemas laterais completo. Acelere seu progresso sem o grind diário.",
    avulso: "R$ 30",
  },
  {
    icon: "🌀",
    title: "Fenda do Medo",
    desc: "Clear completo da Fenda do Medo. Recompensas garantidas.",
    avulso: "R$ 30",
  },
];

const pacotes = [
  {
    nome: "📅 Pacote Semanal",
    freq: "1x por semana",
    preco: "R$ 25 cada",
    items: [
      { name: "Gema Laterais", price: "R$ 25" },
      { name: "Fenda do Medo", price: "R$ 25" },
    ],
  },
  {
    nome: "📆 Pacote Mensal",
    freq: "4x no mês",
    preco: "R$ 150/mês",
    destaque: true,
    items: [
      { name: "Gema Laterais", price: "R$ 25" },
      { name: "Fenda do Medo", price: "R$ 25" },
      { name: "🔥 Brasa (Bônus)", price: "Grátis" },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-diablo-texture">
          <div className="absolute inset-0 bg-gradient-to-b from-diablo-black/60 via-diablo-black/40 to-diablo-black" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-diablo-blood/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-diablo-gold/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-diablo-blood/20 border border-diablo-blood/30 rounded-full text-xs text-diablo-blood-light uppercase tracking-widest mb-6 animate-glow">
              <span className="w-1.5 h-1.5 bg-diablo-blood-light rounded-full" />
              Serviços Diablo Immortal — Preço em R$
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-cinzel text-diablo-gold leading-tight mb-6">
              O Inferno Espera.
              <br />
              <span className="text-[#e5e5e5]">Nós Te Levamos.</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
              Farm de Gemas Laterais e Fenda do Medo — avulso, semanal ou mensal.
              Pagamento via Pix, acompanhamento no Discord.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-diablo-gold text-diablo-black font-semibold rounded hover:bg-diablo-gold-light transition-colors"
              >
                Ver Serviços
                <span>→</span>
              </Link>
              <a
                href="https://discord.gg/2UmnhteyB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-diablo-stone-light text-text-secondary hover:text-diablo-gold hover:border-diablo-gold/30 rounded transition-all"
              >
                💬 Discord
              </a>
            </div>

            <div className="flex gap-8 mt-12 pt-8 border-t border-diablo-stone-light/50">
              {[
                { value: "500+", label: "Serviços" },
                { value: "98%", label: "Satisfação" },
                { value: "24/7", label: "Suporte" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-cinzel text-diablo-gold">{s.value}</p>
                  <p className="text-xs text-text-muted uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Avulso */}
      <section className="py-20 bg-diablo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-cinzel text-diablo-gold mb-4">
              Serviços Avulso
            </h2>
            <div className="gold-divider w-24 mx-auto mb-4" />
            <p className="text-text-secondary max-w-xl mx-auto">
              Preço fixo por serviço. Pagamento via Pix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {servicos.map((svc) => (
              <div
                key={svc.title}
                className="group p-8 bg-diablo-stone/50 border border-diablo-stone-light hover:border-diablo-gold/30 rounded-lg transition-all hover:bg-diablo-stone/80 text-center"
              >
                <span className="text-4xl mb-4 block">{svc.icon}</span>
                <h3 className="font-cinzel text-diablo-gold text-xl mb-2">{svc.title}</h3>
                <p className="text-sm text-text-muted mb-4 leading-relaxed">{svc.desc}</p>
                <p className="text-3xl font-cinzel text-diablo-gold-light font-bold">{svc.avulso}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes */}
      <section className="py-20 bg-diablo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-cinzel text-diablo-gold mb-4">
              Pacotes Recorrentes
            </h2>
            <div className="gold-divider w-24 mx-auto mb-4" />
            <p className="text-text-secondary max-w-xl mx-auto">
              Preço menor por serviço. Fidelidade tem vantagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {pacotes.map((pct) => (
              <div
                key={pct.nome}
                className={`relative p-8 rounded-lg border transition-all ${
                  pct.destaque
                    ? "bg-diablo-stone/60 border-diablo-gold/40 hover:border-diablo-gold/70"
                    : "bg-diablo-stone/30 border-diablo-stone-light/50 hover:border-diablo-stone-light"
                }`}
              >
                {pct.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-diablo-gold text-diablo-black text-xs font-bold uppercase rounded-full">
                    Melhor Custo-Benefício
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-cinzel text-2xl text-diablo-gold mb-1">{pct.nome}</h3>
                  <p className="text-xs text-text-muted uppercase tracking-wider">{pct.freq}</p>
                  <p className={`text-2xl font-cinzel font-bold mt-3 ${pct.destaque ? "text-diablo-gold-light" : "text-diablo-gold"}`}>
                    {pct.preco}
                  </p>
                </div>
                <ul className="space-y-3">
                  {pct.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-center text-sm">
                      <span className="text-text-secondary">{item.name}</span>
                      <span className="text-diablo-gold font-mono">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-diablo-dark border-t border-diablo-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-cinzel text-diablo-gold mb-4">
            Bora Fechar?
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8">
            Chama no Discord ou WhatsApp. Pagamento via Pix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/2UmnhteyB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-diablo-gold text-diablo-black font-semibold rounded hover:bg-diablo-gold-light transition-colors"
            >
              💬 Discord
            </a>
            <a
              href="https://wa.me/5584988062980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-diablo-stone-light text-text-secondary hover:text-diablo-gold hover:border-diablo-gold/30 rounded transition-all"
            >
              📱 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
