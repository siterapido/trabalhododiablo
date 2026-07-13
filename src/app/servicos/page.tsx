import {
  FireIcon,
  GemIcon,
  RiftIcon,
  LightningIcon,
  CalendarIcon,
  DiscordIcon,
  WhatsAppIcon,
} from "@/components/icons";

export default function Servicos() {
  return (
    <>
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/services-bg.jpg" alt="" className="parallax-img" />
          <div className="absolute inset-0 bg-gradient-to-b from-diablo-darker/90 via-diablo-black/80 to-diablo-darker/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-cinzel text-gold-gradient mb-4">
            Serviços
          </h1>
          <div className="gothic-divider w-24 mx-auto mb-4" />
          <p className="text-text-secondary max-w-xl mx-auto">
            Preços em Reais (R$). Pagamento via Pix. Atendimento via Discord.
          </p>
        </div>
      </section>

      {/* Avulso */}
      <section className="py-20 bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <LightningIcon size={40} className="text-diablo-gold mx-auto mb-2" />
            <h2 className="text-2xl font-cinzel text-diablo-gold mb-2">Avulso</h2>
            <p className="text-sm text-text-muted">Preço fixo. Faz uma vez, paga uma vez.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gema Laterais */}
            <div className="glass-card rounded-xl overflow-hidden group">
              <div className="relative h-40">
                <img
                  src="/images/gem-bg.jpg"
                  alt="Gema Laterais"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-diablo-black/90 via-diablo-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <GemIcon size={36} className="text-diablo-gold drop-shadow-lg" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-diablo-gold text-lg mb-1">Gema Laterais</h3>
                <p className="text-xs text-text-muted mb-4">Farm completo de gemas laterais</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-cinzel text-gold-gradient font-bold">R$ 30</span>
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

            {/* Fenda do Medo */}
            <div className="glass-card rounded-xl overflow-hidden group">
              <div className="relative h-40">
                <img
                  src="/images/rift-bg.jpg"
                  alt="Fenda do Medo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-diablo-black/90 via-diablo-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <RiftIcon size={36} className="text-diablo-gold drop-shadow-lg" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-diablo-gold text-lg mb-1">Fenda do Medo</h3>
                <p className="text-xs text-text-muted mb-4">Clear completo da Fenda do Medo</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-cinzel text-gold-gradient font-bold">R$ 30</span>
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
          </div>
        </div>
      </section>

      {/* Semanal */}
      <section className="py-20 bg-diablo-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CalendarIcon size={40} className="text-diablo-gold mx-auto mb-2" />
            <h2 className="text-2xl font-cinzel text-diablo-gold mb-2">Pacote Semanal</h2>
            <p className="text-sm text-text-muted">1x por semana. Preço menor que avulso.</p>
            <p className="text-xl font-cinzel text-gold-gradient mt-2">R$ 25 cada serviço</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
            {[
              { id: "gema", name: "Gema Laterais" },
              { id: "fenda", name: "Fenda do Medo" },
            ].map((s) => (
              <div key={s.name} className="glass-card rounded-xl p-6 text-center">
                <div className="mb-2 flex justify-center">
                  {s.id === "gema" ? (
                    <GemIcon size={36} className="text-diablo-gold" />
                  ) : (
                    <RiftIcon size={36} className="text-diablo-gold" />
                  )}
                </div>
                <h3 className="font-cinzel text-diablo-gold">{s.name}</h3>
                <p className="text-2xl font-cinzel text-gold-gradient font-bold mt-2">R$ 25</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://wa.me/5584988062980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-diablo-black/60 backdrop-blur-sm border border-diablo-stone-light text-text-secondary hover:text-diablo-gold hover:border-diablo-gold/40 rounded-lg transition-all"
            >
              <WhatsAppIcon size={20} />
              Contratar Pacote Semanal
            </a>
          </div>
        </div>
      </section>

      {/* Mensal */}
      <section className="py-20 bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto pricing-card-featured rounded-xl overflow-hidden animate-border-glow">
            <div className="bg-gradient-to-r from-diablo-gold-dark via-diablo-gold to-diablo-gold-dark text-diablo-black text-xs font-bold uppercase tracking-widest py-2 text-center">
              ★ Melhor Custo-Benefício
            </div>
            <div className="p-8 text-center">
              <CalendarIcon size={48} className="text-diablo-gold mx-auto mb-2" />
              <h2 className="text-2xl font-cinzel text-diablo-gold mb-2">Pacote Mensal</h2>
              <p className="text-sm text-text-muted mb-4">4x no mês — todos os serviços</p>
              <p className="text-4xl font-cinzel text-gold-gradient font-bold mb-8">R$ 150/mês</p>

              <ul className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                <li className="flex justify-between text-sm py-2 border-b border-diablo-stone-light/30">
                  <span className="text-text-secondary">Gema Laterais (4x)</span>
                  <span className="text-diablo-gold font-mono">R$ 25 cada</span>
                </li>
                <li className="flex justify-between text-sm py-2 border-b border-diablo-stone-light/30">
                  <span className="text-text-secondary">Fenda do Medo (4x)</span>
                  <span className="text-diablo-gold font-mono">R$ 25 cada</span>
                </li>
                <li className="flex justify-between text-sm py-2">
                  <span className="text-diablo-gold inline-flex items-center gap-2">
                    <FireIcon size={16} className="text-diablo-gold-light" />
                    Brasa (Bônus)
                  </span>
                  <span className="text-diablo-gold-light font-mono">Grátis</span>
                </li>
              </ul>

              <a
                href="https://wa.me/5584988062980"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-diablo-gold to-diablo-gold-light text-diablo-black font-semibold rounded-lg hover:from-diablo-gold-light hover:to-diablo-gold transition-all hover:shadow-lg hover:shadow-diablo-gold/20 btn-glow"
              >
                <WhatsAppIcon size={20} />
                Assinar Pacote Mensal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-diablo-black border-t border-diablo-stone-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary mb-6">Tem dúvidas? A gente responde rápido.</p>
          <div className="flex gap-4 justify-center">
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
