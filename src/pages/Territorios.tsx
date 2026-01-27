import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/gallery/ImageGallery';

// Estados de Agua images
import estadosAgua1 from '@/assets/territorios/estados-de-agua-1.jpg';
import estadosAgua2 from '@/assets/territorios/estados-de-agua-2.jpg';
import estadosAgua3 from '@/assets/territorios/estados-de-agua-3.jpg';
import estadosAgua4 from '@/assets/territorios/estados-de-agua-4.jpg';
import estadosAgua5 from '@/assets/territorios/estados-de-agua-5.jpg';

interface Subseries {
  slug: string;
  title: string;
  images: { src: string; alt: string; caption?: string }[];
}

const Territorios: React.FC = () => {
  const { t } = useLanguage();
  const [expandedSubseries, setExpandedSubseries] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'sequence' | 'grid'>('sequence');

  const subseries: Subseries[] = [
    {
      slug: 'los-que-permanecen',
      title: 'Los que permanecen',
      images: [],
    },
    {
      slug: 'estados-de-agua',
      title: 'Estados de agua',
      images: [
        { src: estadosAgua1, alt: 'Estados de agua I', caption: 'I' },
        { src: estadosAgua2, alt: 'Estados de agua II', caption: 'II' },
        { src: estadosAgua3, alt: 'Estados de agua III', caption: 'III' },
        { src: estadosAgua4, alt: 'Estados de agua IV', caption: 'IV' },
        { src: estadosAgua5, alt: 'Estados de agua V', caption: 'V' },
      ],
    },
    {
      slug: 'capas-de-ausencia',
      title: 'Capas de ausencia',
      images: [],
    },
    {
      slug: 'boys-dont-cry',
      title: "Boys don't cry",
      images: [],
    },
    {
      slug: 'pool-story',
      title: 'Pool Story',
      images: [],
    },
    {
      slug: 'dia-en-titulcia',
      title: 'Día en Titulcia',
      images: [],
    },
    {
      slug: 'noche-de-procesion',
      title: 'Noche de procesión',
      images: [],
    },
    {
      slug: 'espera',
      title: 'Espera',
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
          <h1 className="section-title mb-4">{t('series.territorios')}</h1>
          <p className="body-curatorial">{t('series.territorios.text')}</p>
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

export default Territorios;
