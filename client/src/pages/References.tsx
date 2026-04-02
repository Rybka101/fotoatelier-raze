import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const references = [
  {
    id: 1,
    name: "Český národní svaz mažoretkového sportu",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/Český národní svaz mažoretkového sportu_711f84e8.png"
  },
  {
    id: 2,
    name: "Taneční Martina a Kateřiny Čechových",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/TaneЯnб Martina a Kate¤iny мechovьch_75660aaa.png"
  },
  {
    id: 3,
    name: "DDM Modřany",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/DDM Modřany_78950c80.png"
  },
  {
    id: 4,
    name: "Kelly Dubňany",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/Kelly Dubňany_7a1435ed.jpg"
  },
  {
    id: 5,
    name: "Městys Cítoliby",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/Městys Cítoliby_e1ff0c08.png"
  },
  {
    id: 6,
    name: "Městys Peruc",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/Městys Peruc_ae2d5d0b.png"
  },
  {
    id: 7,
    name: "Městys Ročov",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/Městys Ročov_812b8b60.jpg"
  },
  {
    id: 8,
    name: "Obec Líšťany",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/Obec Líšťany_321ec1f1.jpg"
  },
];

export default function References() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/raze-logo_ebc3f343.png" 
              alt="Fotoateliér RAZE" 
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
              Domů
            </Link>
            <Link href="/gallery" className="text-foreground/70 hover:text-foreground transition-colors">
              Galerie
            </Link>
            <Link href="/references" className="text-primary font-semibold">
              Reference
            </Link>
            <Link href="/contact" className="text-foreground/70 hover:text-foreground transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Naše Reference
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Zde jsou některé z našich partnerů a klientů, se kterými máme tu čest pracovat.
          </p>
        </div>
      </section>

      {/* References Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {references.map((ref) => (
              <div
                key={ref.id}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                <div className="h-32 w-full flex items-center justify-center mb-4 bg-gray-50 rounded">
                  <img
                    src={ref.logo}
                    alt={ref.name}
                    className="max-h-32 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-center font-semibold text-foreground text-sm leading-tight">
                  {ref.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Chcete s námi spolupracovat?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Jsme otevřeni novým partnerstvím a spolupracím. Kontaktujte nás a domluvme si detaily.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Kontaktujte nás <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container text-center">
          <p className="opacity-70">&copy; 2026 Fotoateliér RAZE. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
}
