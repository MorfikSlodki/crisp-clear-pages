import { useState } from "react";
import BrandGalleryLightbox from "./BrandGalleryLightbox";

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
}

interface BrandSection {
  brand: string;
  logo?: string;
  items: PortfolioItem[];
}

const SUPABASE_URL = "https://kwwjdqbsxzbydejfmhnv.supabase.co";

// Top 3 featured images - placeholder for user to add later
const topFeatured: PortfolioItem[] = [
  // { id: 100, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/top1.png`, alt: "Top 1" },
  // { id: 101, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/top2.png`, alt: "Top 2" },
  // { id: 102, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/top3.png`, alt: "Top 3" },
];

const brandSections: BrandSection[] = [
  {
    brand: "CLARESA",
    logo: undefined, // Will be: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/claresa_logo.png`
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
    logo: undefined, // Will be: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/yolyn_logo.png`
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
    logo: undefined,
    items: [
      { id: 15, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Hegron_produkt_02.png`, alt: "Hegron 1" },
      { id: 16, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/Hegron_produkt_03.png`, alt: "Hegron 2" },
    ]
  },
  {
    brand: "FASHION",
    logo: undefined,
    items: [
      { id: 17, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/_79A0636.jpg`, alt: "Fashion 1" },
      { id: 18, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/_79A0864.jpg`, alt: "Fashion 2" },
      { id: 19, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/_79A0882.jpg`, alt: "Fashion 3" },
    ]
  },
  {
    brand: "SWETER BORDO",
    logo: undefined,
    items: [
      { id: 20, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_bordo_01.png`, alt: "Sweter Bordo 1" },
      { id: 21, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_bordo_02.png`, alt: "Sweter Bordo 2" },
      { id: 22, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_bordo_03.png`, alt: "Sweter Bordo 3" },
      { id: 23, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_bordo_04.png`, alt: "Sweter Bordo 4" },
    ]
  },
  {
    brand: "SWETER CIEMNY",
    logo: undefined,
    items: [
      { id: 24, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_ciemny_01.png`, alt: "Sweter Ciemny 1" },
      { id: 25, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_ciemny_02.png`, alt: "Sweter Ciemny 2" },
      { id: 26, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/sweter_ciemny_03.png`, alt: "Sweter Ciemny 3" },
    ]
  },
  {
    brand: "KOMPLET SZTRUKS",
    logo: undefined,
    items: [
      { id: 27, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/komplet_sztruks_01.png`, alt: "Komplet Sztruks 1" },
      { id: 28, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/komplet_sztruks_02.png`, alt: "Komplet Sztruks 2" },
      { id: 29, src: `${SUPABASE_URL}/storage/v1/object/public/zdjecia/komplet_sztruks_03.png`, alt: "Komplet Sztruks 3" },
    ]
  }
];

const VISIBLE_COUNT = 3;

const PortfolioGrid = () => {
  const [galleryState, setGalleryState] = useState<{
    items: PortfolioItem[];
    initialIndex: number;
  } | null>(null);

  const openGallery = (items: PortfolioItem[], clickedIndex: number) => {
    setGalleryState({ items, initialIndex: clickedIndex });
  };

  return (
    <>
      <section className="w-full px-4 md:px-8 pb-16">
        {/* Top Featured Section */}
        {topFeatured.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl tracking-wider text-center mb-8 opacity-0 animate-fade-in-up">
              WYRÓŻNIONE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {topFeatured.map((item, index) => (
                <div
                  key={item.id}
                  className={`portfolio-image opacity-0 animate-fade-in-up stagger-${index + 1}`}
                  onClick={() => openGallery(topFeatured, index)}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading={index < 3 ? "eager" : "lazy"}
                      fetchPriority={index < 3 ? "high" : "auto"}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Brand Sections */}
        {brandSections.map((section, sectionIndex) => {
          const visibleItems = section.items.slice(0, VISIBLE_COUNT);
          const hasMore = section.items.length > VISIBLE_COUNT;

          return (
            <div key={section.brand} className="mb-16 last:mb-0">
              <div className="flex items-center justify-center gap-3 mb-8 opacity-0 animate-fade-in-up">
                {section.logo && (
                  <img
                    src={section.logo}
                    alt={`${section.brand} logo`}
                    className="h-8 w-auto object-contain"
                  />
                )}
                <h2 className="font-display text-2xl md:text-3xl tracking-wider text-center">
                  {section.brand}
                </h2>
                {hasMore && (
                  <span className="text-muted-foreground text-sm ml-2">
                    (+{section.items.length - VISIBLE_COUNT})
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {visibleItems.map((item, index) => {
                  const isAboveFold = sectionIndex === 0 && index < 2;
                  const globalIndex = section.items.findIndex(i => i.id === item.id);
                  
                  return (
                    <div
                      key={item.id}
                      className={`portfolio-image opacity-0 animate-fade-in-up stagger-${sectionIndex * 2 + index + 1} cursor-pointer`}
                      onClick={() => openGallery(section.items, globalIndex)}
                    >
                      <div className="aspect-[4/5] overflow-hidden relative">
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading={isAboveFold ? "eager" : "lazy"}
                          fetchPriority={isAboveFold ? "high" : "auto"}
                          className="w-full h-full object-contain"
                        />
                        {hasMore && index === VISIBLE_COUNT - 1 && (
                          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                            <span className="text-foreground font-display text-lg">
                              Zobacz więcej
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {galleryState && (
        <BrandGalleryLightbox
          items={galleryState.items}
          initialIndex={galleryState.initialIndex}
          onClose={() => setGalleryState(null)}
        />
      )}
    </>
  );
};

export default PortfolioGrid;
