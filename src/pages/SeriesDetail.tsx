import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/gallery/ImageGallery';

interface SeriesData {
  titleKey: string;
  yearKey: string;
  textKey: string;
  images: { src: string; alt: string; caption?: string }[];
}

const seriesData: Record<string, SeriesData> = {
  'dream-rain': {
    titleKey: 'series.dreamrain',
    yearKey: 'series.dreamrain.year',
    textKey: 'series.dreamrain.text',
    images: [
      { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=85', alt: 'Dream Rain I', caption: 'Untitled I, 2024' },
      { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=85', alt: 'Dream Rain II', caption: 'Untitled II, 2024' },
      { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=85', alt: 'Dream Rain III', caption: 'Untitled III, 2024' },
    ],
  },
  'double-self': {
    titleKey: 'series.doubleself',
    yearKey: 'series.doubleself.year',
    textKey: 'series.doubleself.text',
    images: [
      { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=85', alt: 'Double Self I', caption: 'Untitled I, 2023' },
      { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=85', alt: 'Double Self II', caption: 'Untitled II, 2023' },
    ],
  },
  'ensayo-en-rosa': {
    titleKey: 'series.ensayo',
    yearKey: 'series.ensayo.year',
    textKey: 'series.ensayo.text',
    images: [
      { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=85', alt: 'Ensayo en rosa I', caption: 'Untitled I, 2023' },
      { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=85', alt: 'Ensayo en rosa II', caption: 'Untitled II, 2023' },
    ],
  },
  'walking-together': {
    titleKey: 'series.walking',
    yearKey: 'series.walking.year',
    textKey: 'series.walking.text',
    images: [
      { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=85', alt: 'Walking Together', caption: 'Walking Together, 2024' },
    ],
  },
};

const SeriesDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'sequence' | 'grid'>('sequence');

  if (!slug || !seriesData[slug]) {
    return <Navigate to="/obra" replace />;
  }

  const series = seriesData[slug];

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="max-w-3xl mb-12 fade-in">
          <h1 className="section-title mb-2">{t(series.titleKey)}</h1>
          <p className="text-muted-foreground mb-6">{t(series.yearKey)}</p>
          <p className="body-curatorial">{t(series.textKey)}</p>
        </header>

        {/* View Mode Toggle */}
        {series.images.length > 1 && (
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
        )}

        {/* Gallery */}
        <div className="max-w-4xl mx-auto fade-in-up">
          <ImageGallery images={series.images} mode={viewMode} showCaptions />
        </div>
      </article>
    </Layout>
  );
};

export default SeriesDetail;
