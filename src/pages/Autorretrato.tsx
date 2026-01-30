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

interface Subseries {
  slug: string;
  title: string;
  images: { src: string; alt: string; caption?: string }[];
}

const Autorretrato: React.FC = () => {
  const { t } = useLanguage();
  const [expandedSubseries, setExpandedSubseries] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'sequence' | 'grid'>('sequence');

  const subseries: Subseries[] = [
    {
      slug: 'autorretrato-main',
      title: 'Autorretrato',
      images: [
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
      ],
    },
    {
      slug: 'geografias-fugaces',
      title: 'Geografías fugaces',
      images: [],
    },
  ];

  const toggleSubseries = (slug: string) => {
    setExpandedSubseries(expandedSubseries === slug ? null : slug);
  };

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="max-w-3xl mb-12 fade-in">
          <h1 className="section-title mb-4">{t('series.autorretrato')}</h1>
          <p className="body-curatorial">{t('series.autorretrato.text')}</p>
        </header>

        {/* Subseries List */}
        <div className="max-w-4xl mx-auto space-y-4 fade-in-up">
          {subseries.map((sub) => (
            <div key={sub.slug} className="border-b border-border pb-4">
              <button
                onClick={() => toggleSubseries(sub.slug)}
                className="w-full flex items-center justify-between py-3 text-left group"
              >
                <h2 className="font-serif text-xl md:text-2xl group-hover:opacity-70 transition-opacity duration-300">
                  {sub.title}
                </h2>
                <span className="text-muted-foreground text-sm">
                  {sub.images.length > 0 ? `${sub.images.length} obras` : 'Próximamente'}
                </span>
              </button>

              {/* Expanded Gallery */}
              {expandedSubseries === sub.slug && sub.images.length > 0 && (
                <div className="mt-6 mb-8 fade-in">
                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-4 mb-6">
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

                  <ImageGallery images={sub.images} mode={viewMode} showCaptions />
                </div>
              )}

              {expandedSubseries === sub.slug && sub.images.length === 0 && (
                <div className="mt-4 mb-6 py-8 text-center text-muted-foreground fade-in">
                  <p className="text-sm italic">Contenido próximamente</p>
                </div>
              )}
            </div>
          ))}
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
