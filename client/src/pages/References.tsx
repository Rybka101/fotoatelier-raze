import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function References() {
  const references = [
    {
      id: 1,
      name: "Organizace 1",
      logo: "https://via.placeholder.com/200x100?text=Org+1",
      description: "Popis vaší spolupráce"
    },
    {
      id: 2,
      name: "Organizace 2",
      logo: "https://via.placeholder.com/200x100?text=Org+2",
      description: "Popis vaší spolupráce"
    },
    {
      id: 3,
      name: "Organizace 3",
      logo: "https://via.placeholder.com/200x100?text=Org+3",
      description: "Popis vaší spolupráce"
    },
    {
      id: 4,
      name: "Organizace 4",
      logo: "https://via.placeholder.com/200x100?text=Org+4",
      description: "Popis vaší spolupráce"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="text-2xl font-bold text-primary">Raze</a>
          </Link>
          <div className="flex gap-8">
            <Link href="/">
              <a className="text-foreground/70 hover:text-foreground transition-colors">Domů</a>
            </Link>
            <Link href="/gallery">
              <a className="text-foreground/70 hover:text-foreground transition-colors">Galerie</a>
            </Link>
            <Link href="/references">
              <a className="text-primary font-semibold">Reference</a>
            </Link>
            <Link href="/contact">
              <a className="text-foreground/70 hover:text-foreground transition-colors">Kontakt</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Naše Reference
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Spolupracujeme s předními organizacemi a společnostmi. Zde jsou některé z našich partnerů a klientů, se kterými jsme měli tu čest pracovat.
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
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
              >
                <img
                  src={ref.logo}
                  alt={ref.name}
                  className="h-24 w-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {ref.name}
                </h3>
                <p className="text-sm text-foreground/60">
                  {ref.description}
                </p>
              </div>
            ))}
          </div>

          {/* Empty State Message */}
          <div className="mt-12 p-8 bg-blue-50 rounded-lg text-center border border-blue-200">
            <p className="text-foreground/70 mb-4">
              Loga a názvy organizací budou brzy přidány. Pokud chcete přidat vaše partnery, kontaktujte nás.
            </p>
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
          <p className="text-sm opacity-75">
            © 2026 Fotoateliér RAZE. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
}
