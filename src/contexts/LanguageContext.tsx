import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.obra': 'Obra',
    'nav.mujerx': 'Mujer X',
    'nav.about': 'Sobre mí',
    'nav.cv': 'CV',
    'nav.contact': 'Contacto',
    
    // Home Hero
    'home.hero.title': 'Retrato conceptual: identidad, memoria y la tensión entre lo que fuimos y lo que se espera que seamos.',
    'home.hero.subtitle': 'Autorretrato y retrato como lenguaje simbólico: capas, máscaras y emoción contenida.',
    'home.cta.work': 'Ver Obra',
    'home.cta.mujerx': 'Ver Mujer X',
    'home.cta.contact': 'Contacto',
    'home.featured': 'Series destacadas',
    
    // Obra
    'obra.title': 'Obra',
    'obra.intro': 'Proyectos fotográficos que exploran identidad, memoria y las capas que habitamos.',
    
    // Mujer X
    'mujerx.title': 'Mujer X',
    'mujerx.year': '2024 – en curso',
    'mujerx.short': 'MUJER X es un proyecto de autorretrato iniciado en 2024. Nace del deseo de expresar ideas y estados emocionales sin convertirlos en un relato cerrado. Es un trabajo experimental: prioriza la resonancia antes que la descripción.',
    'mujerx.long': 'La serie se construye con imágenes monocromáticas, en negativo o con ligeros acentos de color, buscando una atmósfera poética y atemporal. "X" funciona como identidad abierta: no es una sola mujer, sino muchas; un lugar simbólico donde cualquiera puede reconocerse.',
    'mujerx.cta.prints': 'Consultar obra / prints / licencias',
    'mujerx.view.sequence': 'Secuencia',
    'mujerx.view.grid': 'Cuadrícula',
    
    // About
    'about.title': 'Sobre mí',
    'about.bio.short': 'Beatriz Deza Trujillo (Madrid, 1978) es artista visual y fotógrafa. Su trabajo se sitúa entre el autorretrato y el retrato conceptual, con una estética poética y atemporal. A través del monocromo, el negativo y sutiles acentos de color explora identidad, memoria y las capas que nos ponemos para habitar el mundo.',
    'about.bio.long': 'Beatriz Deza Trujillo (Madrid, 1978) descubrió la fotografía en la madurez, tras la maternidad, y la convirtió en un territorio de aprendizaje continuo. Su práctica evolucionó hacia el autorretrato como herramienta de exploración íntima y lenguaje simbólico.\n\nEn 2024 inicia MUJER X, un proyecto experimental de autorretrato que busca condensar estados emocionales y tensiones internas desde una mirada abierta y contemporánea. Su lenguaje visual apuesta por lo monocromático, el negativo y pequeños acentos de color, creando una atmósfera deliberadamente poética y atemporal.',
    'about.statement.title': 'Artist Statement',
    'about.statement': 'Trabajo con el retrato como si fuera un escenario silencioso: un lugar donde la identidad se revela por capas. Me interesa la tensión entre lo íntimo y lo aprendido, entre lo que somos y lo que representamos. En mis imágenes aparecen la memoria, las máscaras sociales y esa frontera difusa entre la infancia que se pierde y la adultez que pesa.\n\nEl autorretrato es mi herramienta principal: una forma de escucharme y, a la vez, de hablar en plural. No busco narrar una biografía literal, sino construir símbolos —cuerpo, objetos, gestos, ausencia— que activen lecturas abiertas. La edición no es un adorno: es parte del significado. Trabajo con monocromo, negativo y pequeños acentos de color para desplazar lo real y acercarme a lo emocional.\n\nMis fotografías quieren quedarse un segundo más de lo habitual: sostener una pregunta, no cerrarla. Busco una belleza contenida, con un pulso contemporáneo, donde lo poético sea una forma de precisión.',
    'about.credentials': 'Portadas de libro: Viento sin norte (2023) y La grieta reina (2026). Participación con obra para subasta: Pazarte / Zapaterías Papparazzo (2025).',
    
    // CV
    'cv.title': 'CV',
    'cv.awards': 'Premios y Selecciones',
    'cv.exhibitions': 'Exposiciones',
    'cv.publications': 'Publicaciones / Portadas',
    'cv.projects': 'Proyectos Especiales',
    'cv.viewAll': 'Ver completo',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.intro': 'Para prensa, comisariado, concursos, portadas, prints/licencias o propuestas de colaboración.',
    'contact.subject': 'Asunto',
    'contact.subjects.press': 'Prensa / Press',
    'contact.subjects.exhibition': 'Exposición / Comisariado',
    'contact.subjects.contest': 'Concurso / Convocatoria',
    'contact.subjects.prints': 'Prints / Disponibilidad',
    'contact.subjects.licensing': 'Licencias / Editorial',
    'contact.subjects.collaboration': 'Encargo / Colaboración',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.success': 'Mensaje enviado. Gracias por contactar.',
    
    // Series
    'series.dreamrain': 'Dream Rain',
    'series.dreamrain.year': '2024',
    'series.dreamrain.text': 'Una exploración del sueño como refugio y espacio de transformación interior.',
    
    'series.doubleself': 'Double Self',
    'series.doubleself.year': '2023',
    'series.doubleself.text': 'Desdoblamiento y diálogo interno: el yo fragmentado que busca reconocerse.',
    
    'series.ensayo': 'Ensayo en rosa',
    'series.ensayo.year': '2023',
    'series.ensayo.text': 'El rosa como territorio de contradicciones: entre lo asignado y lo elegido.',
    
    'series.walking': 'Walking Together',
    'series.walking.year': '2024',
    'series.walking.text': 'Pieza individual sobre el caminar compartido y la compañía silenciosa.',
    
    'series.territorios': 'Territorios',
    'series.territorios.year': '2024',
    'series.territorios.text': 'Espacios íntimos que narran historias silenciosas de pertenencia y memoria.',
    
    'series.paisajes': 'Paisajes',
    'series.paisajes.year': '2024',
    'series.paisajes.text': 'La mirada en movimiento: territorios que se desvanecen entre lo real y lo onírico.',
    
    'series.autorretrato': 'Autorretrato',
    'series.autorretrato.year': '2024',
    'series.autorretrato.text': 'Exploración de la identidad propia a través del espejo y la cámara.',
    
    'series.gente': 'Gente',
    'series.gente.year': '2024',
    'series.gente.text': 'Retratos que capturan la esencia y las historias de quienes nos rodean.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    
    // 404
    '404.title': 'Página no encontrada',
    '404.back': 'Volver al inicio',
  },
  en: {
    // Navigation
    'nav.obra': 'Work',
    'nav.mujerx': 'Mujer X',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    
    // Home Hero
    'home.hero.title': 'Conceptual portraiture where identity unfolds through masks, memory, and the quiet weight of becoming.',
    'home.hero.subtitle': 'Self-portrait and portraiture as symbolic language—layers, roles, and contained emotion.',
    'home.cta.work': 'View Work',
    'home.cta.mujerx': 'View Mujer X',
    'home.cta.contact': 'Contact',
    'home.featured': 'Featured Series',
    
    // Obra
    'obra.title': 'Work',
    'obra.intro': 'Photographic projects exploring identity, memory, and the layers we inhabit.',
    
    // Mujer X
    'mujerx.title': 'Mujer X',
    'mujerx.year': '2024 – ongoing',
    'mujerx.short': 'MUJER X is an experimental self-portrait project started in 2024. It emerged from the need to translate emotional states without turning them into a closed narrative—prioritizing resonance over description.',
    'mujerx.long': 'Built through monochrome, negative, and minimal color accents, it seeks a poetic, timeless atmosphere. "X" becomes an open identity—not one woman, but many; a symbolic space where viewers can recognize themselves.',
    'mujerx.cta.prints': 'Inquire about prints / licensing',
    'mujerx.view.sequence': 'Sequence',
    'mujerx.view.grid': 'Grid',
    
    // About
    'about.title': 'About',
    'about.bio.short': 'Beatriz Deza Trujillo (Madrid, 1978) is a visual artist and fine art photographer. Working between self-portrait and conceptual portraiture, she builds a poetic, timeless visual language through monochrome, negative, and subtle color accents—exploring identity, memory, and the roles we learn to inhabit.',
    'about.bio.long': 'Beatriz Deza Trujillo (Madrid, 1978) discovered photography later in life and turned it into a space of continuous learning. Her practice evolved toward self-portraiture as a tool for intimate exploration and symbolic language. In 2024 she began MUJER X, an experimental project that condenses emotional states through monochrome, negative, and restrained color, shaping a deliberately poetic, timeless atmosphere.',
    'about.statement.title': 'Artist Statement',
    'about.statement': 'I approach portraiture as a quiet stage—where identity is revealed in layers. I\'m drawn to the tension between what is intimate and what is learned, between who we are and what we perform. Memory, social masks, and the fragile boundary between lost childhood and the weight of adulthood run through my images.\n\nSelf-portraiture is my main tool: a way of listening inward while speaking in plural. I build symbols—body, objects, gesture, absence—designed to keep meaning open. Post-production is part of the work\'s structure. My photographs aim to linger—to hold a question rather than close it.',
    'about.credentials': 'Book cover collaborations: Viento sin norte (2023) and La grieta reina (2026). Artwork contributed to auction: Pazarte / Zapaterías Papparazzo (2025).',
    
    // CV
    'cv.title': 'CV',
    'cv.awards': 'Awards & Selections',
    'cv.exhibitions': 'Exhibitions',
    'cv.publications': 'Publications / Covers',
    'cv.projects': 'Special Projects',
    'cv.viewAll': 'View all',
    
    // Contact
    'contact.title': 'Contact',
    'contact.intro': 'For press, curators, open calls, book covers, prints/licensing, or collaboration proposals.',
    'contact.subject': 'Subject',
    'contact.subjects.press': 'Press',
    'contact.subjects.exhibition': 'Exhibition / Curatorial',
    'contact.subjects.contest': 'Open Call / Contest',
    'contact.subjects.prints': 'Prints / Availability',
    'contact.subjects.licensing': 'Licensing / Editorial',
    'contact.subjects.collaboration': 'Commission / Collaboration',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.success': 'Message sent. Thank you for reaching out.',
    
    // Series
    'series.dreamrain': 'Dream Rain',
    'series.dreamrain.year': '2024',
    'series.dreamrain.text': 'An exploration of dreams as refuge and space for inner transformation.',
    
    'series.doubleself': 'Double Self',
    'series.doubleself.year': '2023',
    'series.doubleself.text': 'Splitting and inner dialogue: the fragmented self seeking recognition.',
    
    'series.ensayo': 'Essay in Pink',
    'series.ensayo.year': '2023',
    'series.ensayo.text': 'Pink as territory of contradictions: between what is assigned and what is chosen.',
    
    'series.walking': 'Walking Together',
    'series.walking.year': '2024',
    'series.walking.text': 'A singular piece on shared walking and silent companionship.',
    
    'series.territorios': 'Territories',
    'series.territorios.year': '2024',
    'series.territorios.text': 'Intimate spaces that tell silent stories of belonging and memory.',
    
    'series.paisajes': 'Landscapes',
    'series.paisajes.year': '2024',
    'series.paisajes.text': 'The gaze in motion: territories dissolving between reality and dream.',
    
    'series.autorretrato': 'Self-Portrait',
    'series.autorretrato.year': '2024',
    'series.autorretrato.text': 'Exploring self-identity through the mirror and the camera.',
    
    'series.gente': 'People',
    'series.gente.year': '2024',
    'series.gente.text': 'Portraits capturing the essence and stories of those around us.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    
    // 404
    '404.title': 'Page not found',
    '404.back': 'Back to home',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-language') as Language;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
