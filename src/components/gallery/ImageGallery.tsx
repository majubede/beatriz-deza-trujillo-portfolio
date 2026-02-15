import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  mode: 'sequence' | 'grid';
  showCaptions?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, mode, showCaptions = false }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext]);

  const handleImageLoad = (index: number) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };

  if (mode === 'grid') {
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="aspect-square overflow-hidden bg-muted relative group"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                className={`w-full h-full object-cover gallery-image transition-transform duration-500 group-hover:scale-105 ${
                  loaded[index] ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {!loaded[index] && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
            </button>
          ))}
        </div>
        <Lightbox
          isOpen={lightboxOpen}
          images={images}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
          showCaptions={showCaptions}
        />
      </>
    );
  }

  // Sequence mode
  return (
    <>
      <div className="space-y-8 md:space-y-12">
        {images.map((image, index) => (
          <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <button
              onClick={() => openLightbox(index)}
              className="w-full block relative bg-muted overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                className={`w-full h-auto gallery-image ${
                  loaded[index] ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {!loaded[index] && (
                <div className="absolute inset-0 bg-muted animate-pulse aspect-[4/3]" />
              )}
            </button>
            {showCaptions && image.caption && (
              <p className="caption-text mt-3 text-center">{image.caption}</p>
            )}
          </div>
        ))}
      </div>
      <Lightbox
        isOpen={lightboxOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
        showCaptions={showCaptions}
      />
    </>
  );
};

interface LightboxProps {
  isOpen: boolean;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  showCaptions?: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  showCaptions,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) onNext();
    if (isRightSwipe) onPrevious();
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  const lightbox = (
    <div
      className="fixed inset-0 z-50 gallery-overlay fade-in"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-[calc(env(safe-area-inset-top)+1rem)] z-20 p-2 text-foreground/60 hover:text-foreground transition-colors"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-foreground/40 hover:text-foreground transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={onNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-foreground/40 hover:text-foreground transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </>
      )}

      {/* Image container - fills available space, no scroll */}
      <div className="absolute inset-0 z-0 flex items-center justify-center px-12 md:px-20" style={{ top: '3.5rem', bottom: '3rem' }}>
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Caption and counter */}
      <div className="absolute left-0 right-0 text-center z-20 bottom-[calc(env(safe-area-inset-bottom)+1rem)]">
        {showCaptions && currentImage.caption && (
          <p className="text-foreground/70 text-sm mb-2">{currentImage.caption}</p>
        )}
        <p className="text-foreground/40 text-xs tracking-widest">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );

  // Render as a portal to avoid layout/transform offsets from page containers
  if (typeof document === 'undefined') return lightbox;
  return createPortal(lightbox, document.body);
};

export default ImageGallery;
