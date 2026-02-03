import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Exhibition images
import expoCameraWorksSemana from '@/assets/cv/expo-cameraworks-semanasanta.jpg';
import expoHotelIbis from '@/assets/cv/expo-hotel-ibis.jpg';
import expoCameraWorksAutorretrato from '@/assets/cv/expo-cameraworks-autorretrato.jpg';
import expoAutorretratoPandemia from '@/assets/cv/expo-autorretrato-pandemia.jpg';
import expoArles from '@/assets/cv/expo-arles.jpg';
import expoRecorridosUrbanos from '@/assets/cv/expo-recorridos-urbanos.jpg';

interface CVItem {
  year: string;
  title: string;
  entity?: string;
}

interface ExhibitionImage {
  src: string;
  alt: string;
}

const CV: React.FC = () => {
  const { t, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const awards: CVItem[] = [
    { year: '2025', title: language === 'es' ? 'Finalista — #RecorridosUrbanosPHE25 (PhotoEspaña + Oneshot Hotels)' : 'Finalist — #RecorridosUrbanosPHE25 (PhotoEspaña + Oneshot Hotels)' },
    { year: '2025', title: language === 'es' ? 'Obra seleccionada — Premio de Retrato Carmelo Tartón (RSFZ)' : 'Selected Work — Carmelo Tartón Portrait Award (RSFZ)' },
    { year: '2025', title: language === 'es' ? '1º Premio — #mipostaldelverano (Zenda Libros + Iberdrola)' : '1st Prize — #mipostaldelverano (Zenda Libros + Iberdrola)' },
    { year: '2024', title: language === 'es' ? '3º Premio — "Carmen Alborch" (Ayto. Fuenlabrada + Asoc. Pandora)' : '3rd Prize — "Carmen Alborch" (Fuenlabrada City Council + Pandora Association)' },
  ];

  const exhibitions: ExhibitionImage[] = [
    { src: expoCameraWorksSemana, alt: 'Camera Works Semana Santa' },
    { src: expoHotelIbis, alt: 'Hotel Ibis' },
    { src: expoCameraWorksAutorretrato, alt: 'Camera Works Autorretrato' },
    { src: expoAutorretratoPandemia, alt: 'Autorretrato en tiempos de pandemia' },
    { src: expoArles, alt: 'Art-Icon Arles' },
    { src: expoRecorridosUrbanos, alt: 'Recorridos Urbanos PHE25' },
  ];

  const publications: CVItem[] = [
    { year: '2026', title: language === 'es' ? 'Portada — La grieta reina' : 'Cover — La grieta reina' },
    { year: '2025', title: 'Desphotomag TopBest Magazine — Q3 2025' },
    { year: '2023', title: language === 'es' ? 'Portada — Viento sin norte' : 'Cover — Viento sin norte' },
  ];

  const specialProjects: CVItem[] = [
    { year: '2025', title: language === 'es' ? 'Obra aportada para subasta — Pazarte / Zapaterías Papparazzo' : 'Artwork contributed to auction — Pazarte / Zapaterías Papparazzo' },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? exhibitions.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === exhibitions.length - 1 ? 0 : prev + 1));
  };

  const CVSection: React.FC<{ title: string; items: CVItem[] }> = ({ title, items }) => (
    <section className="mb-12">
      <h2 className="font-serif text-xl mb-6 pb-2 border-b border-border">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-4">
            <span className="text-muted-foreground text-sm w-12 flex-shrink-0">{item.year}</span>
            <span className="text-foreground">{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );

  const ExhibitionsSection: React.FC = () => (
    <section className="mb-12">
      <h2 className="font-serif text-xl mb-6 pb-2 border-b border-border">{t('cv.exhibitions')}</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {exhibitions.map((exhibition, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="aspect-[3/4] overflow-hidden bg-muted relative group cursor-pointer"
          >
            <img
              src={exhibition.src}
              alt={exhibition.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </section>
  );

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-title mb-10 fade-in">{t('cv.title')}</h1>

          <div className="fade-in-up">
            <CVSection title={t('cv.awards')} items={awards} />
            <ExhibitionsSection />
            <CVSection title={t('cv.publications')} items={publications} />
            <CVSection title={t('cv.projects')} items={specialProjects} />
          </div>
        </div>
      </article>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 gallery-overlay flex items-center justify-center fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {exhibitions.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/60 hover:text-white transition-colors hidden md:block"
                aria-label="Previous image"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/60 hover:text-white transition-colors hidden md:block"
                aria-label="Next image"
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}

          <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
            <img
              src={exhibitions[currentIndex].src}
              alt={exhibitions[currentIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white/80 text-sm mb-2">{exhibitions[currentIndex].alt}</p>
            <p className="text-white/50 text-xs tracking-widest">
              {currentIndex + 1} / {exhibitions.length}
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CV;
