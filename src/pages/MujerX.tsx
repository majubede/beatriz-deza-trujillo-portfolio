import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/gallery/ImageGallery';

const MujerX: React.FC = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'sequence' | 'grid'>('sequence');

  // Placeholder images for Mujer X series
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=85',
      alt: 'Mujer X - Portrait I',
      caption: 'Untitled I, 2024',
    },
    {
      src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=85',
      alt: 'Mujer X - Portrait II',
      caption: 'Untitled II, 2024',
    },
    {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=85',
      alt: 'Mujer X - Portrait III',
      caption: 'Untitled III, 2024',
    },
    {
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=85',
      alt: 'Mujer X - Portrait IV',
      caption: 'Untitled IV, 2024',
    },
    {
      src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=85',
      alt: 'Mujer X - Portrait V',
      caption: 'Untitled V, 2024',
    },
    {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=85',
      alt: 'Mujer X - Portrait VI',
      caption: 'Untitled VI, 2024',
    },
  ];

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="max-w-3xl mb-12 fade-in">
          <h1 className="section-title mb-2">{t('mujerx.title')}</h1>
          <p className="text-muted-foreground mb-6">{t('mujerx.year')}</p>
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
