import Link from "next/link";

const servicos = [
  {
    id: "gema",
    icon: "💎",
    title: "Gema Laterais",
    desc: "Farm completo de gemas laterais. Acelere seu progresso sem o grind diário.",
    price: "R$ 30",
    img: "/images/gem-bg.jpg",
  },
  {
    id: "fenda",
    icon: "🌀",
    title: "Fenda do Medo",
    desc: "Clear completo da Fenda do Medo. Recompensas garantidas.",
    price: "R$ 30",
    img: "/images/rift-bg.jpg",
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
      {/* ═══════════════════════════════════
          HERO SECTION — Background Image
          ═══════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden fire-particles">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Diablo Immortal"
            className="parallax-img"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-diablo-black/60 via-transparent to-diablo-black/30" />
        </div>

        {/* Red Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-diablo-blood/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-diablo-fire/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl animate-float-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-diablo-black/60 backdrop-blur-sm border border-diablo-blood/30 rounded-full text-xs text-diablo-blood-light uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-diablo-blood-light rounded-full animate-pulse" />
              Serviços Profissionais — Preço em R$
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-cinzel text-diablo-gold leading-tight mb-4">
              O Inferno
              <br />
              <span className="text-[#e5e5e5]">Espera. Nós</span>
              <br />
              <span className="text-gold-gradient animate-fire-flicker">Te Levamos.</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
              Farm de <span className="text-diablo-gold-light">Gemas Laterais</span> e{' '}
              <span className="text-diablo-gold-light">Fenda do Medo</span> para Diablo Immortal.
              Pagamento via Pix, acompanhamento no Discord.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-diablo-gold to-diablo-gold-light text-diablo-black font-semibold rounded-lg hover:from-diablo-gold-light hover:to-diablo-gold transition-all hover:shadow-lg hover:shadow-diablo-gold/20 btn-glow"
              >
                Ver Serviços
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://discord.gg/2UmnhteyB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-diablo-black/50 backdrop-blur-sm border border-diablo-stone-light text-text-secondary hover:text-diablo-gold hover:border-diablo-gold/40 rounded-lg transition-all"
              >
                <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/>
                </svg>
                Discord
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-diablo-stone-light/30">
              {[
                { value: "500+", label: "Serviços" },
                { value: "98%", label: "Satisfação" },
                { value: "24/7", label: "Suporte" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-cinzel text-gold-gradient">{s.value}</p>
                  <p className="text-xs text-text-muted uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SERVIÇOS AVULSO — Glassmorphism Cards
          ═══════════════════════════════════ */}
      <section className="py-24 bg-diablo-dark section-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-cinzel text-gold-gradient mb-4">
              Serviços Avulso
            </h2>
            <div className="gothic-divider w-32 mx-auto mb-4" />
            <p className="text-text-secondary max-w-xl mx-auto">
              Contrate uma vez. Preço fixo. Pagamento via Pix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {servicos.map((svc, idx) => (
              <div
                key={svc.id}
                className={`glass-card rounded-xl overflow-hidden group animate-scale-in ${idx === 1 ? 'delay-200' : ''}`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-diablo-black/80 via-diablo-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl drop-shadow-lg">{svc.icon}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-cinzel text-diablo-gold text-xl mb-2">{svc.title}</h3>
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">{svc.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-cinzel text-gold-gradient font-bold">{svc.price}</span>
                    <a
                      href="https://wa.me/5584988062980"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-diablo-blood/20 border border-diablo-blood/30 rounded-lg text-sm text-diablo-blood-light hover:bg-diablo-blood/30 transition-colors"
                    >
                      Contratar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PACOTES RECORRENTES — Pricing Cards
          ═══════════════════════════════════ */}
      <section className="py-24 bg-diablo-black section-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-cinzel text-gold-gradient mb-4">
              Pacotes Recorrentes
            </h2>
            <div className="gothic-divider w-32 mx-auto mb-4" />
            <p className="text-text-secondary max-w-xl mx-auto">
              Economia por serviço. Fidelidade tem vantagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {pacotes.map((pct, idx) => (
              <div
                key={pct.nome}
                className={`rounded-xl overflow-hidden transition-all hover:-translate-y-1 animate-scale-in ${idx === 1 ? 'delay-200' : ''} ${
                  pct.destaque
                    ? 'pricing-card-featured animate-border-glow'
                    : 'glass-card'
                }`}
              >
                {pct.destaque && (
                  <div className="bg-gradient-to-r from-diablo-gold-dark via-diablo-gold to-diablo-gold-dark text-diablo-black text-xs font-bold uppercase tracking-widest py-2 text-center">
                    ★ Melhor Custo-Benefício
                  </div>
                )}
                <div className={`p-8 ${pct.destaque ? '' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="font-cinzel text-2xl text-diablo-gold mb-1">{pct.nome}</h3>
                    <p className="text-xs text-text-muted uppercase tracking-wider">{pct.freq}</p>
                    <p className={`text-3xl font-cinzel font-bold mt-4 ${pct.destaque ? 'text-gold-gradient' : 'text-diablo-gold'}`}>
                      {pct.preco}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pct.items.map((item) => (
                      <li key={item.name} className="flex justify-between items-center text-sm py-2 border-b border-diablo-stone-light/30">
                        <span className="text-text-secondary">{item.name}</span>
                        <span className={`font-mono ${item.price === 'Grátis' ? 'text-diablo-gold-light' : 'text-diablo-gold'}`}>
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/5584988062980"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                      pct.destaque
                        ? 'bg-gradient-to-r from-diablo-gold to-diablo-gold-light text-diablo-black hover:shadow-lg hover:shadow-diablo-gold/20'
                        : 'bg-diablo-stone-light text-white hover:bg-diablo-stone-lighter'
                    }`}
                  >
                    Contratar via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          IMAGE BREAK SECTION
          ═══════════════════════════════════ */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src="/images/services-bg.jpg" alt="" className="parallax-img" />
        <div className="absolute inset-0 bg-gradient-to-r from-diablo-black/80 via-diablo-black/50 to-diablo-black/80" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <p className="text-6xl sm:text-8xl font-cinzel text-diablo-gold/20 select-none">✦</p>
            <p className="text-lg text-text-muted mt-4 max-w-md mx-auto font-cinzel tracking-wide">
              "O inferno não é o destino. É apenas o começo."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA FINAL
          ═══════════════════════════════════ */}
      <section className="py-24 bg-diablo-dark section-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-cinzel text-gold-gradient mb-4">
            Pronto para Evoluir?
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8">
            Chama no Discord ou WhatsApp. Pagamento via Pix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/2UmnhteyB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5865F2] to-[#4752C4] text-white font-semibold rounded-lg hover:from-[#4752C4] hover:to-[#5865F2] transition-all hover:shadow-lg hover:shadow-[#5865F2]/20 btn-glow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/>
              </svg>
              Discord
            </a>
            <a
              href="https://wa.me/5584988062980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
