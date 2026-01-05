import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
}

interface BrandGalleryLightboxProps {
  items: PortfolioItem[];
  initialIndex: number;
  onClose: () => void;
}

const BrandGalleryLightbox = ({ items, initialIndex, onClose }: BrandGalleryLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, goNext, goPrev]);

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors duration-300 z-10"
        aria-label="Zamknij"
      >
        <X size={24} strokeWidth={1} />
      </button>

      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 md:left-8 text-muted-foreground hover:text-foreground transition-colors duration-300 z-10"
            aria-label="Poprzednie zdjęcie"
          >
            <ChevronLeft size={40} strokeWidth={1} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 md:right-8 text-muted-foreground hover:text-foreground transition-colors duration-300 z-10"
            aria-label="Następne zdjęcie"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>
        </>
      )}

      <div
        className="max-w-[90vw] max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.src}
          alt={currentItem.alt}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </div>

      {items.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
          {currentIndex + 1} / {items.length}
        </div>
      )}
    </div>
  );
};

export default BrandGalleryLightbox;
