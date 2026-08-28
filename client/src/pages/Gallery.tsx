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
    image: "/gallery/vystoupeni-R6A_0076.webp"
  },
  {
    id: 2,
    title: "Vystoupení 2",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_0273.webp"
  },
  {
    id: 3,
    title: "Vystoupení 3",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_0309.webp"
  },
  {
    id: 4,
    title: "Vystoupení 4",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_0431.webp"
  },
  {
    id: 5,
    title: "Vystoupení 5",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_0493.webp"
  },
  {
    id: 6,
    title: "Vystoupení 6",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_3177.webp"
  },
  {
    id: 7,
    title: "Vystoupení 7",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_4902.webp"
  },
  {
    id: 8,
    title: "Vystoupení 8",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_7839.webp"
  },
  {
    id: 9,
    title: "Vystoupení 9",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_8009.webp"
  },
  {
    id: 10,
    title: "Vystoupení 10",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_8084.webp"
  },
  {
    id: 11,
    title: "Vystoupení 11",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_8232.webp"
  },
  {
    id: 12,
    title: "Vystoupení 12",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_8905.webp"
  },
  {
    id: 13,
    title: "Vystoupení 13",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_8915.webp"
  },

  {
    id: 14,
    title: "Vystoupení 14",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_9728.webp"
  },
  {
    id: 15,
    title: "Vystoupení 15",
    category: "Vystoupení",
    image: "/gallery/vystoupeni-R6A_9819.webp"
  },
  {
    id: 16,
    title: "Fotoateliér 1",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-01.webp"
  },
  {
    id: 17,
    title: "Fotoateliér 2",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-02.webp"
  },
  {
    id: 18,
    title: "Fotoateliér 3",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-03.webp"
  },
  {
    id: 19,
    title: "Fotoateliér 4",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-04.webp"
  },
  {
    id: 20,
    title: "Fotoateliér 5",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-05.webp"
  },
  {
    id: 21,
    title: "Fotoateliér 6",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-06.webp"
  },
  {
    id: 22,
    title: "Fotoateliér 7",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-07.webp"
  },
  {
    id: 23,
    title: "Fotoateliér 8",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-08.webp"
  },
  {
    id: 24,
    title: "Fotoateliér 9",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-09.webp"
  },
  {
    id: 25,
    title: "Fotoateliér 10",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-10.webp"
  },
  {
    id: 26,
    title: "Fotoateliér 11",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-11.webp"
  },
  {
    id: 27,
    title: "Fotoateliér 12",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-12.webp"
  },
  {
    id: 28,
    title: "Fotoateliér 13",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-13.webp"
  },
  {
    id: 29,
    title: "Fotoateliér 14",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-14.webp"
  },
  {
    id: 30,
    title: "Fotoateliér 15",
    category: "Fotoateliér",
    image: "/gallery/fotokoutek-15.webp"
  },
];

const categories = ["Všechny", "Vystoupení", "Fotoateliér"];

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
              src="/assets/raze-logo.png" 
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
            <a 
              href="https://eshop.raze.cz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="sm" className="bg-primary hover:bg-blue-700 text-white font-bold">
                E-shop
              </Button>
            </a>
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
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable={false}
                    />
                    {/* Watermark - Single centered logo */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <img
                        src="/assets/raze-logo.png"
                        alt="Watermark"
                        className="w-64 h-64 opacity-40"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4 pointer-events-none">
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
                className="w-full h-full object-contain select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              {/* Watermark - Single centered logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src="/assets/raze-logo.png"
                  alt="Watermark"
                  className="w-64 h-64 opacity-40"
                />
              </div>
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
