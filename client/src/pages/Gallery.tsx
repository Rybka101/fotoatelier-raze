import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Professional with Bold Blue Accent
 * - Gallery-focused layout with asymmetric grid
 * - Professional presentation of photography work
 * - Hover effects and smooth transitions
 */

// Sample gallery items - in a real application, these would come from a database or API
const galleryItems = [
  {
    id: 1,
    title: "Taneční soutěž 2025",
    category: "Taneční soutěž",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    description: "Profesionální fotografie z taneční soutěže s dynamickými momenty"
  },
  {
    id: 2,
    title: "Korporátní večírek",
    category: "Firemní akce",
    image: "https://images.unsplash.com/photo-1519671482677-504be0ffec60?w=600&h=400&fit=crop",
    description: "Fotografie z korporátního večírku s profesionálním přístupem"
  },
  {
    id: 3,
    title: "Ples",
    category: "Ples",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
    description: "Elegantní fotografie z plesu s profesionálním osvětlením"
  },
  {
    id: 4,
    title: "Taneční soutěž - Detail",
    category: "Taneční soutěž",
    image: "https://images.unsplash.com/photo-1504521531156-5a5d0b58f0e0?w=600&h=400&fit=crop",
    description: "Detailní záběry tanečníků v akci"
  },
  {
    id: 5,
    title: "Firemní akce",
    category: "Firemní akce",
    image: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=600&h=400&fit=crop",
    description: "Profesionální fotografie z firemní akce"
  },
  {
    id: 6,
    title: "Svatba",
    category: "Svatby",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    description: "Nádherné fotografie ze svatby"
  },
];

const categories = ["Všechny", "Taneční soutěž", "Ples", "Firemní akce", "Svatby"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Všechny");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "Všechny" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
            <Link href="/gallery" className="text-primary font-medium">
              Galerie
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary font-medium transition-colors">
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
              Naše Galerie
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Prohlédněte si naši kolekci fotografií z různých akcí. Každá fotografie je pečlivě vybrána, aby zachytila nejlepší momenty vaší akce.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-foreground hover:bg-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className={`group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    index % 5 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  <div className="relative h-64 lg:h-96 overflow-hidden bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Líbí se vám naše práce?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Kontaktujte nás a domluvme si fotografování vaší akce. Jsme připraveni přinést profesionální fotografickou službu přímo k vám.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold">
                Objednat fotografii
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96 overflow-hidden bg-gray-200">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {selectedImage.title}
              </h2>
              <p className="text-primary font-medium mb-4">{selectedImage.category}</p>
              <p className="text-foreground/70 mb-6">{selectedImage.description}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Zavřít
              </button>
            </div>
          </div>
        </div>
      )}

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
