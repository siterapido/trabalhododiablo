import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { FireIcon, DiscordIcon, WhatsAppIcon } from "@/components/icons";

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
  title: "Trabalho do Diablo | Serviços Profissionais Diablo Immortal",
  description:
    "Farm de Gemas Laterais e Fenda do Medo para Diablo Immortal. Preço em R$, pagamento via Pix, atendimento via Discord.",
  keywords: ["diablo immortal", "gema laterais", "fenda do medo", "boost", "brasil", "pix"],
  openGraph: {
    title: "Trabalho do Diablo",
    description: "Serviços Diablo Immortal — preço em R$",
    siteName: "Trabalho do Diablo",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${inter.variable} h-full scroll-smooth`}>
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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-2xl transition-all hover:scale-110 hover:shadow-[#25D366]/25 active:scale-95"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon size={20} />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function Header() {
  return (
    <header className="border-b border-diablo-stone-light/60 bg-diablo-darker/98 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <FireIcon size={28} className="text-diablo-gold drop-shadow-[0_0_8px_rgba(201,168,76,0.3)]" />
            </div>
            <div>
              <h1 className="text-lg font-cinzel text-gold-gradient group-hover:opacity-90 transition-opacity leading-tight">
                Trabalho do Diablo
              </h1>
              <p className="text-[10px] text-diablo-blood-light tracking-[0.25em] uppercase font-medium">
                Gemas & Fendas
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
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
                className="relative text-sm text-text-secondary hover:text-diablo-gold transition-colors tracking-wide uppercase font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-diablo-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA Discord */}
          <a
            href="https://discord.gg/2UmnhteyB"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-[#5865F2] to-[#4752C4] text-white text-sm font-semibold rounded-lg hover:from-[#4752C4] hover:to-[#5865F2] transition-all hover:shadow-lg hover:shadow-[#5865F2]/20 btn-glow"
          >
            <DiscordIcon size={16} />
            <span>Discord</span>
          </a>

          {/* Mobile Menu */}
          <details className="md:hidden group">
            <summary className="list-none p-2 cursor-pointer">
              <svg className="w-6 h-6 text-diablo-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <nav className="absolute top-full left-0 right-0 bg-diablo-darker/99 border-b border-diablo-stone-light p-4 flex flex-col gap-2">
              {[
                { href: "/", label: "Início" },
                { href: "/servicos", label: "Serviços" },
                { href: "/sobre", label: "Sobre" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-diablo-gold transition-colors uppercase tracking-wide py-3 px-2 rounded hover:bg-diablo-stone/50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://discord.gg/2UmnhteyB"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 bg-gradient-to-r from-[#5865F2] to-[#4752C4] text-white text-sm font-medium rounded-lg text-center flex items-center justify-center gap-2 hover:from-[#4752C4] hover:to-[#5865F2] transition-all"
              >
                <DiscordIcon size={20} />
                Discord
              </a>
              <a
                href="https://wa.me/5584988062980"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-[#25D366] text-white text-sm font-medium rounded-lg text-center flex items-center justify-center gap-2 hover:bg-[#20BD5A] transition-all"
              >
                <WhatsAppIcon size={20} />
                WhatsApp
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
    <footer className="border-t border-diablo-stone-light/60 bg-diablo-darker relative">
      <div className="absolute inset-0 bg-gradient-to-b from-diablo-darker via-diablo-black/50 to-diablo-darker pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FireIcon size={24} className="text-diablo-gold drop-shadow-[0_0_6px_rgba(201,168,76,0.3)]" />
              <h3 className="font-cinzel text-gold-gradient text-lg">
                Trabalho do Diablo
              </h3>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Farm de Gemas Laterais e Fenda do Medo para Diablo Immortal. Rapidez,
              segurança e preço em R$.
            </p>
          </div>

          <div>
            <h4 className="font-cinzel text-diablo-gold text-sm uppercase tracking-wider mb-3">
              Navegação
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Início" },
                { href: "/servicos", label: "Serviços" },
                { href: "/sobre", label: "Sobre" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-diablo-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-diablo-gold text-sm uppercase tracking-wider mb-3">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a
                  href="https://discord.gg/2UmnhteyB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-diablo-gold transition-colors p-2 rounded-lg hover:bg-diablo-stone/30"
                >
                  <DiscordIcon size={20} className="text-[#5865F2]" />
                  Discord: trabalhododiablo
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5584988062980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors p-2 rounded-lg hover:bg-diablo-stone/30"
                >
                  <WhatsAppIcon size={20} className="text-[#25D366]" />
                  +55 (84) 98806-2980
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gothic-divider mt-8 mb-6" />

        <p className="text-center text-xs text-text-muted">
          Trabalho do Diablo &copy; {new Date().getFullYear()}. Não somos afiliados
          à Blizzard Entertainment.
        </p>
      </div>
    </footer>
  );
}
