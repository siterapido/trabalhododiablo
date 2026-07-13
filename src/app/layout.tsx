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
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
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
              <span className="text-2xl drop-shadow-[0_0_8px_rgba(201,168,76,0.3)]">🔥</span>
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
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-diablo-blood to-diablo-blood-light hover:from-diablo-blood-light hover:to-diablo-blood text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-diablo-blood/25 btn-glow"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
            </svg>
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
                <a key={link.href} href={link.href} className="text-sm text-text-secondary hover:text-diablo-gold transition-colors uppercase tracking-wide py-3 px-2 rounded hover:bg-diablo-stone/50">
                  {link.label}
                </a>
              ))}
              <a href="https://discord.gg/2UmnhteyB" target="_blank" rel="noopener noreferrer"
                className="mt-2 px-4 py-3 bg-diablo-blood text-white text-sm font-medium rounded-lg text-center flex items-center justify-center gap-2">
                💬 Discord
              </a>
              <a href="https://wa.me/5584988062980" target="_blank" rel="noopener noreferrer"
                className="px-4 py-3 bg-[#25D366] text-white text-sm font-medium rounded-lg text-center flex items-center justify-center gap-2">
                📱 WhatsApp
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
              <span className="text-xl drop-shadow-[0_0_6px_rgba(201,168,76,0.3)]">🔥</span>
              <h3 className="font-cinzel text-gold-gradient text-lg">Trabalho do Diablo</h3>
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
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a href="https://discord.gg/2UmnhteyB" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-diablo-gold transition-colors p-2 rounded-lg hover:bg-diablo-stone/30">
                  <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/>
                  </svg>
                  Discord: trabalhododiablo
                </a>
              </li>
              <li>
                <a href="https://wa.me/5584988062980" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors p-2 rounded-lg hover:bg-diablo-stone/30">
                  <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  +55 (84) 98806-2980
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gothic-divider mt-8 mb-6" />

        <p className="text-center text-xs text-text-muted">
          Trabalho do Diablo &copy; {new Date().getFullYear()}. Não somos afiliados à Blizzard Entertainment.
        </p>
      </div>
    </footer>
  );
}
