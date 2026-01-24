import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/gallery/ImageGallery';

// Import Mujer X series images
import serImage from '@/assets/mujerx/ser.jpg';
import fragilImage from '@/assets/mujerx/fragil.jpg';
import danaImage from '@/assets/mujerx/dana.jpg';
import narcYYoImage from '@/assets/mujerx/narciso-y-yo.jpg';
import suspendedImage from '@/assets/mujerx/suspended-germination.jpg';
import deMiParaMiImage from '@/assets/mujerx/de-mi-para-mi.jpg';
import hopeImage from '@/assets/mujerx/hope.jpg';
import iHateMondaysImage from '@/assets/mujerx/i-hate-mondays.jpg';

const MujerX: React.FC = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'sequence' | 'grid'>('sequence');

  // Curated order: starting strong with identity themes, building through vulnerability
  const galleryImages = [
    {
      src: serImage,
      alt: 'Mujer X - Ser',
      caption: 'Ser',
    },
    {
      src: fragilImage,
      alt: 'Mujer X - Frágil',
      caption: 'Frágil',
    },
    {
      src: danaImage,
      alt: 'Mujer X - Dana',
      caption: 'Dana',
    },
    {
      src: narcYYoImage,
      alt: 'Mujer X - Narciso y yo',
      caption: 'Narciso y yo',
    },
    {
      src: suspendedImage,
      alt: 'Mujer X - Suspended Germination',
      caption: 'Suspended Germination',
    },
    {
      src: deMiParaMiImage,
      alt: 'Mujer X - De mí para mí',
      caption: 'De mí para mí',
    },
    {
      src: hopeImage,
      alt: 'Mujer X - Hope',
      caption: 'Hope',
    },
    {
      src: iHateMondaysImage,
      alt: 'Mujer X - I Hate Mondays',
      caption: 'I Hate Mondays',
    },
  ];

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="max-w-3xl mb-12 fade-in">
          <h1 className="section-title mb-4">{t('mujerx.title')}</h1>
          <p className="body-curatorial mb-4">{t('mujerx.short')}</p>
          <p className="body-curatorial">{t('mujerx.long')}</p>
        </header>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-4 mb-8 fade-in">
          <button
            onClick={() => setViewMode('sequence')}
            className={`text-sm tracking-wide transition-colors duration-300 ${
              viewMode === 'sequence' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('mujerx.view.sequence')}
          </button>
          <span className="text-muted-foreground/30">|</span>
          <button
            onClick={() => setViewMode('grid')}
            className={`text-sm tracking-wide transition-colors duration-300 ${
              viewMode === 'grid' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('mujerx.view.grid')}
          </button>
        </div>

        {/* Gallery */}
        <div className="max-w-4xl mx-auto fade-in-up">
          <ImageGallery images={galleryImages} mode={viewMode} showCaptions />
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-border text-center fade-in">
          <Link
            to="/contacto?subject=prints"
            className="btn-gallery-subtle"
          >
            {t('mujerx.cta.prints')} →
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default MujerX;
