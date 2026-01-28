import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SeriesCard from '@/components/gallery/SeriesCard';
import mujerXImage from '@/assets/mujer-x.jpg';
import doubleSelfImage from '@/assets/double-self.jpg';
import territoriosImage from '@/assets/territorios.jpg';
import paisajesImage from '@/assets/paisajes.jpg';
import dreamRainImage from '@/assets/dream-rain.jpg';

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
      slug: 'territorios',
      title: t('series.territorios'),
      year: t('series.territorios.year'),
      description: t('series.territorios.text'),
      thumbnailSrc: territoriosImage,
    },
    {
      slug: 'autorretrato',
      title: t('series.autorretrato'),
      year: t('series.autorretrato.year'),
      description: t('series.autorretrato.text'),
      thumbnailSrc: doubleSelfImage, // Placeholder
    },
    {
      slug: 'gente',
      title: t('series.gente'),
      year: t('series.gente.year'),
      description: t('series.gente.text'),
      thumbnailSrc: dreamRainImage, // Placeholder
    },
    {
      slug: 'paisajes',
      title: t('series.paisajes'),
      year: t('series.paisajes.year'),
      description: t('series.paisajes.text'),
      thumbnailSrc: paisajesImage,
    },
    {
      slug: 'colaboraciones',
      title: t('series.colaboraciones'),
      year: t('series.colaboraciones.year'),
      description: t('series.colaboraciones.text'),
      thumbnailSrc: dreamRainImage, // Placeholder
    },
    {
      slug: 'olivias-world',
      title: t('series.olivias'),
      year: t('series.olivias.year'),
      description: t('series.olivias.text'),
      thumbnailSrc: doubleSelfImage, // Placeholder
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
