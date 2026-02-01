import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/gallery/ImageGallery';

// Los que permanecen images (curated order: exterior → interior → portraits/memory)
import lqpCalle from '@/assets/territorios/lqp-01-calle.jpg';
import lqpPajaros from '@/assets/territorios/lqp-02-pajaros.jpg';
import lqpRosas from '@/assets/territorios/lqp-03-rosas.jpg';
import lqpMesaCamilla from '@/assets/territorios/lqp-04-mesacamilla.jpg';
import lqpBodegon from '@/assets/territorios/lqp-05-bodegon.jpg';
import lqpOliviaBano from '@/assets/territorios/lqp-06-olivia-bano.jpg';
import lqpOliviaVentana from '@/assets/territorios/lqp-07-olivia-ventana.jpg';
import lqpMario from '@/assets/territorios/lqp-08-mario.jpg';
import lqpSaraOlivia from '@/assets/territorios/lqp-09-sara-olivia.jpg';

// Estados de Agua images (correct order 1-6)
import estadosAgua1 from '@/assets/territorios/estados-de-agua-new-1.jpg';
import estadosAgua2 from '@/assets/territorios/estados-de-agua-new-2.jpg';
import estadosAgua3 from '@/assets/territorios/estados-de-agua-new-3.jpg';
import estadosAgua4 from '@/assets/territorios/estados-de-agua-new-4.jpg';
import estadosAgua5 from '@/assets/territorios/estados-de-agua-new-5.jpg';
import estadosAgua6 from '@/assets/territorios/estados-de-agua-new-6.jpg';

// Boys Don't Cry images
import boysDontCry1 from '@/assets/territorios/boys-dont-cry-1.jpg';
import boysDontCry2 from '@/assets/territorios/boys-dont-cry-2.jpg';
import boysDontCry3 from '@/assets/territorios/boys-dont-cry-3.jpg';
import boysDontCry4 from '@/assets/territorios/boys-dont-cry-4.jpg';
import boysDontCry5 from '@/assets/territorios/boys-dont-cry-5.jpg';

// Noche de procesión images
import procesion01 from '@/assets/territorios/procesion-01.jpg';
import procesion02 from '@/assets/territorios/procesion-02.jpg';
import procesion03 from '@/assets/territorios/procesion-03.jpg';
import procesion04 from '@/assets/territorios/procesion-04.jpg';
import procesion05 from '@/assets/territorios/procesion-05.jpg';
import procesion06 from '@/assets/territorios/procesion-06.jpg';
import procesion07 from '@/assets/territorios/procesion-07.jpg';
import procesion08 from '@/assets/territorios/procesion-08.jpg';
import procesion09 from '@/assets/territorios/procesion-09.jpg';
import procesion10 from '@/assets/territorios/procesion-10.jpg';
import procesion11 from '@/assets/territorios/procesion-11.jpg';
import procesion12 from '@/assets/territorios/procesion-12.jpg';
import procesion13 from '@/assets/territorios/procesion-13.jpg';
import procesion14 from '@/assets/territorios/procesion-14.jpg';
import procesion15 from '@/assets/territorios/procesion-15.jpg';
import procesion16 from '@/assets/territorios/procesion-16.jpg';
import procesion17 from '@/assets/territorios/procesion-17.jpg';

// Capas de ausencia images
import capasAusencia1 from '@/assets/territorios/capas-ausencia-1.jpg';
import capasAusencia2 from '@/assets/territorios/capas-ausencia-2.jpg';
import capasAusencia3 from '@/assets/territorios/capas-ausencia-3.jpg';
import capasAusencia4 from '@/assets/territorios/capas-ausencia-4.jpg';
import capasAusencia5 from '@/assets/territorios/capas-ausencia-5.jpg';

// Pool Story images
import poolStory1 from '@/assets/territorios/pool-story-1.jpg';
import poolStory2 from '@/assets/territorios/pool-story-2.jpg';
import poolStory3 from '@/assets/territorios/pool-story-3.jpg';
import poolStory4 from '@/assets/territorios/pool-story-4.jpg';
import poolStory5 from '@/assets/territorios/pool-story-5.jpg';
import poolStory6 from '@/assets/territorios/pool-story-6.jpg';
import poolStory7 from '@/assets/territorios/pool-story-7.jpg';

