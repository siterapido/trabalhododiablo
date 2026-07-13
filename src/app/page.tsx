import Link from "next/link";

const services = [
  {
    icon: "⚡",
    title: "Power Leveling",
    desc: "Suba de nível rapidamente. De 1 a 60 + Paragon sem estresse.",
    prices: ["1-60: $10", "Paragon 10 níveis: $5", "Paragon 50 níveis: $20"],
  },
  {
    icon: "👹",
    title: "Helliquary Raid",
    desc: "Carry semanal nos chefes Helliquary. Toma conta de tudo.",
    prices: ["Por boss: $5", "Pack semanal (3 bosses): $12", "Pack mensal: $40"],
  },
  {
    icon: "🌀",
    title: "Challenge Rift",
    desc: "Clear de Challenge Rift em qualquer tier. Garantido.",
    prices: ["Tier 1-50: $8", "Tier 51-100: $15", "Tier 100+: $25"],
  },
  {
    icon: "⚔️",
    title: "PvP Rank Boost",
    desc: "Suba seu ranking em Battlegrounds. Rating competitivo.",
    prices: ["Bronze → Prata: $10", "Prata → Ouro: $20", "Ouro → Lendário: $50+"],
  },
  {
    icon: "🎫",
    title: "Battle Pass",
    desc: "Complete o Battle Pass diário/semanal sem jogar.",
    prices: ["BP Normal: $15", "BP Reforçado: $25", "BP + Níveis: $35"],
  },
  {
    icon: "💎",
    title: "Gem & Item Farm",
    desc: "Farm de gemas lendárias, sets e equipamentos específicos.",
    prices: ["Gema Lendária: $8", "Set completo: $20", "Item específico: $5"],
  },
];

const diferencas = [
  { icon: "🛡️", title: "Segurança", desc: "VPN dedicada, sem histórico de login suspeito. Sua conta protegida." },
  { icon: "⚡", title: "Velocidade", desc: "Equipe 24/7. Serviço concluído em horas, não dias." },
  { icon: "💬", title: "Suporte Direto", desc: "Acompanhamento via Discord em tempo real. Você sabe o que está rolando." },
  { icon: "💰", title: "Melhor Preço", desc: "Preço justo, sem taxa de marketplace. Pagamento via Pix ou crypto." },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background com gradiente e textura */}
        <div className="absolute inset-0 bg-diablo-texture">
          <div className="absolute inset-0 bg-gradient-to-b from-diablo-black/60 via-diablo-black/40 to-diablo-black" />
          {/* Efeito de glow vermelho */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-diablo-blood/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-diablo-gold/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-diablo-blood/20 border border-diablo-blood/30 rounded-full text-xs text-diablo-blood-light uppercase tracking-widest mb-6 animate-glow">
              <span className="w-1.5 h-1.5 bg-diablo-blood-light rounded-full" />
              Boosting Profissional
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-cinzel text-diablo-gold leading-tight mb-6">
              O Inferno Espera.
              <br />
              <span className="text-[#e5e5e5]">Nós Te Levamos.</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
              Serviços de boosting para Diablo Immortal. Do level 1 ao endgame,
              carries e farms — tudo que você precisa pra aproveitar o jogo sem o grind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-diablo-gold text-diablo-black font-semibold rounded hover:bg-diablo-gold-light transition-colors"
              >
                Ver Serviços
                <span>→</span>
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-diablo-stone-light text-text-secondary hover:text-diablo-gold hover:border-diablo-gold/30 rounded transition-all"
              >
                💬 Fale Conosco
              </Link>
            </div>

            {/* Stats */}
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

      {/* Serviços Section */}
      <section className="py-20 bg-diablo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-cinzel text-diablo-gold mb-4">
              Nossos Serviços
            </h2>
            <div className="gold-divider w-24 mx-auto mb-4" />
            <p className="text-text-secondary max-w-xl mx-auto">
              Escolha o que precisa, a gente faz o trabalho pesado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group p-6 bg-diablo-stone/50 border border-diablo-stone-light hover:border-diablo-gold/30 rounded-lg transition-all hover:bg-diablo-stone/80"
              >
                <span className="text-3xl mb-3 block">{svc.icon}</span>
                <h3 className="font-cinzel text-diablo-gold text-lg mb-2">{svc.title}</h3>
                <p className="text-sm text-text-muted mb-4 leading-relaxed">{svc.desc}</p>
                <ul className="space-y-1">
                  {svc.prices.map((p) => (
                    <li key={p} className="text-xs text-diablo-gold-dark font-mono">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-diablo-gold hover:text-diablo-gold-light transition-colors font-medium"
            >
              Ver todos os serviços detalhados →
            </Link>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-diablo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-cinzel text-diablo-gold mb-4">
              Por Que Nós?
            </h2>
            <div className="gold-divider w-24 mx-auto mb-4" />
            <p className="text-text-secondary max-w-xl mx-auto">
              Não somos apenas mais um boost. Somos jogadores veteranos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferencas.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 border border-diablo-stone-light/50 rounded-lg hover:border-diablo-gold/20 transition-colors"
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-cinzel text-diablo-gold mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-diablo-dark border-t border-diablo-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-cinzel text-diablo-gold mb-4">
            Pronto para Evoluir?
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8">
            Chama no Discord. A gente faz o boost enquanto você aproveita o jogo de verdade.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-diablo-gold text-diablo-black font-semibold rounded hover:bg-diablo-gold-light transition-colors"
          >
            💬 Entrar no Discord
          </Link>
        </div>
      </section>
    </>
  );
}
