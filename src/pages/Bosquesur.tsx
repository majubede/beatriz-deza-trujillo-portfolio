import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/gallery/ImageGallery';

import bosque1 from '@/assets/bosquesur/bosquesur-1.jpg';
import bosque2 from '@/assets/bosquesur/bosquesur-2.jpg';
import bosque3 from '@/assets/bosquesur/bosquesur-3.jpg';
import bosque4 from '@/assets/bosquesur/bosquesur-4.jpg';
import bosque5 from '@/assets/bosquesur/bosquesur-5.jpg';
import bosque6 from '@/assets/bosquesur/bosquesur-6.jpg';

const Bosquesur: React.FC = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'sequence' | 'grid'>('grid');

  // Curated sequence: opening canopy → path/invitation → clearing →
  // intimate trees → fragile detail → human intrusion (closure)
  const galleryImages = [
    { src: bosque1, alt: 'Bosquesur I', caption: 'I' },
    { src: bosque4, alt: 'Bosquesur II', caption: 'II' },
    { src: bosque2, alt: 'Bosquesur III', caption: 'III' },
    { src: bosque3, alt: 'Bosquesur IV', caption: 'IV' },
    { src: bosque6, alt: 'Bosquesur V', caption: 'V' },
    { src: bosque5, alt: 'Bosquesur VI', caption: 'VI' },
  ];

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        <header className="max-w-3xl mb-12 fade-in">
          <h1 className="section-title mb-4">{t('bosquesur.title')}</h1>
          <p className="body-curatorial mb-4">{t('bosquesur.short')}</p>
          <p className="body-curatorial whitespace-pre-line">{t('bosquesur.long')}</p>
        </header>

        <div className="flex items-center gap-4 mb-8 fade-in">
          <button
            onClick={() => setViewMode('grid')}
            className={`text-sm tracking-wide transition-colors duration-300 ${
              viewMode === 'grid' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('mujerx.view.grid')}
          </button>
          <span className="text-muted-foreground/30">|</span>
          <button
            onClick={() => setViewMode('sequence')}
            className={`text-sm tracking-wide transition-colors duration-300 ${
              viewMode === 'sequence' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('mujerx.view.sequence')}
          </button>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <ImageGallery images={galleryImages} mode={viewMode} showCaptions />
        </div>

        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-border text-center fade-in">
          <Link to="/contacto?subject=prints" className="btn-gallery-subtle">
            {t('mujerx.cta.prints')} →
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default Bosquesur;
