import Link from "next/link";
import {
  FireIcon,
  ShieldIcon,
  LockIcon,
  ProhibitedIcon,
  CheckIcon,
  DiscordIcon,
} from "@/components/icons";

const passos = [
  {
    num: "01",
    title: "Escolha o Serviço",
    desc: "Gema Laterais ou Fenda do Medo — avulso, semanal ou mensal.",
  },
  {
    num: "02",
    title: "Entre em Contato",
    desc: "Discord ou WhatsApp. A gente alinha preço, prazo e pagamento.",
  },
  {
    num: "03",
    title: "Pagamento via Pix",
    desc: "Pix rápido e sem taxa. Pacotes mensais podem ser parcelados.",
  },
  {
    num: "04",
    title: "A Gente Joga pra Você",
    desc: "VPN dedicada, sem histórico suspeito. Prints em tempo real.",
  },
  {
    num: "05",
    title: "Pronto!",
    desc: "Serviço concluído. Garantia inclusa.",
  },
];

const seguranca = [
  {
    id: "vpn",
    title: "VPN Dedicada",
    desc: "IPs residuais. Zero flag de login suspeito.",
  },
  {
    id: "sombra",
    title: "Modo Sombra",
    desc: "Jogamos nos mesmos horários que você.",
  },
  {
    id: "manual",
    title: "100% Manual",
    desc: "Zero cheat, zero bot. Tudo na mão.",
  },
  {
    id: "garantia",
    title: "Garantia",
    desc: "Se algo der errado, refazemos ou devolvemos.",
  },
];

const secIconMap: Record<string, React.ReactNode> = {
  vpn: <ShieldIcon size={36} className="text-diablo-gold" />,
  sombra: <LockIcon size={36} className="text-diablo-gold" />,
  manual: <ProhibitedIcon size={36} className="text-diablo-gold" />,
  garantia: <CheckIcon size={36} className="text-diablo-gold" />,
};

export default function Sobre() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/bg-dark.jpg" alt="" className="parallax-img" />
          <div className="absolute inset-0 bg-gradient-to-b from-diablo-darker/90 via-diablo-black/80 to-diablo-darker/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-cinzel text-gold-gradient mb-4">
            Sobre Nós
          </h1>
          <div className="gothic-divider w-24 mx-auto mb-4" />
          <p className="text-text-secondary max-w-xl mx-auto">
            Farm de Gemas Laterais e Fenda do Medo. Preço justo em Real.
          </p>
        </div>
      </section>

      <section className="py-20 bg-diablo-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-cinzel text-diablo-gold mb-4">
                Foco no que importa
              </h2>
              <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                <p>
                  Sabemos como o grind no Diablo Immortal é cansativo. A gente faz o
                  trabalho pesado.
                </p>
                <p>
                  Dois serviços, bem feitos, preço justo. Pagamento em Real,
                  atendimento em português.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-8">
              <p className="text-diablo-gold font-cinzel text-lg mb-3 flex items-center gap-2">
                <FireIcon size={20} className="text-diablo-gold" />
                Em números
              </p>
              <div className="space-y-4">
                {[
                  { label: "Serviços realizados", value: "500+" },
                  { label: "Clientes satisfeitos", value: "300+" },
                  { label: "Tempo médio de resposta", value: "< 5 min" },
                  { label: "No ar desde", value: "2024" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex justify-between items-center border-b border-diablo-stone-light/30 pb-2"
                  >
                    <span className="text-sm text-text-muted">{s.label}</span>
                    <span className="text-diablo-gold font-cinzel">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-diablo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-cinzel text-gold-gradient mb-4">
              Segurança
            </h2>
            <div className="gothic-divider w-20 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seguranca.map((s) => (
              <div key={s.id} className="glass-card rounded-xl p-6 text-center">
                <div className="mb-3 flex justify-center">{secIconMap[s.id]}</div>
                <h3 className="font-cinzel text-diablo-gold text-sm mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-diablo-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-cinzel text-gold-gradient mb-4">
              Como Funciona
            </h2>
            <div className="gothic-divider w-20 mx-auto" />
          </div>
          <div className="space-y-4">
            {passos.map((passo) => (
              <div
                key={passo.num}
                className="flex gap-4 items-start glass-card rounded-xl p-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-diablo-blood/20 border border-diablo-blood/30 flex items-center justify-center">
                  <span className="text-sm font-cinzel text-diablo-blood-light">
                    {passo.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-cinzel text-diablo-gold text-sm">
                    {passo.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">{passo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-diablo-dark border-t border-diablo-stone-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-cinzel text-diablo-gold mb-3 inline-flex items-center gap-2">
            <FireIcon size={20} className="text-diablo-gold" />
            Bora?
          </h2>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-diablo-gold to-diablo-gold-light text-diablo-black font-semibold rounded-lg hover:from-diablo-gold-light hover:to-diablo-gold transition-all hover:shadow-lg hover:shadow-diablo-gold/20 btn-glow"
          >
            <DiscordIcon size={20} />
            Chamar no Discord
          </Link>
        </div>
      </section>
    </>
  );
}
