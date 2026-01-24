import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SeriesCard from '@/components/gallery/SeriesCard';
import mujerXImage from '@/assets/mujer-x.jpg';
import dreamRainImage from '@/assets/dream-rain.jpg';
import doubleSelfImage from '@/assets/double-self.jpg';
import ensayoEnRosaImage from '@/assets/ensayo-en-rosa.jpg';

const Obra: React.FC = () => {
  const { t } = useLanguage();

  const allSeries = [
    {
      slug: 'mujer-x',
      title: 'Mujer X',
      year: '2024',
      description: t('mujerx.short'),
      thumbnailSrc: mujerXImage,
      featured: true,
    },
    {
      slug: 'dream-rain',
      title: t('series.dreamrain'),
      year: t('series.dreamrain.year'),
      description: t('series.dreamrain.text'),
      thumbnailSrc: dreamRainImage,
    },
    {
      slug: 'double-self',
      title: t('series.doubleself'),
      year: t('series.doubleself.year'),
      description: t('series.doubleself.text'),
      thumbnailSrc: doubleSelfImage,
    },
    {
      slug: 'ensayo-en-rosa',
      title: t('series.ensayo'),
      year: t('series.ensayo.year'),
      description: t('series.ensayo.text'),
      thumbnailSrc: ensayoEnRosaImage,
    },
    {
      slug: 'walking-together',
      title: t('series.walking'),
      year: t('series.walking.year'),
      description: t('series.walking.text'),
      thumbnailSrc: doubleSelfImage,
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
