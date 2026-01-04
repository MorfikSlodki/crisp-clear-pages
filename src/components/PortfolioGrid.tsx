import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
}

interface BrandSection {
  brand: string;
  items: PortfolioItem[];
}

const brandSections: BrandSection[] = [
  {
    brand: "ZARA",
    items: [
      { id: 1, src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", alt: "Zara Campaign 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", alt: "Zara Campaign 2" },
    ],
  },
  {
    brand: "H&M",
    items: [
      { id: 3, src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80", alt: "H&M Editorial 1" },
      { id: 4, src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80", alt: "H&M Editorial 2" },
    ],
  },
  {
    brand: "RESERVED",
    items: [
      { id: 5, src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80", alt: "Reserved Campaign 1" },
      { id: 6, src: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80", alt: "Reserved Campaign 2" },
    ],
  },
];

const PortfolioGrid = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <>
      <section className="w-full px-4 md:px-8 pb-16">
        {brandSections.map((section, sectionIndex) => (
          <div key={section.brand} className="mb-16 last:mb-0">
            <h2 className="font-display text-2xl md:text-3xl tracking-wider text-center mb-8 opacity-0 animate-fade-in-up">
              {section.brand}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {section.items.map((item, index) => (
                <div
                  key={item.id}
                  className={`portfolio-image opacity-0 animate-fade-in-up stagger-${(sectionIndex * 2) + index + 1}`}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {selectedImage && (
        <ImageLightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default PortfolioGrid;
