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

// Gallery items with your actual photos
const galleryItems = [
  {
    id: 1,
    title: "Vystoupení 1",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_0076_f60d010c.jpg"
  },
  {
    id: 2,
    title: "Vystoupení 2",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_0273_c7f1f8af.jpg"
  },
  {
    id: 3,
    title: "Vystoupení 3",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_0309_c9d24de2.jpg"
  },
  {
    id: 4,
    title: "Vystoupení 4",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_0431_9b1e159c.jpg"
  },
  {
    id: 5,
    title: "Vystoupení 5",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_0493_e26a7fe8.jpg"
  },
  {
    id: 6,
    title: "Vystoupení 6",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_3177_d0a1c701.jpg"
  },
  {
    id: 7,
    title: "Vystoupení 7",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_4902_8eccc703.jpg"
  },
  {
    id: 8,
    title: "Vystoupení 8",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_7839_b9fa81f8.jpg"
  },
  {
    id: 9,
    title: "Vystoupení 9",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_8009_a19544e5.jpg"
  },
  {
    id: 10,
    title: "Vystoupení 10",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_8084_b603db62.jpg"
  },
  {
    id: 11,
    title: "Vystoupení 11",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_8232_a6d3f6c8.jpg"
  },
  {
    id: 12,
    title: "Vystoupení 12",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_8905_820be708.jpg"
  },
  {
    id: 13,
    title: "Vystoupení 13",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_8915_e01c3bd7.jpg"
  },
  {
    id: 14,
    title: "Vystoupení 14",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_9728_6b2b5a30.jpg"
  },
  {
    id: 15,
    title: "Vystoupení 15",
    category: "Vystoupení",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/R6A_9819_7210c34d.jpg"
  },
  {
    id: 16,
    title: "Fotoatelier 1",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_8060_1bce6371.PNG"
  },
  {
    id: 17,
    title: "Fotoatelier 2",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_8071_92913b53.PNG"
  },
  {
    id: 18,
    title: "Fotoatelier 3",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_8072_6267c2c3.PNG"
  },
  {
    id: 19,
    title: "Fotoatelier 4",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_8073_88a8e93f.PNG"
  },
  {
    id: 20,
    title: "Fotoatelier 5",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_8074_91bd5eb9.PNG"
  },
  {
    id: 21,
    title: "Fotoatelier 6",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_8075_7cb3bdda.PNG"
  },
  {
    id: 22,
    title: "Fotoatelier 7",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_8076_af174853.PNG"
  },
  {
    id: 23,
    title: "Fotoatelier 8",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_8077_452fe1f9.PNG"
  },
  {
    id: 24,
    title: "Fotoatelier 9",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_3110_6dfb8d03.jpg"
  },
  {
    id: 25,
    title: "Fotoatelier 10",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_3167_6d5dd852.jpg"
  },
  {
    id: 26,
    title: "Fotoatelier 11",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_3208_0fb6af55.jpg"
  },
  {
    id: 27,
    title: "Fotoatelier 12",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_3246_4535ca5a.jpg"
  },
  {
    id: 28,
    title: "Fotoatelier 13",
    category: "Fotoatelier",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663497827847/jnssJtQ6JEr9ABriAaCYcF/IMG_3288_944d71fa.jpg"
  },
];

const categories = ["Všechny", "Vystoupení", "Fotoatelier"];

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
            <Link href="/references" className="text-foreground hover:text-primary font-medium transition-colors">
              Reference
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

        {/* Gallery Grid - Improved layout that doesn't cut off photos */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative w-full bg-gray-200" style={{ aspectRatio: '3/4' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        {item.category && <p className="text-sm text-white/80">{item.category}</p>}
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
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Líbí se vám naše práce?
            </h2>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold">
                Kontaktujte nás
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
            <div className="relative bg-gray-200 flex items-center justify-center" style={{ aspectRatio: '3/4' }}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {selectedImage.title}
              </h2>
              <p className="text-primary font-medium mb-4">{selectedImage.category}</p>
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
