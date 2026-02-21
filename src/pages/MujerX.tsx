import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/gallery/ImageGallery';

// Import Mujer X series images
import serImage from '@/assets/mujerx/ser.jpg';
import fragilImage from '@/assets/mujerx/fragil.jpg';
import danaImage from '@/assets/mujerx/dana.jpg';
import narcYYoImage from '@/assets/mujerx/narciso-y-yo.jpg';
import suspendedImage from '@/assets/mujerx/suspended-germination.jpg';
import deMiParaMiImage from '@/assets/mujerx/de-mi-para-mi.jpg';
import iHateMondaysImage from '@/assets/mujerx/i-hate-mondays.jpg';
import flowersImage from '@/assets/mujerx/flowers.jpg';
import libertadImage from '@/assets/mujerx/libertad-de-pensamiento.jpg';
import suenosRotosImage from '@/assets/mujerx/suenos-rotos.jpg';
import niUnaMasImage from '@/assets/mujerx/ni-una-mas.jpg';
import saludMentalImage from '@/assets/mujerx/salud-mental.jpg';
import sinBateriaImage from '@/assets/mujerx/sin-bateria.jpg';
import virgoImage from '@/assets/mujerx/virgo.jpg';
import enraizarImage from '@/assets/mujerx/enraizar.jpg';
import nidoVacioImage from '@/assets/mujerx/nido-vacio.jpg';
import raizImage from '@/assets/mujerx/raiz.jpg';
import anestesiaColectivaImage from '@/assets/mujerx/anestesia-colectiva.jpg';

const MujerX: React.FC = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'sequence' | 'grid'>('grid');

  // Curated order: identity themes → vulnerability → social commentary → closing
  const galleryImages = [
    {
      src: serImage,
      alt: 'Mujer X - Ser',
      caption: 'Ser',
    },
    {
      src: fragilImage,
      alt: 'Mujer X - Frágil',
      caption: 'Frágil',
    },
    {
      src: narcYYoImage,
      alt: 'Mujer X - Narciso y yo',
      caption: 'Narciso y yo',
    },
    {
      src: deMiParaMiImage,
      alt: 'Mujer X - De mí para mí',
      caption: 'De mí para mí',
    },
    {
      src: flowersImage,
      alt: 'Mujer X - Flowers',
      caption: 'Flowers',
    },
    {
      src: libertadImage,
      alt: 'Mujer X - Libertad de pensamiento',
      caption: 'Libertad de pensamiento',
    },
    {
      src: suenosRotosImage,
      alt: 'Mujer X - Sueños rotos',
      caption: 'Sueños rotos',
    },
    {
      src: saludMentalImage,
      alt: 'Mujer X - Salud mental',
      caption: 'Salud mental',
    },
    {
      src: niUnaMasImage,
      alt: 'Mujer X - Ni una más',
      caption: 'Ni una más',
    },
    {
      src: sinBateriaImage,
      alt: 'Mujer X - Sin batería',
      caption: 'Sin batería',
    },
    {
      src: virgoImage,
      alt: 'Mujer X - Virgo',
      caption: 'Virgo',
    },
    {
      src: danaImage,
      alt: 'Mujer X - Dana',
      caption: 'Dana',
    },
    {
      src: anestesiaColectivaImage,
      alt: 'Mujer X - Anestesia Colectiva',
      caption: 'Anestesia Colectiva',
    },
    {
      src: suspendedImage,
      alt: 'Mujer X - Germinación suspendida',
      caption: 'Germinación suspendida',
    },
    {
      src: iHateMondaysImage,
      alt: 'Mujer X - I Hate Mondays',
      caption: 'I Hate Mondays',
    },
    {
      src: enraizarImage,
      alt: 'Mujer X - Enraizar',
      caption: 'Enraizar',
    },
    {
      src: nidoVacioImage,
      alt: 'Mujer X - Nido vacío',
      caption: 'Nido vacío',
    },
    {
      src: raizImage,
      alt: 'Mujer X - Raíz',
      caption: 'Raíz',
    },
  ];

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="max-w-3xl mb-12 fade-in">
          <h1 className="section-title mb-4">{t('mujerx.title')}</h1>
          <p className="body-curatorial mb-4">{t('mujerx.short')}</p>
          <p className="body-curatorial">{t('mujerx.long')}</p>
        </header>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-4 mb-8 fade-in">
          <button
            onClick={() => setViewMode('grid')}
            className={`text-sm tracking-wide transition-colors duration-300 ${
              viewMode === 'grid' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('mujerx.view.grid')}
          </button>
          <span className="text-muted-foreground/30">|</span>
          <button
            onClick={() => setViewMode('sequence')}
            className={`text-sm tracking-wide transition-colors duration-300 ${
              viewMode === 'sequence' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('mujerx.view.sequence')}
          </button>
        </div>

        {/* Gallery */}
        <div className="max-w-4xl mx-auto fade-in-up">
          <ImageGallery images={galleryImages} mode={viewMode} showCaptions />
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-border text-center fade-in">
          <Link
            to="/contacto?subject=prints"
            className="btn-gallery-subtle"
          >
            {t('mujerx.cta.prints')} →
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default MujerX;
