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
const SUPABASE_URL = "https://kwwjdqbsxzbydejfmhnv.supabase.co";

const brandSections: BrandSection[] = [
  {
    brand: "CLARESA",
    items: [
      { id: 1, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Claresa01.tusz.png`, alt: "Claresa Tusz 1" },
      { id: 2, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Claresa02.tusz.png`, alt: "Claresa Tusz 2" },
      { id: 3, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Claresa03.tusz.png`, alt: "Claresa Tusz 3" },
      { id: 4, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Claresa00.pomadka.png`, alt: "Claresa Pomadka 1" },
      { id: 5, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Claresa04.pomadka.png`, alt: "Claresa Pomadka 2" },
    ]
  },
  {
    brand: "YOLYN",
    items: [
      { id: 6, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/yolyn/Yolyn_produkt_03LOGO.png`, alt: "Yolyn 1" },
      { id: 7, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/yolyn/Yolyn_produkt_04.png`, alt: "Yolyn 2" },
      { id: 8, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/yolyn/Yolyn_produkt_07.png`, alt: "Yolyn 3" },
      { id: 9, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/yolyn/Yolyn_produkt_08.png`, alt: "Yolyn 4" },
      { id: 10, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/yolyn/Yolyn_produkt_10.png`, alt: "Yolyn 5" },
      { id: 11, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/yolyn/Yolyn_produkt_12.png`, alt: "Yolyn 6" },
      { id: 12, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/yolyn/Yolyn_produkt_15.png`, alt: "Yolyn 7" },
      { id: 13, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/yolyn/Yolyn_produkt_17.png`, alt: "Yolyn 8" },
      { id: 14, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/yolyn/Yolyn_produkt_20.png`, alt: "Yolyn 9" },
    ]
  }
];
const PortfolioGrid = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  return <>
      <section className="w-full px-4 md:px-8 pb-16">
        {brandSections.map((section, sectionIndex) => <div key={section.brand} className="mb-16 last:mb-0">
            <h2 className="font-display text-2xl md:text-3xl tracking-wider text-center mb-8 opacity-0 animate-fade-in-up">
              {section.brand}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {section.items.map((item, index) => {
                const isAboveFold = sectionIndex === 0 && index < 2;
                return (
                  <div key={item.id} className={`portfolio-image opacity-0 animate-fade-in-up stagger-${sectionIndex * 2 + index + 1}`} onClick={() => setSelectedImage(item)}>
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        loading={isAboveFold ? "eager" : "lazy"}
                        fetchPriority={isAboveFold ? "high" : "auto"}
                        className="w-full h-full object-contain" 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>)}
      </section>

      {selectedImage && <ImageLightbox src={selectedImage.src} alt={selectedImage.alt} onClose={() => setSelectedImage(null)} />}
    </>;
};
export default PortfolioGrid;