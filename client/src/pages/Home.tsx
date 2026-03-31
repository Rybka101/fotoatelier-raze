import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Camera, Printer, Music, Heart } from "lucide-react";

/**
 * Design Philosophy: Modern Professional with Bold Blue Accent
 * - Clean, spacious layouts that let photography breathe
 * - Strong blue branding (#0052CC) as primary accent
 * - Professional yet approachable aesthetic
 * - Typography hierarchy: Playfair Display for headings, Inter for body, Montserrat for CTAs
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/raze-logo_ebc3f343.png" 
              alt="Fotoateliér RAZE" 
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Domů
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary font-medium transition-colors">
              Galerie
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary font-medium transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/gallery-bg-new_678b441b.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="container relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Logo and Headline */}
              <div className="flex flex-col justify-center">
                <div className="mb-8 animate-fade-in">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/raze-logo_ebc3f343.png" 
                    alt="Fotoateliér RAZE Logo" 
                    className="h-40 w-auto mb-8"
                  />
                  <p className="text-xl font-bold mb-8 max-w-md" style={{ color: '#000000' }}>
                    Mobilní fotoateliér s profesionálním vybavením a tiskem fotografií na místě
                  </p>
                  <Link href="/gallery">
                    <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold">
                      Prohlédnout galerii
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Video Embed */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/hrmZOKBVb3M"
                    title="Fotoateliér RAZE - Ukázka"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-primary mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                O nás
              </h2>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Vítejte v Fotoateliéru RAZE! Jsme mobilní fotoateliér, který přináší profesionální fotografickou službu přímo k vám. Naše specialitou jsou <strong>taneční soutěže, plesy a firemní večírky</strong>, kde zachycujeme nejlepší momenty vaší akce.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Naše služby však nejsou omezeny pouze na tyto akce. Po domluvě jsme schopni fotografovat i <strong>svatby, oslavy, konference a další speciální příležitosti</strong>.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  Naší <strong>největší výhodou</strong> je možnost <strong>tisku fotografií přímo na místě</strong>. Vaši hosté si mohou odnést fyzické fotografie jako suvenýr z vaší akce - to vytváří nezapomenutelný zážitek a okamžitou radost z kvalitních fotografií.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-foreground mb-2">Profesionální fotografie</h3>
                  <p className="text-foreground/70">
                    Kvalitní vybavení a zkušení fotografové, kteří zachytí každý důležitý moment vaší akce.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-foreground mb-2">Tisk na místě</h3>
                  <p className="text-foreground/70">
                    Hosté si mohou odnést fyzické fotografie jako okamžitý suvenýr z vaší akce.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-foreground mb-2">Různé akce</h3>
                  <p className="text-foreground/70">
                    Od tanečních soutěží a plesů až po firemní večírky či jiné akce.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-foreground mb-2">Mobilní přístup</h3>
                  <p className="text-foreground/70">
                    Přijdeme k vám s kompletním vybavením.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section 
          className="py-20 border-t border-border"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/gallery-bg-new_678b441b.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="container">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Využíváme nejmodernější technologie
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-12 max-w-3xl mx-auto">
              Naše služby jsou postaveny na nejnovějších technologiích, které zajišťují vysoký uživatelský komfort při výběru fotografií, jejich tisk v nejlepší kvalitě a vše ve velmi krátkém čase.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-2xl font-bold flex-shrink-0">✔</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Termosublimační tisk</h3>
                  <p className="text-foreground/70 text-sm">Nejmodernější technologie pro tisk fotografií s dokonalou kvalitou</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-2xl font-bold flex-shrink-0">✔</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Dotykové terminály</h3>
                  <p className="text-foreground/70 text-sm">Intuitivní výběr a objednávání fotografií přímo na místě</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-2xl font-bold flex-shrink-0">✔</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Vlastní software</h3>
                  <p className="text-foreground/70 text-sm">Speciálně vyvinutý systém pro optimální workflow a efektivitu</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-2xl font-bold flex-shrink-0">✔</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Bezdrátový přenos</h3>
                  <p className="text-foreground/70 text-sm">Okamžitý bezdrátový přenos fotografií bez zbytečných zpoždění</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary max-w-2xl mx-auto">
              <p className="text-foreground text-center text-lg leading-relaxed">
                <strong>Fotografie vytisknuté našim fotoateliérem neztrácejí barvu stářím ani na slunci.</strong> Termosublimační tisk zajišťuje dlouhodobou trvanlivost a stabilitu barev, takže vaše vzpomínky zůstanou živé a krásné na dlouhá léta.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Připraveni na vaši akci?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Kontaktujte nás a domluvme si detaily vaší fotografie. Jsme tu pro vás!
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-bold"
              >
                Kontaktujte nás
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container text-center">
          <p className="text-sm opacity-75">
            © 2026 Fotoateliér RAZE. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
}
