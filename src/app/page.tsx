import Link from "next/link";
import {
  FireIcon,
  GemIcon,
  RiftIcon,
  CalendarIcon,
  DiscordIcon,
  WhatsAppIcon,
  StarIcon,
} from "@/components/icons";

const servicos = [
  {
    id: "gema",
    title: "Gema Laterais",
    desc: "Farm completo de gemas laterais. Acelere seu progresso sem o grind diário.",
    price: "R$ 30",
    img: "/images/gem-bg.jpg",
  },
  {
    id: "fenda",
    title: "Fenda do Medo",
    desc: "Clear completo da Fenda do Medo. Recompensas garantidas.",
    price: "R$ 30",
    img: "/images/rift-bg.jpg",
  },
];

const pacotes = [
  {
    nome: "Pacote Semanal",
    freq: "1x por semana",
    preco: "R$ 25 cada",
    items: [
      { name: "Gema Laterais", price: "R$ 25" },
      { name: "Fenda do Medo", price: "R$ 25" },
    ],
  },
  {
    nome: "Pacote Mensal",
    freq: "4x no mês",
    preco: "R$ 150/mês",
    destaque: true,
    items: [
      { name: "Gema Laterais", price: "R$ 25" },
      { name: "Fenda do Medo", price: "R$ 25" },
      { name: "Brasa (Bônus)", price: "Grátis" },
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
              Farm de <span className="text-diablo-gold-light">Gemas Laterais</span> e{" "}
              <span className="text-diablo-gold-light">Fenda do Medo</span> para Diablo Immortal.
              Pagamento via Pix, acompanhamento no Discord.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-diablo-gold to-diablo-gold-light text-diablo-black font-semibold rounded-lg hover:from-diablo-gold-light hover:to-diablo-gold transition-all hover:shadow-lg hover:shadow-diablo-gold/20 btn-glow"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-diablo-black/60 backdrop-blur-sm border border-diablo-stone-light text-text-secondary hover:text-diablo-gold hover:border-diablo-gold/40 rounded-lg transition-all"
              >
                <DiscordIcon size={16} className="text-[#5865F2]" />
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
                className={`glass-card rounded-xl overflow-hidden group animate-scale-in ${idx === 1 ? "delay-200" : ""}`}
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
                    {svc.id === "gema" ? (
                      <GemIcon size={36} className="text-diablo-gold drop-shadow-lg" />
                    ) : (
                      <RiftIcon size={36} className="text-diablo-gold drop-shadow-lg" />
                    )}
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
                      className="px-4 py-2 bg-diablo-gold/10 border border-diablo-gold/30 rounded-lg text-sm text-diablo-gold hover:bg-diablo-gold/20 transition-colors"
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
                className={`rounded-xl overflow-hidden transition-all hover:-translate-y-1 animate-scale-in ${idx === 1 ? "delay-200" : ""} ${
                  pct.destaque ? "pricing-card-featured animate-border-glow" : "glass-card"
                }`}
              >
                {pct.destaque && (
                  <div className="bg-gradient-to-r from-diablo-gold-dark via-diablo-gold to-diablo-gold-dark text-diablo-black text-xs font-bold uppercase tracking-widest py-2 text-center">
                    ★ Melhor Custo-Benefício
                  </div>
                )}
                <div className={`p-8 ${pct.destaque ? "" : ""}`}>
                  <div className="text-center mb-6">
                    <h3 className="font-cinzel text-2xl text-diablo-gold mb-1 inline-flex items-center gap-2">
                      <CalendarIcon size={20} className="text-diablo-gold" />
                      {pct.nome}
                    </h3>
                    <p className="text-xs text-text-muted uppercase tracking-wider">{pct.freq}</p>
                    <p
                      className={`text-3xl font-cinzel font-bold mt-4 ${pct.destaque ? "text-gold-gradient" : "text-diablo-gold"}`}
                    >
                      {pct.preco}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pct.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex justify-between items-center text-sm py-2 border-b border-diablo-stone-light/30"
                      >
                        <span className="text-text-secondary inline-flex items-center gap-1.5">
                          {item.name === "Brasa (Bônus)" && (
                            <FireIcon size={16} className="text-diablo-gold-light" />
                          )}
                          {item.name}
                        </span>
                        <span
                          className={`font-mono ${item.price === "Grátis" ? "text-diablo-gold-light" : "text-diablo-gold"}`}
                        >
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/5584988062980"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                      pct.destaque
                        ? "bg-gradient-to-r from-diablo-gold to-diablo-gold-light text-diablo-black hover:from-diablo-gold-light hover:to-diablo-gold hover:shadow-lg hover:shadow-diablo-gold/20 btn-glow"
                        : "bg-diablo-black/60 backdrop-blur-sm border border-diablo-stone-light text-text-secondary hover:text-diablo-gold hover:border-diablo-gold/40"
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
            <p className="text-6xl sm:text-8xl font-cinzel text-diablo-gold/20 select-none flex items-center justify-center">
              <StarIcon size={80} className="text-diablo-gold/20" />
            </p>
            <p className="text-lg text-text-muted mt-4 max-w-md mx-auto font-cinzel tracking-wide">
              &ldquo;O inferno não é o destino. É apenas o começo.&rdquo;
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5865F2] to-[#4752C4] text-white font-semibold rounded-lg hover:from-[#4752C4] hover:to-[#5865F2] transition-all hover:shadow-lg hover:shadow-[#5865F2]/20 btn-glow"
            >
              <DiscordIcon size={20} />
              Discord
            </a>
            <a
              href="https://wa.me/5584988062980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
            >
              <WhatsAppIcon size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
