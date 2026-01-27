import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/gallery/ImageGallery';
import dreamRainImage from '@/assets/dream-rain.jpg';
import doubleSelfImage from '@/assets/double-self.jpg';
import ensayoEnRosaImage from '@/assets/ensayo-en-rosa.jpg';
import paisajesImage from '@/assets/paisajes.jpg';
import walkingTogetherImage from '@/assets/walking-together.jpg';

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
      { src: dreamRainImage, alt: 'Dream Rain I', caption: 'Untitled I, 2024' },
    ],
  },
  'double-self': {
    titleKey: 'series.doubleself',
    yearKey: 'series.doubleself.year',
    textKey: 'series.doubleself.text',
    images: [
      { src: doubleSelfImage, alt: 'Double Self I', caption: 'Untitled I, 2023' },
    ],
  },
  'ensayo-en-rosa': {
    titleKey: 'series.ensayo',
    yearKey: 'series.ensayo.year',
    textKey: 'series.ensayo.text',
    images: [
      { src: ensayoEnRosaImage, alt: 'Ensayo en rosa I', caption: 'Untitled I, 2023' },
    ],
  },
  'walking-together': {
    titleKey: 'series.walking',
    yearKey: 'series.walking.year',
    textKey: 'series.walking.text',
    images: [
      { src: walkingTogetherImage, alt: 'Walking Together', caption: 'Walking Together' },
    ],
  },
  'paisajes': {
    titleKey: 'series.paisajes',
    yearKey: 'series.paisajes.year',
    textKey: 'series.paisajes.text',
    images: [
      { src: paisajesImage, alt: 'Paisajes I', caption: 'Untitled I, 2024' },
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
          <h1 className="section-title mb-4">{t(series.titleKey)}</h1>
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
