import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/gallery/ImageGallery';

// Infancia images (ordered as requested)
import farolaBalon from '@/assets/infancia/farola-balon.jpg';
import lucesColores from '@/assets/infancia/luces-colores.jpg';
import ventanaPuerto from '@/assets/infancia/ventana-puerto.jpg';
import carruselGuarda from '@/assets/infancia/carrusel-guarda.jpg';
import manosOliviaPuerta from '@/assets/infancia/manos-olivia-puerta.jpg';
import oliviaAguaBurdeos from '@/assets/infancia/olivia-agua-burdeos.jpg';
import oliviaBalонPiscina from '@/assets/infancia/olivia-balon-piscina.jpg';
import oliviaBanadorCampo from '@/assets/infancia/olivia-banador-campo.jpg';
import oliviaCocheCristal from '@/assets/infancia/olivia-coche-cristal.jpg';
import dobleExposicionTutu from '@/assets/infancia/doble-exposicion-tutu.jpg';
import paradaBus from '@/assets/infancia/parada-bus.jpg';
import calleNocturnaByn from '@/assets/infancia/calle-nocturna-byn.jpg';
import columpioDoble from '@/assets/infancia/columpio-doble.jpg';
import playaGuardamar from '@/assets/infancia/playa-guardamar.jpg';
import sabanaArboles from '@/assets/infancia/sabana-arboles.jpg';
import escalerasEscorial from '@/assets/infancia/escaleras-escorial.jpg';
import habitacionMotel from '@/assets/infancia/habitacion-motel.jpg';
import banquetaPajaro from '@/assets/infancia/banqueta-pajaro.jpg';
import sillaCalle from '@/assets/infancia/silla-calle.jpg';

const Infancia: React.FC = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'sequence' | 'grid'>('grid');

  const images = [
    { src: farolaBalon, alt: 'Olivia bajo la farola con el balón amarillo' },
    { src: lucesColores, alt: 'Olivia en el círculo de luz de colores' },
    { src: ventanaPuerto, alt: 'Olivia sentada en la ventana del puerto' },
    { src: banderaPlaya, alt: 'Olivia con la bandera blanca en la playa' },
    { src: dobleExposicionTutu, alt: 'Olivia doble exposición vestido burdeos' },
    { src: paradaBus, alt: 'Olivia en la parada de bus con maletas' },
    { src: calleNocturnaByn, alt: 'Olivia en la calle nocturna en B/N' },
    { src: columpioDoble, alt: 'Olivia en el columpio doble exposición' },
    { src: playaGuardamar, alt: 'Olivia corriendo en la playa Guardamar' },
    { src: sabanaArboles, alt: 'Olivia levantando la sábana entre los árboles' },
    { src: escalerasEscorial, alt: 'Olivia en las escaleras del Escorial' },
    { src: habitacionMotel, alt: 'Olivia habitación motel doble exposición' },
    { src: banquetaPajaro, alt: 'Olivia sentada con pájaro' },
    { src: sillaCalle, alt: 'Olivia en silla en la calle' },
  ];

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="max-w-3xl mb-12 fade-in">
          <h1 className="section-title mb-4">{t('series.olivias')}</h1>
          <p className="body-curatorial whitespace-pre-line">{t('series.olivias.text')}</p>
        </header>

        {/* View Mode Toggle */}
        <div className="max-w-4xl mx-auto flex items-center gap-4 mb-8 fade-in">
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

        {/* Gallery */}
        <div className="max-w-4xl mx-auto fade-in-up">
          <ImageGallery images={images} mode={viewMode} showCaptions={false} />
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

export default Infancia;
