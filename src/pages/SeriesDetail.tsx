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

// Escenarios (Paisajes) images
import paisajeNublado from '@/assets/paisajes/paisaje-nublado-gran-canaria.jpg';
import glaciarByn from '@/assets/paisajes/glaciar-byn.jpg';
import nieblaPolvoranca from '@/assets/paisajes/niebla-polvoranca.jpg';
import lunaAtardecer from '@/assets/paisajes/luna-atardecer.jpg';
import arbolesNevados from '@/assets/paisajes/arboles-nevados.jpg';
import lunaAtardecer2 from '@/assets/paisajes/luna-atardecer-2.jpg';
import nieblaBosquesur from '@/assets/paisajes/niebla-bosquesur.jpg';
import arbolLunaGuardamar from '@/assets/paisajes/arbol-luna-guardamar.jpg';
import absences from '@/assets/paisajes/absences.jpg';
import nieveBosquesur from '@/assets/paisajes/nieve-bosquesur.jpg';
import postalInvierno from '@/assets/paisajes/postal-invierno.jpg';

// Presencias images
import saraCortina from '@/assets/presencias/sara-cortina.jpg';
import juanAdolfo from '@/assets/presencias/juan-adolfo.jpg';
import oliviaBanoRosa from '@/assets/presencias/olivia-bano-rosa.jpg';
import mario3 from '@/assets/presencias/mario-3.jpg';

import oliviaRojoRetro from '@/assets/presencias/olivia-rojo-retro.jpg';
import claudia11 from '@/assets/presencias/claudia-11.jpg';
import roberPiscinaFlores from '@/assets/presencias/rober-piscina-flores.jpg';
import retratoJuanito from '@/assets/presencias/retrato-juanito.jpg';
import claudiaSpiderman from '@/assets/presencias/claudia-spiderman.jpg';
import ireneDobleExposicion from '@/assets/presencias/irene-doble-exposicion.jpg';
import saraSombrasHelecho from '@/assets/presencias/sara-sombras-helecho.jpg';
import oliviaClaveles from '@/assets/presencias/olivia-claveles.jpg';
import mariaArbol from '@/assets/presencias/maria-arbol.jpg';
import mariaEIreneLuces from '@/assets/presencias/maria-e-irene-luces.jpg';

// Colaboraciones images
import laGrietaReinaImage from '@/assets/colaboraciones/la-grieta-reina.jpg';
import vientoSinNorteImage from '@/assets/colaboraciones/viento-sin-norte.jpg';
import walkingTogetherColabImage from '@/assets/colaboraciones/walking-together.jpg';

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
      { src: paisajesImage, alt: 'Paisajes I' },
      { src: paisajeNublado, alt: 'Paisaje nublado en Gran Canaria' },
      { src: glaciarByn, alt: 'Glaciar en blanco y negro' },
      { src: nieblaPolvoranca, alt: 'Niebla en Polvoranca' },
      { src: lunaAtardecer, alt: 'Luna al atardecer' },
      { src: postalInvierno, alt: 'Postal de invierno' },
      { src: arbolesNevados, alt: 'Árboles nevados' },
      { src: lunaAtardecer2, alt: 'Luna al atardecer sobre el mar' },
      { src: nieblaBosquesur, alt: 'Niebla en Bosquesur' },
      { src: arbolLunaGuardamar, alt: 'Árbol y luna en Guardamar' },
      { src: absences, alt: 'Absences' },
      { src: nieveBosquesur, alt: 'Nieve en Bosquesur' },
    ],
  },
  'gente': {
    titleKey: 'series.gente',
    yearKey: 'series.gente.year',
    textKey: 'series.gente.text',
    images: [
      { src: saraCortina, alt: 'Sara tras cortina de encaje' },
      { src: juanAdolfo, alt: 'Retrato de Juan Adolfo' },
      { src: oliviaBanoRosa, alt: 'Olivia en baño rosa' },
      { src: mario3, alt: 'Retrato de Mario' },
      { src: ireneDobleExposicion, alt: 'Irene doble exposición' },
      { src: oliviaRojoRetro, alt: 'Olivia todo al rojo' },
      { src: mariaArbol, alt: 'María abrazando árbol' },
      { src: claudia11, alt: 'Claudia nocturna' },
      { src: roberPiscinaFlores, alt: 'Rober en piscina con flores' },
      { src: saraSombrasHelecho, alt: 'Sara con sombras de helecho' },
      { src: retratoJuanito, alt: 'Retrato de Juanito' },
      { src: oliviaClaveles, alt: 'Olivia con claveles' },
      
      { src: claudiaSpiderman, alt: 'Claudia doble exposición' },
      { src: mariaEIreneLuces, alt: 'María e Irene con luces' },
    ],
  },
  'colaboraciones': {
    titleKey: 'series.colaboraciones',
    yearKey: 'series.colaboraciones.year',
    textKey: 'series.colaboraciones.text',
    images: [
      { src: laGrietaReinaImage, alt: 'La grieta reina - Arantza Álava', caption: 'La grieta reina - Arantza Álava' },
      { src: vientoSinNorteImage, alt: 'Viento sin norte - Arantza Álava', caption: 'Viento sin norte - Arantza Álava' },
      { src: walkingTogetherColabImage, alt: 'Walking Together', caption: 'Walking Together' },
    ],
  },
};

const SeriesDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'sequence' | 'grid'>('grid');

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