// Geografías fugaces images
import geografiasFugaces1 from '@/assets/territorios/geografias-fugaces-1.jpg';
import geografiasFugaces2 from '@/assets/territorios/geografias-fugaces-2.jpg';
import geografiasFugaces3 from '@/assets/territorios/geografias-fugaces-3.jpg';
import geografiasFugaces4 from '@/assets/territorios/geografias-fugaces-4.jpg';
import geografiasFugaces5 from '@/assets/territorios/geografias-fugaces-5.jpg';

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
      images: [
        { src: lqpCalle, alt: 'Calle principal' },
        { src: lqpPajaros, alt: 'Pared con pájaros' },
        { src: lqpRosas, alt: 'Rosas' },
        { src: lqpMesaCamilla, alt: 'Mesa camilla' },
        { src: lqpBodegon, alt: 'Bodegón cocina' },
        { src: lqpOliviaBano, alt: 'Olivia en el baño' },
        { src: lqpOliviaVentana, alt: 'Olivia ventana' },
        { src: lqpMario, alt: 'Mario' },
        { src: lqpSaraOlivia, alt: 'Sara y Olivia' },
      ],
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
        { src: estadosAgua6, alt: 'Estados de agua VI', caption: 'VI' },
      ],
    },
    {
      slug: 'capas-de-ausencia',
      title: 'Capas de ausencia',
      images: [
        { src: capasAusencia1, alt: 'Capas de ausencia I', caption: 'I' },
        { src: capasAusencia2, alt: 'Capas de ausencia II', caption: 'II' },
        { src: capasAusencia3, alt: 'Capas de ausencia III', caption: 'III' },
        { src: capasAusencia4, alt: 'Capas de ausencia IV', caption: 'IV' },
        { src: capasAusencia5, alt: 'Capas de ausencia V', caption: 'V' },
      ],
    },
    {
      slug: 'boys-dont-cry',
      title: "Boys don't cry",
      images: [
        { src: boysDontCry1, alt: "Boys don't cry I", caption: 'I' },
        { src: boysDontCry2, alt: "Boys don't cry II", caption: 'II' },
        { src: boysDontCry3, alt: "Boys don't cry III", caption: 'III' },
        { src: boysDontCry4, alt: "Boys don't cry IV", caption: 'IV' },
        { src: boysDontCry5, alt: "Boys don't cry V", caption: 'V' },
      ],
    },
    {
      slug: 'geografias-fugaces',
      title: 'Geografías fugaces',
      images: [
        { src: geografiasFugaces1, alt: 'Geografías fugaces I' },
        { src: geografiasFugaces2, alt: 'Geografías fugaces II' },
        { src: geografiasFugaces3, alt: 'Geografías fugaces III' },
        { src: geografiasFugaces4, alt: 'Geografías fugaces IV' },
        { src: geografiasFugaces5, alt: 'Geografías fugaces V' },
      ],
    },
    {
      slug: 'pool-story',
      title: 'Pool Story',
      images: [
        { src: poolStory1, alt: 'Pool Story I' },
        { src: poolStory2, alt: 'Pool Story II' },
        { src: poolStory3, alt: 'Pool Story III' },
        { src: poolStory4, alt: 'Pool Story IV' },
        { src: poolStory5, alt: 'Pool Story V' },
        { src: poolStory6, alt: 'Pool Story VI' },
        { src: poolStory7, alt: 'Pool Story VII' },
      ],
    },
    {
      slug: 'dia-en-titulcia',
      title: 'Día en Titulcia',
      images: [],
    },
    {
      slug: 'noche-de-procesion',
      title: 'Noche de procesión',
      images: [
        { src: procesion01, alt: 'Noche de procesión I', caption: 'I' },
        { src: procesion02, alt: 'Noche de procesión II', caption: 'II' },
        { src: procesion03, alt: 'Noche de procesión III', caption: 'III' },
        { src: procesion04, alt: 'Noche de procesión IV', caption: 'IV' },
        { src: procesion05, alt: 'Noche de procesión V', caption: 'V' },
        { src: procesion06, alt: 'Noche de procesión VI', caption: 'VI' },
        { src: procesion07, alt: 'Noche de procesión VII', caption: 'VII' },
        { src: procesion08, alt: 'Noche de procesión VIII', caption: 'VIII' },
        { src: procesion09, alt: 'Noche de procesión IX', caption: 'IX' },
        { src: procesion10, alt: 'Noche de procesión X', caption: 'X' },
      ],
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
