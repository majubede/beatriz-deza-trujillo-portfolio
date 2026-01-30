import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/gallery/ImageGallery';

// Autorretrato images (ordered: Manos Silencio, Primavera, Verano, Otoño, Invierno, rest)
import manosSilencio from '@/assets/autorretrato/manos-silencio.jpg';
import primavera from '@/assets/autorretrato/primavera.jpg';
import verano from '@/assets/autorretrato/verano.jpg';
import otono from '@/assets/autorretrato/otono.jpg';
import invierno from '@/assets/autorretrato/invierno.jpg';
import cestaPlanta from '@/assets/autorretrato/cesta-planta.jpg';
import godSaveQueen from '@/assets/autorretrato/god-save-queen.jpg';
import lagrimasFlores from '@/assets/autorretrato/lagrimas-flores.jpg';
import lampara from '@/assets/autorretrato/lampara.jpg';
import oukaLelee from '@/assets/autorretrato/ouka-lelee.jpg';

const Autorretrato: React.FC = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'sequence' | 'grid'>('sequence');

  const images = [
    { src: manosSilencio, alt: 'Manos silencio', caption: 'Manos silencio' },
    { src: primavera, alt: 'Primavera', caption: 'Primavera' },
    { src: verano, alt: 'Verano', caption: 'Verano' },
    { src: otono, alt: 'Otoño', caption: 'Otoño' },
    { src: invierno, alt: 'Invierno', caption: 'Invierno' },
    { src: cestaPlanta, alt: 'Cesta planta colgante', caption: 'Cesta planta colgante' },
    { src: godSaveQueen, alt: 'God save the Queen', caption: 'God save the Queen' },
    { src: lagrimasFlores, alt: 'Lágrimas y flores', caption: 'Lágrimas y flores' },
    { src: lampara, alt: 'Lámpara', caption: 'Lámpara' },
    { src: oukaLelee, alt: 'Ouka Leele', caption: 'Ouka Leele' },
  ];

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="max-w-3xl mb-12 fade-in">
          <h1 className="section-title mb-4">{t('series.autorretrato')}</h1>
          <p className="body-curatorial">{t('series.autorretrato.text')}</p>
        </header>

        {/* View Mode Toggle */}
        <div className="max-w-4xl mx-auto flex items-center gap-4 mb-8 fade-in">
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
          <ImageGallery images={images} mode={viewMode} showCaptions />
        </div>

        {/* Back to Obra */}
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-border text-center fade-in">
          <Link
            to="/obra"
            className="btn-gallery-subtle"
          >
            ← Volver a Obra
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default Autorretrato;
