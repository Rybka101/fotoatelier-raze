import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Professional with Bold Blue Accent
 * - Clean contact form with professional layout
 * - Social media integration
 * - Contact information clearly displayed
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/raze-logo_ebc3f343.png" 
              alt="Fotoateliér RAZE" 
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Domů
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary font-medium transition-colors">
              Galerie
            </Link>
            <Link href="/contact" className="text-primary font-medium">
              Kontakt
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Header */}
        <section className="py-12 bg-white border-b border-border">
          <div className="container">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-blue-700 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zpět na domů
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kontaktujte nás
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Máte dotazy nebo chcete objednat fotografii vaší akce? Kontaktujte nás a my vám rádi pomůžeme.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Informace
                </h2>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">ℹ</div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Zodpovědná osoba</h3>
                      <p className="text-foreground/70 mb-1">
                        Radek Zeman
                      </p>
                      <p className="text-foreground/70 text-sm">
                        IČO: 06643477
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Telefon</h3>
                      <a href="tel:+420727891241" className="text-foreground/70 hover:text-primary transition-colors">
                        +420 727 891 241
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <a href="mailto:raze@raze.cz" className="text-foreground/70 hover:text-primary transition-colors">
                        raze@raze.cz
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Adresa</h3>
                      <p className="text-foreground/70">
                        Rybalkova 1228<br />
                        440 01 Louny
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="font-bold text-foreground mb-6">Sledujte nás</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>

                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg border border-border shadow-md">
                  <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Pošlete nám zprávu
                  </h2>

                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <p className="text-green-700 font-medium">
                        Děkujeme! Vaše zpráva byla úspěšně odeslána. Brzy se vám ozveme.
                      </p>
                    </div>
                  ) : (
                    <form action="https://formspree.io/f/mdapzgnk" method="POST" onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Jméno *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Vaše jméno"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="vase@email.cz"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="+420 123 456 789"
                          />
                        </div>
                        <div>
                          <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                            Datum akce
                          </label>
                          <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                          Typ akce
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Vyberte typ akce</option>
                          <option value="tanecni-soutez">Taneční soutěž</option>
                          <option value="ples">Ples</option>
                          <option value="firemni-akcce">Firemní akce</option>
                          <option value="svatba">Svatba</option>
                          <option value="jina">Jiná akce</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Zpráva *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Popište vaši akci a co od nás očekáváte..."
                        ></textarea>
                      </div>

                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-blue-700 text-white font-bold"
                      >
                        Odeslat zprávu
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Často kladené otázky
            </h2>

            <div className="space-y-6">


              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg text-foreground mb-2">Jak dlouho trvá, než dostanu fotografie?</h3>
                <p className="text-foreground/70">
                  Fotografie jsou dostupné pro tisk na místě během několika sekund. Digitální verze jsou obvykle připraveny do 1 týdne po akci.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg text-foreground mb-2">Pokrýváme akce mimo Českou republiku?</h3>
                <p className="text-foreground/70">
                  Jsme primárně dostupní po celé České republice. Pro akce mimo ČR nás prosím kontaktujte.
                </p>
              </div>
            </div>
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
