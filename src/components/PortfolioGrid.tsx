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
      { id: 6, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Yolyn_produkt_03LOGO.png`, alt: "Yolyn 1" },
      { id: 7, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Yolyn_produkt_04.png`, alt: "Yolyn 2" },
      { id: 8, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Yolyn_produkt_07.png`, alt: "Yolyn 3" },
      { id: 9, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Yolyn_produkt_08.png`, alt: "Yolyn 4" },
      { id: 10, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Yolyn_produkt_10.png`, alt: "Yolyn 5" },
      { id: 11, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Yolyn_produkt_12.png`, alt: "Yolyn 6" },
      { id: 12, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Yolyn_produkt_15.png`, alt: "Yolyn 7" },
      { id: 13, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Yolyn_produkt_17.png`, alt: "Yolyn 8" },
      { id: 14, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Yolyn_produkt_20.png`, alt: "Yolyn 9" },
    ]
  },
  {
    brand: "HEGRON",
    items: [
      { id: 15, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Hegron_produkt_02.png`, alt: "Hegron 1" },
      { id: 16, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Hegron_produkt_03.png`, alt: "Hegron 2" },
    ]
  },
  {
    brand: "FASHION",
    items: [
      { id: 17, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/_79A0636.jpg`, alt: "Fashion 1" },
      { id: 18, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/_79A0864.jpg`, alt: "Fashion 2" },
      { id: 19, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/_79A0882.jpg`, alt: "Fashion 3" },
    ]
  },
  {
    brand: "SWETER BORDO",
    items: [
      { id: 20, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_bordo_01.png`, alt: "Sweter Bordo 1" },
      { id: 21, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_bordo_02.png`, alt: "Sweter Bordo 2" },
      { id: 22, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_bordo_03.png`, alt: "Sweter Bordo 3" },
      { id: 23, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_bordo_04.png`, alt: "Sweter Bordo 4" },
    ]
  },
  {
    brand: "SWETER CIEMNY",
    items: [
      { id: 24, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_ciemny_01.png`, alt: "Sweter Ciemny 1" },
      { id: 25, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_ciemny_02.png`, alt: "Sweter Ciemny 2" },
      { id: 26, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_ciemny_03.png`, alt: "Sweter Ciemny 3" },
    ]
  },
  {
    brand: "KOMPLET SZTRUKS",
    items: [
      { id: 27, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/komplet_sztruks_01.png`, alt: "Komplet Sztruks 1" },
      { id: 28, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/komplet_sztruks_02.png`, alt: "Komplet Sztruks 2" },
      { id: 29, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/komplet_sztruks_03.png`, alt: "Komplet Sztruks 3" },
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