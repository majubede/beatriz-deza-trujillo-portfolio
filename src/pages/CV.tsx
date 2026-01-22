import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';

interface CVItem {
  year: string;
  title: string;
  entity?: string;
}

const CV: React.FC = () => {
  const { t, language } = useLanguage();

  const awards: CVItem[] = [
    { year: '2025', title: language === 'es' ? 'Finalista — #RecorridosUrbanosPHE25 (PhotoEspaña + Oneshot Hotels)' : 'Finalist — #RecorridosUrbanosPHE25 (PhotoEspaña + Oneshot Hotels)' },
    { year: '2025', title: language === 'es' ? 'Obra seleccionada — Premio de Retrato Carmelo Tartón (RSFZ)' : 'Selected Work — Carmelo Tartón Portrait Award (RSFZ)' },
    { year: '2025', title: language === 'es' ? '1º Premio — #mipostaldelverano (Zenda Libros + Iberdrola)' : '1st Prize — #mipostaldelverano (Zenda Libros + Iberdrola)' },
    { year: '2024', title: language === 'es' ? '3º Premio — "Carmen Alborch" (Ayto. Fuenlabrada + Asoc. Pandora)' : '3rd Prize — "Carmen Alborch" (Fuenlabrada City Council + Pandora Association)' },
  ];

  const publications: CVItem[] = [
    { year: '2026', title: language === 'es' ? 'Portada — La grieta reina' : 'Cover — La grieta reina' },
    { year: '2023', title: language === 'es' ? 'Portada — Viento sin norte' : 'Cover — Viento sin norte' },
  ];

  const specialProjects: CVItem[] = [
    { year: '2025', title: language === 'es' ? 'Obra aportada para subasta — Pazarte / Zapaterías Papparazzo' : 'Artwork contributed to auction — Pazarte / Zapaterías Papparazzo' },
  ];

  const CVSection: React.FC<{ title: string; items: CVItem[] }> = ({ title, items }) => (
    <section className="mb-12">
      <h2 className="font-serif text-xl mb-6 pb-2 border-b border-border">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-4">
            <span className="text-muted-foreground text-sm w-12 flex-shrink-0">{item.year}</span>
            <span className="text-foreground">{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-title mb-10 fade-in">{t('cv.title')}</h1>

          <div className="fade-in-up">
            <CVSection title={t('cv.awards')} items={awards} />
            <CVSection title={t('cv.publications')} items={publications} />
            <CVSection title={t('cv.projects')} items={specialProjects} />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CV;
