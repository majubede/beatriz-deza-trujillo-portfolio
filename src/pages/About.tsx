import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="section-title mb-10 fade-in">{t('about.title')}</h1>

          {/* Short Bio */}
          <section className="mb-12 fade-in-up">
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-foreground">
              {t('about.bio.short')}
            </p>
          </section>

          {/* Long Bio */}
          <section className="mb-12 fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('about.bio.long').split('\n\n').map((paragraph, index) => (
              <p key={index} className="body-curatorial mb-4">
                {paragraph}
              </p>
            ))}
          </section>

          {/* Artist Statement */}
          <section className="mb-12 pt-8 border-t border-border fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-serif text-xl mb-6">{t('about.statement.title')}</h2>
            {t('about.statement').split('\n\n').map((paragraph, index) => (
              <p key={index} className="body-curatorial mb-4">
                {paragraph}
              </p>
            ))}
          </section>

          {/* Credentials */}
          <section className="pt-8 border-t border-border fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-sm text-muted-foreground italic">
              {t('about.credentials')}
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default About;
