import Link from "next/link";

const passos = [
  {
    num: "01",
    title: "Escolha o Serviço",
    desc: "Gema Laterais, Fenda do Medo — avulso, semanal ou mensal. O que precisar.",
  },
  {
    num: "02",
    title: "Entre em Contato",
    desc: "Manda mensagem no Discord ou WhatsApp. A gente alinha preço, prazo e pagamento.",
  },
  {
    num: "03",
    title: "Pagamento via Pix",
    desc: "Pix rápido e sem taxa. Pacotes mensais podem ser parcelados.",
  },
  {
    num: "04",
    title: "A Gente Joga pra Você",
    desc: "VPN dedicada, sem histórico de IP suspeito. Você recebe prints em tempo real.",
  },
  {
    num: "05",
    title: "Pronto!",
    desc: "Serviço concluído. Você troca a senha e volta a jogar. Garantia inclusa.",
  },
];

const seguranca = [
  {
    icon: "🛡️",
    title: "VPN Dedicada",
    desc: "IPs residuais próximos à sua região. Zero flag de login suspeito.",
  },
  {
    icon: "🔒",
    title: "Modo Sombra",
    desc: "Jogamos nos mesmos horários que você. Respeitamos seu fuso.",
  },
  {
    icon: "🚫",
    title: "Sem Hacks",
    desc: "Zero cheat, zero bot. Tudo manual, como se você mesmo estivesse jogando.",
  },
  {
    icon: "✅",
    title: "Garantia",
    desc: "Se algo der errado, refazemos ou devolvemos. Sem burocracia.",
  },
];

export default function Sobre() {
  return (
    <>
      <section className="py-16 bg-diablo-dark border-b border-diablo-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-cinzel text-diablo-gold mb-4">
            Sobre Nós
          </h1>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="text-text-secondary max-w-xl mx-auto">
            Farm de Gemas Laterais e Fenda do Medo. Preço justo em Real, pagamento via Pix.
          </p>
        </div>
      </section>

      <section className="py-16 bg-diablo-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-cinzel text-diablo-gold mb-4">
                Foco no que importa
              </h2>
              <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                <p>
                  Sabemos como o grind de gemas e fendas no Diablo Immortal pode ser cansativo.
                  A gente faz o trabalho pesado pra você.
                </p>
                <p>
                  Dois serviços, bem feitos, preço justo. Sem enrolação.
                  Pagamento em Real, atendimento em português no Discord e WhatsApp.
                </p>
              </div>
            </div>
            <div className="p-8 bg-diablo-stone/30 border border-diablo-stone-light rounded-lg">
              <p className="text-diablo-gold font-cinzel text-lg mb-3">🔥 Em números</p>
              <div className="space-y-4">
                {[
                  { label: "Serviços realizados", value: "500+" },
                  { label: "Clientes satisfeitos", value: "300+" },
                  { label: "Tempo médio de resposta", value: "< 5 min" },
                  { label: "No ar desde", value: "2024" },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between items-center border-b border-diablo-stone-light/30 pb-2">
                    <span className="text-sm text-text-muted">{s.label}</span>
                    <span className="text-diablo-gold font-cinzel">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-diablo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-cinzel text-diablo-gold mb-4">
              Segurança
            </h2>
            <div className="gold-divider w-20 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seguranca.map((s) => (
              <div key={s.title} className="text-center p-6 border border-diablo-stone-light/30 rounded-lg">
                <span className="text-4xl mb-3 block">{s.icon}</span>
                <h3 className="font-cinzel text-diablo-gold text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-diablo-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-cinzel text-diablo-gold mb-4">
              Como Funciona
            </h2>
            <div className="gold-divider w-20 mx-auto" />
          </div>
          <div className="space-y-6">
            {passos.map((passo) => (
              <div key={passo.num} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-diablo-blood/20 border border-diablo-blood/30 flex items-center justify-center">
                  <span className="text-sm font-cinzel text-diablo-blood-light">{passo.num}</span>
                </div>
                <div>
                  <h3 className="font-cinzel text-diablo-gold text-sm">{passo.title}</h3>
                  <p className="text-xs text-text-muted mt-1">{passo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-diablo-dark border-t border-diablo-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-cinzel text-diablo-gold mb-3">Bora? 🔥</h2>
          <p className="text-text-secondary text-sm mb-4">Pagamento via Pix</p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 bg-diablo-gold text-diablo-black font-semibold rounded hover:bg-diablo-gold-light transition-colors"
          >
            💬 Chamar no Discord
          </Link>
        </div>
      </section>
    </>
  );
}
