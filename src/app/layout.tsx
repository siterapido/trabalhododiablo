import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trabalho do Diablo | Serviços Diablo Immortal",
  description:
    "Farm de Gemas Laterais e Fenda do Medo para Diablo Immortal. Preço em R$, pagamento via Pix.",
  keywords: ["diablo immortal", "gema laterais", "fenda do medo", "boost", "brasil"],
  openGraph: {
    title: "Trabalho do Diablo",
    description: "Serviços Diablo Immortal — preço em R$",
    siteName: "Trabalho do Diablo",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-diablo-black text-[#e5e5e5] font-inter antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5584988062980"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg transition-all hover:scale-105 animate-pulse-blood"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="text-xl">📱</span>
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function Header() {
  return (
    <header className="border-b border-diablo-stone-light bg-diablo-black/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 group">
            <span className="text-2xl">🔥</span>
            <div>
              <h1 className="text-lg font-cinzel text-diablo-gold group-hover:text-diablo-gold-light transition-colors leading-tight">
                Trabalho do Diablo
              </h1>
              <p className="text-[10px] text-diablo-blood-light tracking-[0.2em] uppercase font-medium">
                Gemas & Fendas
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Início" },
              { href: "/servicos", label: "Serviços" },
              { href: "/sobre", label: "Sobre" },
              { href: "/contato", label: "Contato" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-diablo-gold transition-colors tracking-wide uppercase font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://discord.gg/2UmnhteyB"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-diablo-blood hover:bg-diablo-blood-light text-white text-sm font-medium rounded transition-colors"
          >
            <span>💬</span>
            <span>Discord</span>
          </a>

          <details className="md:hidden group">
            <summary className="list-none p-2 cursor-pointer">
              <svg className="w-6 h-6 text-diablo-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <nav className="absolute top-full left-0 right-0 bg-diablo-black/98 border-b border-diablo-stone-light p-4 flex flex-col gap-3">
              {[
                { href: "/", label: "Início" },
                { href: "/servicos", label: "Serviços" },
                { href: "/sobre", label: "Sobre" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-diablo-gold transition-colors uppercase tracking-wide py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://discord.gg/2UmnhteyB"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 bg-diablo-blood text-white text-sm font-medium rounded text-center"
              >
                💬 Discord
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-diablo-stone-light bg-diablo-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🔥</span>
              <h3 className="font-cinzel text-diablo-gold text-lg">Trabalho do Diablo</h3>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Farm de Gemas Laterais e Fenda do Medo para Diablo Immortal.
              Rapidez, segurança e preço em R$.
            </p>
          </div>

          <div>
            <h4 className="font-cinzel text-diablo-gold text-sm uppercase tracking-wider mb-3">Navegação</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Início" },
                { href: "/servicos", label: "Serviços" },
                { href: "/sobre", label: "Sobre" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-text-secondary hover:text-diablo-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-diablo-gold text-sm uppercase tracking-wider mb-3">Contato</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="https://discord.gg/2UmnhteyB" target="_blank" rel="noopener noreferrer" className="hover:text-diablo-gold transition-colors">
                  💬 Discord
                </a>
              </li>
              <li>
                <a href="https://wa.me/5584988062980" target="_blank" rel="noopener noreferrer" className="hover:text-diablo-gold transition-colors">
                  📱 WhatsApp: +55 84 98806-2980
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-8 mb-6" />

        <p className="text-center text-xs text-text-muted">
          Trabalho do Diablo &copy; {new Date().getFullYear()}. Não somos afiliados à Blizzard Entertainment.
          Diablo Immortal é propriedade da Blizzard Entertainment.
        </p>
      </div>
    </footer>
  );
}
