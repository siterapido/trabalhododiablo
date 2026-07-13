import Link from "next/link";

export default function Servicos() {
  return (
    <>
      <section className="py-16 bg-diablo-dark border-b border-diablo-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-cinzel text-diablo-gold mb-4">
            Serviços
          </h1>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="text-text-secondary max-w-xl mx-auto">
            Preços em Reais (R$). Pagamento via Pix.
          </p>
        </div>
      </section>

      {/* Avulso */}
      <section className="py-16 bg-diablo-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-cinzel text-diablo-gold mb-2">⚡ Avulso</h2>
            <p className="text-sm text-text-muted">Preço fixo. Faz uma vez, paga uma vez.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-diablo-stone/50 border border-diablo-stone-light rounded-lg text-center hover:border-diablo-gold/30 transition-all">
              <span className="text-4xl mb-3 block">💎</span>
              <h3 className="font-cinzel text-diablo-gold text-lg mb-1">Gema Laterais</h3>
              <p className="text-xs text-text-muted mb-4">Farm completo de gemas laterais</p>
              <p className="text-3xl font-cinzel text-diablo-gold-light font-bold mb-4">R$ 30</p>
              <a
                href="https://wa.me/5584988062980"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-diablo-gold text-diablo-black text-sm font-semibold rounded hover:bg-diablo-gold-light transition-colors"
              >
                📱 Comprar via WhatsApp
              </a>
            </div>

            <div className="p-8 bg-diablo-stone/50 border border-diablo-stone-light rounded-lg text-center hover:border-diablo-gold/30 transition-all">
              <span className="text-4xl mb-3 block">🌀</span>
              <h3 className="font-cinzel text-diablo-gold text-lg mb-1">Fenda do Medo</h3>
              <p className="text-xs text-text-muted mb-4">Clear completo da Fenda do Medo</p>
              <p className="text-3xl font-cinzel text-diablo-gold-light font-bold mb-4">R$ 30</p>
              <a
                href="https://wa.me/5584988062980"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-diablo-gold text-diablo-black text-sm font-semibold rounded hover:bg-diablo-gold-light transition-colors"
              >
                📱 Comprar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Semanal */}
      <section className="py-16 bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-cinzel text-diablo-gold mb-2">📅 Pacote Semanal</h2>
            <p className="text-sm text-text-muted">1x por semana. Preço menor que avulso.</p>
            <p className="text-lg font-cinzel text-diablo-gold mt-2">R$ 25 cada serviço</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-diablo-stone/30 border border-diablo-stone-light/50 rounded-lg text-center">
              <span className="text-3xl mb-2 block">💎</span>
              <h3 className="font-cinzel text-diablo-gold">Gema Laterais</h3>
              <p className="text-2xl font-cinzel text-diablo-gold-light font-bold mt-2">R$ 25</p>
            </div>
            <div className="p-6 bg-diablo-stone/30 border border-diablo-stone-light/50 rounded-lg text-center">
              <span className="text-3xl mb-2 block">🌀</span>
              <h3 className="font-cinzel text-diablo-gold">Fenda do Medo</h3>
              <p className="text-2xl font-cinzel text-diablo-gold-light font-bold mt-2">R$ 25</p>
            </div>
          </div>

          <div className="text-center mt-6">
            <a
              href="https://wa.me/5584988062980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-diablo-stone-light text-white rounded hover:bg-diablo-stone-lighter transition-colors"
            >
              📱 Contratar Pacote Semanal
            </a>
          </div>
        </div>
      </section>

      {/* Mensal */}
      <section className="py-16 bg-diablo-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto p-8 bg-diablo-stone/60 border-2 border-diablo-gold/40 rounded-lg text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-diablo-gold text-diablo-black text-xs font-bold uppercase rounded-full">
              Melhor Custo-Benefício
            </div>
            <h2 className="text-2xl font-cinzel text-diablo-gold mb-2 mt-2">📆 Pacote Mensal</h2>
            <p className="text-sm text-text-muted mb-4">4x no mês — todos os serviços</p>
            <p className="text-4xl font-cinzel text-diablo-gold-light font-bold mb-6">R$ 150/mês</p>

            <ul className="space-y-3 mb-6 text-left max-w-xs mx-auto">
              <li className="flex justify-between text-sm">
                <span className="text-text-secondary">Gema Laterais (4x)</span>
                <span className="text-diablo-gold font-mono">R$ 25 cada</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-text-secondary">Fenda do Medo (4x)</span>
                <span className="text-diablo-gold font-mono">R$ 25 cada</span>
              </li>
              <li className="flex justify-between text-sm pt-2 border-t border-diablo-stone-light/50">
                <span className="text-diablo-gold">🔥 Brasa (Bônus)</span>
                <span className="text-diablo-gold font-mono">Grátis</span>
              </li>
            </ul>

            <a
              href="https://wa.me/5584988062980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-diablo-gold text-diablo-black font-semibold rounded hover:bg-diablo-gold-light transition-colors"
            >
              📱 Assinar Pacote Mensal
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-diablo-dark border-t border-diablo-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary mb-2">Tem dúvidas? A gente responde rápido.</p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://discord.gg/2UmnhteyB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-diablo-gold text-diablo-black font-semibold rounded hover:bg-diablo-gold-light transition-colors"
            >
              💬 Discord
            </a>
            <a
              href="https://wa.me/5584988062980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-diablo-stone-light text-text-secondary hover:text-diablo-gold rounded transition-all"
            >
              📱 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
