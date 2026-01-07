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
  logoSize?: string;
  hideText?: boolean;
  items: PortfolioItem[];
}
const SUPABASE_URL = "https://kwwjdqbsxzbydejfmhnv.supabase.co";
const STORAGE_PATH = `${SUPABASE_URL}/storage/v1/object/public/zdjecia`;

// Top 3 featured images - placeholder for user to add later
const topFeatured: PortfolioItem[] = [
  // { id: 100, src: `${STORAGE_PATH}/top1.jpg`, alt: "Top 1" },
  // { id: 101, src: `${STORAGE_PATH}/top2.jpg`, alt: "Top 2" },
  // { id: 102, src: `${STORAGE_PATH}/top3.jpg`, alt: "Top 3" },
];
const brandSections: BrandSection[] = [{
  brand: "ZALANDO",
  logo: `${STORAGE_PATH}/Zalandologo.png`,
  logoSize: "h-8",
  hideText: true,
  items: [{
    id: 37,
    src: `${STORAGE_PATH}/Zalando08.jpg`,
    alt: "Zalando 8"
  }, {
    id: 35,
    src: `${STORAGE_PATH}/Zalando06.jpg`,
    alt: "Zalando 6"
  }, {
    id: 30,
    src: `${STORAGE_PATH}/Zalando01.jpg`,
    alt: "Zalando 1"
  }, {
    id: 31,
    src: `${STORAGE_PATH}/Zalando02.jpg`,
    alt: "Zalando 2"
  }, {
    id: 32,
    src: `${STORAGE_PATH}/Zalando03.jpg`,
    alt: "Zalando 3"
  }, {
    id: 33,
    src: `${STORAGE_PATH}/Zalando04.jpg`,
    alt: "Zalando 4"
  }, {
    id: 34,
    src: `${STORAGE_PATH}/Zalando05.jpg`,
    alt: "Zalando 5"
  }, {
    id: 36,
    src: `${STORAGE_PATH}/Zalando07.jpg`,
    alt: "Zalando 7"
  }]
}, {
  brand: "CLARESA",
  logo: `${STORAGE_PATH}/claresalogo.png`,
  hideText: true,
  items: [{
    id: 1,
    src: `${STORAGE_PATH}/Claresa01.jpg`,
    alt: "Claresa 1"
  }, {
    id: 2,
    src: `${STORAGE_PATH}/Claresa02.jpg`,
    alt: "Claresa 2"
  }, {
    id: 3,
    src: `${STORAGE_PATH}/claresa03.jpg`,
    alt: "Claresa 3"
  }, {
    id: 4,
    src: `${STORAGE_PATH}/claresa04.jpg`,
    alt: "Claresa 4"
  }, {
    id: 5,
    src: `${STORAGE_PATH}/claresa05.jpg`,
    alt: "Claresa 5"
  }, {
    id: 6,
    src: `${STORAGE_PATH}/claresa06.jpg`,
    alt: "Claresa 6"
  }, {
    id: 7,
    src: `${STORAGE_PATH}/claresa07.jpg`,
    alt: "Claresa 7"
  }, {
    id: 8,
    src: `${STORAGE_PATH}/claresa08.jpg`,
    alt: "Claresa 8"
  }]
}, {
  brand: "LE.SONGE",
  logo: `${STORAGE_PATH}/nowelogolesonge.png`,
  hideText: true,
  items: [{
    id: 42,
    src: `${STORAGE_PATH}/LE.SONGE03.jpg`,
    alt: "Le Songe 3"
  }, {
    id: 40,
    src: `${STORAGE_PATH}/LE.SONGE01.jpg`,
    alt: "Le Songe 1"
  }, {
    id: 47,
    src: `${STORAGE_PATH}/LE.SONGE08.jpg`,
    alt: "Le Songe 8"
  }, {
    id: 41,
    src: `${STORAGE_PATH}/LE.SONGE02.jpg`,
    alt: "Le Songe 2"
  }, {
    id: 43,
    src: `${STORAGE_PATH}/LE.SONGE04.jpg`,
    alt: "Le Songe 4"
  }, {
    id: 44,
    src: `${STORAGE_PATH}/LE.SONGE05.jpg`,
    alt: "Le Songe 5"
  }, {
    id: 45,
    src: `${STORAGE_PATH}/LE.SONGE06.jpg`,
    alt: "Le Songe 6"
  }, {
    id: 46,
    src: `${STORAGE_PATH}/LE.SONGE07.jpg`,
    alt: "Le Songe 7"
  }, {
    id: 48,
    src: `${STORAGE_PATH}/LE.SONGE09.jpg`,
    alt: "Le Songe 9"
  }, {
    id: 49,
    src: `${STORAGE_PATH}/LE.SONGE10.jpg`,
    alt: "Le Songe 10"
  }, {
    id: 50,
    src: `${STORAGE_PATH}/LE.SONGE11.jpg`,
    alt: "Le Songe 11"
  }, {
    id: 51,
    src: `${STORAGE_PATH}/LE.SONGE12.jpg`,
    alt: "Le Songe 12"
  }]
}, {
  brand: "YOLYN",
  logo: `${STORAGE_PATH}/logoyolyn.png`,
  hideText: true,
  items: [{
    id: 18,
    src: `${STORAGE_PATH}/Yolyn09.jpg`,
    alt: "Yolyn 9"
  }, {
    id: 15,
    src: `${STORAGE_PATH}/Yolyn06.jpg`,
    alt: "Yolyn 6"
  }, {
    id: 16,
    src: `${STORAGE_PATH}/Yolyn07.jpg`,
    alt: "Yolyn 7"
  }, {
    id: 10,
    src: `${STORAGE_PATH}/Yolyn01.jpg`,
    alt: "Yolyn 1"
  }, {
    id: 11,
    src: `${STORAGE_PATH}/Yolyn02.jpg`,
    alt: "Yolyn 2"
  }, {
    id: 12,
    src: `${STORAGE_PATH}/Yolyn03.jpg`,
    alt: "Yolyn 3"
  }, {
    id: 13,
    src: `${STORAGE_PATH}/Yolyn04.jpg`,
    alt: "Yolyn 4"
  }, {
    id: 14,
    src: `${STORAGE_PATH}/Yolyn05.jpg`,
    alt: "Yolyn 5"
  }, {
    id: 17,
    src: `${STORAGE_PATH}/Yolyn08.jpg`,
    alt: "Yolyn 8"
  }]
}, {
  brand: "HEGRON",
  logo: `${STORAGE_PATH}/logohegron.png`,
  items: [{
    id: 20,
    src: `${STORAGE_PATH}/Hegron01.jpg`,
    alt: "Hegron 1"
  }, {
    id: 21,
    src: `${STORAGE_PATH}/Hegron02.jpg`,
    alt: "Hegron 2"
  }]
}, {
  brand: "WSPÓŁPRACA INFLUENCERSKA",
  logo: undefined,
  items: [{
    id: 66,
    src: `${STORAGE_PATH}/PorcjaFrytek07.jpg`,
    alt: "Porcja Frytek 7"
  }, {
    id: 60,
    src: `${STORAGE_PATH}/PorcjaFrytek01.jpg`,
    alt: "Porcja Frytek 1"
  }, {
    id: 72,
    src: `${STORAGE_PATH}/PorcjaFrytek13.jpg`,
    alt: "Porcja Frytek 13"
  }, {
    id: 61,
    src: `${STORAGE_PATH}/PorcjaFrytek02.jpg`,
    alt: "Porcja Frytek 2"
  }, {
    id: 62,
    src: `${STORAGE_PATH}/PorcjaFrytek03.jpg`,
    alt: "Porcja Frytek 3"
  }, {
    id: 63,
    src: `${STORAGE_PATH}/PorcjaFrytek04.jpg`,
    alt: "Porcja Frytek 4"
  }, {
    id: 64,
    src: `${STORAGE_PATH}/PorcjaFrytek05.jpg`,
    alt: "Porcja Frytek 5"
  }, {
    id: 65,
    src: `${STORAGE_PATH}/PorcjaFrytek06.jpg`,
    alt: "Porcja Frytek 6"
  }, {
    id: 67,
    src: `${STORAGE_PATH}/PorcjaFrytek08.jpg`,
    alt: "Porcja Frytek 8"
  }, {
    id: 68,
    src: `${STORAGE_PATH}/PorcjaFrytek09.jpg`,
    alt: "Porcja Frytek 9"
  }, {
    id: 69,
    src: `${STORAGE_PATH}/PorcjaFrytek10.jpg`,
    alt: "Porcja Frytek 10"
  }, {
    id: 70,
    src: `${STORAGE_PATH}/PorcjaFrytek11.jpg`,
    alt: "Porcja Frytek 11"
  }, {
    id: 71,
    src: `${STORAGE_PATH}/PorcjaFrytek12.jpg`,
    alt: "Porcja Frytek 12"
  }, {
    id: 73,
    src: `${STORAGE_PATH}/PorcjaFrytek14.jpg`,
    alt: "Porcja Frytek 14"
  }, {
    id: 74,
    src: `${STORAGE_PATH}/PorcjaFrytek15.jpg`,
    alt: "Porcja Frytek 15"
  }, {
    id: 75,
    src: `${STORAGE_PATH}/PorcjaFrytek16.jpg`,
    alt: "Porcja Frytek 16"
  }]
}, {
  brand: "PRACOWNIA WYBÓR",
  logo: `${STORAGE_PATH}/PracowniaWyborlogo.png`,
  items: [{
    id: 95,
    src: `${STORAGE_PATH}/PracowniaWybor06.jpg`,
    alt: "Pracownia Wybór 6"
  }, {
    id: 91,
    src: `${STORAGE_PATH}/PracowniaWybor02.jpg`,
    alt: "Pracownia Wybór 2"
  }, {
    id: 94,
    src: `${STORAGE_PATH}/PracowniaWybor05.jpg`,
    alt: "Pracownia Wybór 5"
  }, {
    id: 90,
    src: `${STORAGE_PATH}/PracowniaWybor01.jpg`,
    alt: "Pracownia Wybór 1"
  }, {
    id: 92,
    src: `${STORAGE_PATH}/PracowniaWybor03.jpg`,
    alt: "Pracownia Wybór 3"
  }, {
    id: 93,
    src: `${STORAGE_PATH}/PracowniaWybor04.jpg`,
    alt: "Pracownia Wybór 4"
  }]
}, {
  brand: "POZOSTAŁE PROJEKTY",
  logo: undefined,
  items: [{
    id: 80,
    src: `${STORAGE_PATH}/ProjektyPrywatne01.jpg`,
    alt: "Projekty Prywatne 1"
  }, {
    id: 86,
    src: `${STORAGE_PATH}/ProjektyPrywatne07.jpg`,
    alt: "Projekty Prywatne 7"
  }, {
    id: 82,
    src: `${STORAGE_PATH}/ProjektyPrywatne03.jpg`,
    alt: "Projekty Prywatne 3"
  }, {
    id: 81,
    src: `${STORAGE_PATH}/ProjektyPrywatne02.jpg`,
    alt: "Projekty Prywatne 2"
  }, {
    id: 83,
    src: `${STORAGE_PATH}/ProjektyPrywatne04.jpg`,
    alt: "Projekty Prywatne 4"
  }, {
    id: 84,
    src: `${STORAGE_PATH}/ProjektyPrywatne05.jpg`,
    alt: "Projekty Prywatne 5"
  }, {
    id: 85,
    src: `${STORAGE_PATH}/ProjektyPrywatne06.jpg`,
    alt: "Projekty Prywatne 6"
  }, {
    id: 87,
    src: `${STORAGE_PATH}/ProjektyPrywatne08.jpg`,
    alt: "Projekty Prywatne 8"
  }, {
    id: 88,
    src: `${STORAGE_PATH}/ProjektyPrywatne09.jpg`,
    alt: "Projekty Prywatne 9"
  }, {
    id: 89,
    src: `${STORAGE_PATH}/ProjektyPrywatne10.jpg`,
    alt: "Projekty Prywatne 10"
  }]
}];
const VISIBLE_COUNT = 3;
const PortfolioGrid = () => {
  const [galleryState, setGalleryState] = useState<{
    items: PortfolioItem[];
    initialIndex: number;
  } | null>(null);
  const openGallery = (items: PortfolioItem[], clickedIndex: number) => {
    setGalleryState({
      items,
      initialIndex: clickedIndex
    });
  };

  // Filter out sections with no items
  const activeSections = brandSections.filter(section => section.items.length > 0);
  return <>
      <section className="w-full px-4 md:px-8 pb-16">
        {/* Top Featured Section */}
        {topFeatured.length > 0 && <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl tracking-wider text-center mb-8 opacity-0 animate-fade-in-up">
              WYRÓŻNIONE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {topFeatured.map((item, index) => <div key={item.id} className={`portfolio-image opacity-0 animate-fade-in-up stagger-${index + 1}`} onClick={() => openGallery(topFeatured, index)}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={item.src} alt={item.alt} loading={index < 3 ? "eager" : "lazy"} fetchPriority={index < 3 ? "high" : "auto"} className="w-full h-full object-contain" />
                  </div>
                </div>)}
            </div>
          </div>}

        {/* Brand Sections */}
        {activeSections.map((section, sectionIndex) => {
        const visibleItems = section.items.slice(0, VISIBLE_COUNT);
        const hasMore = section.items.length > VISIBLE_COUNT;
        return <div key={section.brand} className="mb-16 last:mb-0" style={{ contentVisibility: sectionIndex > 1 ? 'auto' : 'visible', containIntrinsicSize: '0 600px' }}>
              <div className="flex items-center justify-center gap-3 mb-8 opacity-0 animate-fade-in-up">
              {section.logo && <img src={section.logo} alt={`${section.brand} logo`} width={80} height={24} loading="lazy" decoding="async" className={`${section.logoSize || 'h-6'} w-auto object-contain`} />}
                {!section.hideText && <h2 className="font-display text-2xl md:text-3xl tracking-wider text-center">
                    {section.brand}
                  </h2>}
                {hasMore && <span className="text-muted-foreground text-sm ml-2">
                    (+{section.items.length - VISIBLE_COUNT})
                  </span>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {visibleItems.map((item, index) => {
              const isAboveFold = sectionIndex === 0 && index < 3;
              const globalIndex = section.items.findIndex(i => i.id === item.id);
              return <div key={item.id} className={`portfolio-image opacity-0 animate-fade-in-up stagger-${sectionIndex * 2 + index + 1} cursor-pointer`} onClick={() => openGallery(section.items, globalIndex)}>
                      <div className="aspect-[4/5] overflow-hidden relative">
                        <img src={item.src} alt={item.alt} width={416} height={520} loading={isAboveFold ? "eager" : "lazy"} fetchPriority={isAboveFold ? "high" : "auto"} decoding={isAboveFold ? "sync" : "async"} className="w-full h-full object-contain" />
                        {hasMore && index === VISIBLE_COUNT - 1 && <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                            <span className="text-foreground font-display text-xl font-serif font-semibold">
                              ZOBACZ WIĘCEJ 
                            </span>
                          </div>}
                      </div>
                    </div>;
            })}
              </div>
            </div>;
      })}
      </section>

      {galleryState && <BrandGalleryLightbox items={galleryState.items} initialIndex={galleryState.initialIndex} onClose={() => setGalleryState(null)} />}
    </>;
};
export default PortfolioGrid;