import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SeriesCard from '@/components/gallery/SeriesCard';
import heroImage from '@/assets/hero-image.jpg';
import mujerXImage from '@/assets/mujer-x.jpg';
import territoriosImage from '@/assets/territorios.jpg';
import autorretratoCoverImage from '@/assets/autorretrato-cover.jpg';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const featuredSeries = [
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
      thumbnailSrc: autorretratoCoverImage,
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Beatriz Deza Trujillo - Conceptual Portrait" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 fade-in-up">
          <h1 className="hero-title mb-6 break-words text-foreground/90" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            {t('home.hero.title')}
          </h1>
          <p className="hero-subtitle max-w-2xl mx-auto mb-10 whitespace-pre-line">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/obra" className="btn-gallery-primary">
              {t('home.cta.work')}
            </Link>
            <Link to="/mujer-x" className="btn-gallery">
              {t('home.cta.mujerx')}
            </Link>
            <Link to="/contacto" className="btn-gallery-subtle">
              {t('home.cta.contact')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Series Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="section-title mb-10 text-center fade-in">
          {t('home.featured')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 fade-in-up">
          {featuredSeries.map((series, index) => (
            <SeriesCard
              key={series.slug}
              {...series}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
