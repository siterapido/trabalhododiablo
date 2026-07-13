import Link from "next/link";

const categorias = [
  {
    title: "⚡ Power Leveling",
    desc: "Cansei de grind? A gente sobe pra você.",
    items: [
      { name: "Level 1 → 60", desc: "Campanha completa + nível máximo", price: "R$ 60", time: "2-4h" },
      { name: "Paragon 10 níveis", desc: "Grind de Paragon acelerado", price: "R$ 25", time: "1-2h" },
      { name: "Paragon 50 níveis", desc: "Pacote completo de Paragon", price: "R$ 100", time: "6-8h" },
      { name: "Paragon 100+ níveis", desc: "Para quem quer endgame rápido", price: "R$ 180", time: "12h+" },
    ],
  },
  {
    title: "👹 Helliquary Raids",
    desc: "Chefes semanais sem estresse.",
    items: [
      { name: "1 Boss Helliquary", desc: "Carry individual", price: "R$ 20", time: "15min" },
      { name: "Pack Semanal (3 bosses)", desc: "Todos os chefes da semana", price: "R$ 50", time: "45min" },
      { name: "Pack Mensal", desc: "4 semanas cobertas", price: "R$ 180", time: "—" },
      { name: "Helliquary + Trophy", desc: "Clear + troféu garantido", price: "R$ 35", time: "20min" },
    ],
  },
  {
    title: "🌀 Challenge Rift",
    desc: "Suba nas paradas sem suar.",
    items: [
      { name: "Tier 1-50", desc: "Clear básico", price: "R$ 35", time: "30min" },
      { name: "Tier 51-100", desc: "Rifts intermediários", price: "R$ 65", time: "1h" },
      { name: "Tier 100-150", desc: "Rifts avançados", price: "R$ 120", time: "1.5h" },
      { name: "Top Tier (150+)", desc: "Elite dos rifts", price: "R$ 200", time: "2h+" },
    ],
  },
  {
    title: "⚔️ PvP Battleground",
    desc: "Domine o campo de batalha.",
    items: [
      { name: "Bronze → Prata", desc: "Rank inicial", price: "R$ 60", time: "1-2h" },
      { name: "Prata → Ouro", desc: "Rank intermediário", price: "R$ 120", time: "2-4h" },
      { name: "Ouro → Platina", desc: "Rank avançado", price: "R$ 200", time: "4-6h" },
      { name: "Platina → Lendário", desc: "Top rank do servidor", price: "R$ 350+", time: "6-12h" },
    ],
  },
  {
    title: "🎫 Battle Pass",
    desc: "BP completo sem esforço.",
    items: [
      { name: "Battle Pass Normal", desc: "40 níveis completos", price: "R$ 70", time: "2-3 dias" },
      { name: "Battle Pass Reforçado", desc: "BP + bônus", price: "R$ 130", time: "2-3 dias" },
      { name: "BP + Níveis Extras", desc: "Pass completo + 20 níveis extras", price: "R$ 180", time: "3-4 dias" },
      { name: "BP Coleção (todo mês)", desc: "Assinatura mensal do BP", price: "R$ 250/mês", time: "—" },
    ],
  },
  {
    title: "💎 Farm de Itens",
    desc: "Itens específicos sem RNG frustrante.",
    items: [
      { name: "Gema Lendária (1)", desc: "Gema lendária específica", price: "R$ 40", time: "1-3h" },
      { name: "Set Completo (6 peças)", desc: "Set de armadura completo", price: "R$ 100", time: "4-8h" },
      { name: "Item Lendário Específico", desc: "Item com atributos alvo", price: "R$ 25", time: "1-2h" },
      { name: "Essência Legendária", desc: "Essência para build", price: "R$ 15", time: "30min" },
    ],
  },
  {
    title: "🏆 Serviços Extras",
    desc: "O que mais precisar a gente faz.",
    items: [
      { name: "Dungeon Carry (por run)", desc: "Qualquer dungeon", price: "R$ 12", time: "10min" },
      { name: "Elder Rift (10 runs)", desc: "Farm de rift completo", price: "R$ 50", time: "1h" },
      { name: "Clan War / Shadow War", desc: "Participação em guerras", price: "R$ 25", time: "30min" },
      { name: "Pacote Personalizado", desc: "Monte seu próprio combo", price: "Sob consulta", time: "—" },
    ],
  },
];

export default function Servicos() {
  return (
    <>
      <section className="py-16 bg-diablo-dark border-b border-diablo-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-cinzel text-diablo-gold mb-4">
            Todos os Serviços
          </h1>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="text-text-secondary max-w-xl mx-auto">
            Preços em Reais (R$). Pagamento via Pix ou Crypto.
            Desconto de 10% em pacotes com 3+ serviços.
          </p>
        </div>
      </section>

      <section className="py-16 bg-diablo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categorias.map((cat) => (
            <div key={cat.title}>
              <div className="mb-6">
                <h2 className="text-2xl font-cinzel text-diablo-gold">{cat.title}</h2>
                <p className="text-sm text-text-muted mt-1">{cat.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 bg-diablo-stone/30 border border-diablo-stone-light/50 rounded-lg hover:border-diablo-gold/20 transition-all"
                  >
                    <h3 className="text-sm font-cinzel text-diablo-gold mb-1">{item.name}</h3>
                    <p className="text-xs text-text-muted mb-3">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-diablo-gold-light">{item.price}</span>
                      <span className="text-[10px] text-text-muted uppercase">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-diablo-dark border-t border-diablo-stone-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary mb-4">
            Não encontrou o que precisa? Serviço personalizado sob consulta.
            Pagamos o melhor preço em Real — sem taxa de câmbio.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 bg-diablo-gold text-diablo-black font-semibold rounded hover:bg-diablo-gold-light transition-colors"
          >
            💬 Fale Conosco
          </Link>
        </div>
      </section>
    </>
  );
}
