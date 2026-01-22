import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SeriesCard from '@/components/gallery/SeriesCard';

const Obra: React.FC = () => {
  const { t } = useLanguage();

  const allSeries = [
    {
      slug: 'mujer-x',
      title: 'Mujer X',
      year: '2024',
      description: t('mujerx.short'),
      thumbnailSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
      featured: true,
    },
    {
      slug: 'dream-rain',
      title: t('series.dreamrain'),
      year: t('series.dreamrain.year'),
      description: t('series.dreamrain.text'),
      thumbnailSrc: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
    },
    {
      slug: 'double-self',
      title: t('series.doubleself'),
      year: t('series.doubleself.year'),
      description: t('series.doubleself.text'),
      thumbnailSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
    },
    {
      slug: 'ensayo-en-rosa',
      title: t('series.ensayo'),
      year: t('series.ensayo.year'),
      description: t('series.ensayo.text'),
      thumbnailSrc: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80',
    },
    {
      slug: 'walking-together',
      title: t('series.walking'),
      year: t('series.walking.year'),
      description: t('series.walking.text'),
      thumbnailSrc: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80',
    },
  ];

  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mb-12 fade-in">
          <h1 className="section-title mb-4">{t('obra.title')}</h1>
          <p className="body-curatorial">{t('obra.intro')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 fade-in-up">
          {allSeries.map((series) => (
            <SeriesCard key={series.slug} {...series} featured={false} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Obra;
