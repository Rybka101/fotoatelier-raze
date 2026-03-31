import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function References() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Raze
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

      {/* Empty State Message */}
      <section className="py-16">
        <div className="container">
          <div className="p-8 bg-blue-50 rounded-lg text-center border border-blue-200">
            <p className="text-foreground/70">
              Loga a názvy organizací budou brzy přidány.
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
          <p className="opacity-70">&copy; 2026 Fotoateliér RAZE. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
}
