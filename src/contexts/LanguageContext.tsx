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
    'home.hero.title': 'Retrato conceptual sobre identidad y memoria.\nEl cuerpo como territorio\nde lo aprendido y lo íntimo.',
    'home.hero.subtitle': 'Autorretrato y retrato como práctica simbólica\ny construcción de significado.',
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
    'about.bio.short': 'Beatriz Deza Trujillo (Madrid, 1978). Soy artista visual y fotógrafa. Mi trabajo se sitúa entre el autorretrato y el retrato conceptual, con una estética poética y atemporal. Uso el color como una herramienta poderosa en mis imágenes: lo trabajo como lenguaje, como atmósfera y como signo, para dirigir la mirada y abrir significados. Desde ahí exploro la identidad, la memoria y las capas que nos ponemos para habitar el mundo.',
    'about.bio.long': 'Descubrí la fotografía en la madurez, tras la maternidad, y me formé durante dos años en la Universidad Popular de Fuenlabrada, convirtiéndola en un territorio de aprendizaje continuo. Con el tiempo, mi práctica se desplazó hacia el autorretrato como herramienta de exploración íntima y lenguaje simbólico.\n\nEn 2024 inicié MUJER X, un proyecto experimental de autorretrato que condensa estados emocionales y tensiones internas desde una mirada abierta y contemporánea. Su lenguaje visual dialoga con el monocromo, el negativo y el color, construyendo una atmósfera contenida y deliberadamente poética.',
    'about.statement.title': 'Artist Statement',
    'about.statement': 'Trabajo con el retrato como si fuera un escenario silencioso: un lugar donde la identidad se revela por capas. Me interesa la tensión entre lo íntimo y lo aprendido, entre lo que somos y lo que representamos. En mis imágenes aparecen la memoria, las máscaras sociales y esa frontera difusa entre la infancia que se pierde y la adultez que pesa.\n\nEl autorretrato es mi herramienta principal: una forma de escucharme y, a la vez, de hablar en plural. No busco narrar una biografía literal, sino construir símbolos —cuerpo, objetos, gestos, ausencia— que activen lecturas abiertas. La edición no es un adorno: es parte del significado. Trabajo con el color, el monocromo y el negativo para desplazar lo real y acercarme a lo emocional.\n\nMis fotografías quieren quedarse un segundo más de lo habitual: sostener una pregunta, no cerrarla. Busco una belleza contenida, con un pulso contemporáneo, donde lo poético sea una forma de precisión.',
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
    'series.territorios.lqp.text': 'Los que permanecen (La Cañada) nace de volver a la casa de mis abuelos y reconocer que el tiempo también se queda a vivir en los lugares. Fotografío objetos y escenas cotidianas —una mesa camilla, una puerta entreabierta, la luz de verano— porque ahí siento que vive la memoria. Entre generaciones y presencias a veces veladas, la serie habla de lo que cambia y de lo que permanece: el hogar como refugio y como huella.',
    'series.territorios.estadosagua.text': 'Fragmentos de infancia. El color marca el estado de ánimo de cada escena —miedo, juego, calma, curiosidad—, como si cada tono fuera un estado del agua distinto.',
    'series.territorios.capasausencia.text': 'La ausencia no desaparece: se superpone. Cementerio, flores y paisaje se mezclan en una misma imagen, como una memoria que insiste.',
    'series.territorios.boysdontcry.text': 'Boys Don\'t Cry es una serie de escenas y símbolos: flores, cortes, agua, calle. Puede leerse como una historia —o como muchas—.\nA partir de esa ambigüedad, la serie cuestiona los estereotipos que moldean la masculinidad desde la infancia: lo que se espera, lo que se reprime, lo que "no debería" doler.\nEntre lo frágil y lo contenido, las imágenes dejan espacio para lo que casi nunca se nombra: la vulnerabilidad, el miedo, el cuidado.',
    'territorios.sub.lqp': 'Los que permanecen',
    'territorios.sub.estadosagua': 'Estados de agua',
    'territorios.sub.capasausencia': 'Capas de ausencia',
    'territorios.sub.boysdontcry': "Boys don't cry",
    'territorios.sub.geografias': 'Geografías fugaces',
    'series.territorios.geografias.text': 'Paisajes en movimiento, vistos desde el tránsito.\nEl territorio se desdibuja y se convierte en recuerdo de la tierra que habitamos.',
    'territorios.sub.poolstory': 'Pool Story',
    'series.territorios.poolstory.text': 'Una piscina vacía.\nLa imaginación lo llena todo.\nLa felicidad está en lo que ya tenemos.',
    'territorios.sub.barbie': 'Barbie y sus amigos',
    'series.territorios.barbie.text': 'Barbie y sus amigos es un juego de códigos: rosa, pose, brillo.\nUn mundo pop que parece perfecto, pero evidencia el estereotipo.\nEntre lo que se imita y lo que se elige aparece la identidad… y, mientras se busca, ¿por qué no divertirse?',
    'territorios.sub.titulcia': 'Día en Titulcia',
    'series.territorios.titulcia.text': 'Día en familia. Pinceladas en blanco y negro que guardan lo cotidiano: gestos, juegos y pequeños instantes compartidos.',
    'territorios.sub.procesion': 'Noche de procesión',
    'series.territorios.procesion.text': 'Velas, pasos, silencio.\nUna tradición compartida que vuelve cada año y se vive generación tras generación, permaneciendo en el recuerdo más allá de lo religioso.',
    
    'series.paisajes': 'Escenarios',
    'series.paisajes.year': '2024',
    'series.paisajes.text': 'La mirada en movimiento: territorios que se desvanecen entre lo real y lo onírico.',
    
    'series.autorretrato': 'Autorretrato',
    'series.autorretrato.year': '2024',
    'series.autorretrato.text': 'Utilizo el autorretrato como un espacio de ensayo y desplazamiento. No me interesa la representación fiel, sino la posibilidad de convertirme en símbolo: ocultar, fragmentar o transformar el rostro para hablar de identidad, de lo que se muestra y de lo que se protege.\n\nTrabajo con objetos cotidianos, gestos mínimos y pequeños desvíos visuales que introducen distancia y, a veces, humor. El cuerpo aparece como soporte y escenario, más que como afirmación, permitiendo que la imagen se abra a múltiples lecturas.\n\nEstas fotografías no buscan narrar una biografía, sino activar preguntas. El autorretrato funciona aquí como una herramienta para observarme desde fuera y, al mismo tiempo, invitar a quien mira a reconocerse en la imagen.',
    
    'series.gente': 'Presencias',
    'series.gente.year': '2024',
    'series.gente.text': 'Retratos que capturan la esencia y las historias de quienes nos rodean.',
    
    'series.colaboraciones': 'Colaboraciones',
    'series.colaboraciones.year': '2024',
    'series.colaboraciones.text': 'Proyectos realizados en colaboración con otros artistas y creadores.',
    
    'series.olivias': 'Infancia',
    'series.olivias.year': '2024',
    'series.olivias.text': 'El universo visual de Olivia: infancia, juego y mirada.',
    
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
    'home.hero.title': 'Conceptual portraiture on identity and memory.\nThe body as a territory\nof the learned and the intimate.',
    'home.hero.subtitle': 'Self-portrait and portrait as a symbolic practice\nand a construction of meaning.',
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
    'about.bio.short': 'I\'m Beatriz Deza Trujillo (Madrid, 1978), a visual artist and photographer. My work moves between self-portraiture and conceptual portraiture, with a poetic and timeless aesthetic. I use color as a powerful tool in my images—working with it as language, atmosphere, and sign—to guide the viewer\'s gaze and open up layers of meaning. From this place, I explore identity, memory, and the layers we adopt to inhabit the world.',
    'about.bio.long': 'I discovered photography later in life, after becoming a mother, and trained for two years at the Universidad Popular de Fuenlabrada, turning photography into a space of continuous learning. Over time, my practice shifted toward self-portraiture as a tool for intimate exploration and symbolic language.\n\nIn 2024, I began MUJER X, an experimental self-portrait project that condenses emotional states and inner tensions through an open and contemporary gaze. Its visual language engages with monochrome, negative imagery, and color, creating a restrained and deliberately poetic atmosphere.',
    'about.statement.title': 'Artist Statement',
    'about.statement': 'I approach portraiture as a silent stage—a place where identity is revealed in layers. I am interested in the tension between the intimate and the learned, between who we are and what we perform. Memory, social masks, and that blurred boundary between the childhood we lose and the weight of adulthood appear repeatedly in my images.\n\nSelf-portraiture is my main tool: a way of listening to myself and, at the same time, speaking in the plural. I am not interested in constructing a literal biography, but in building symbols—body, objects, gestures, absence—that activate open readings. Editing is not an embellishment; it is part of the meaning. I work with color, monochrome, and negative imagery to shift reality and move closer to the emotional.\n\nMy photographs seek to linger a second longer than usual: to hold a question rather than resolve it. I look for a restrained beauty with a contemporary pulse, where the poetic becomes a form of precision.',
    'about.credentials': 'Book covers: Viento sin norte (2023) and La grieta reina (2026). Participation with artwork for auction: Pazarte / Zapaterías Papparazzo (2025).',
    
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
    'series.territorios.lqp.text': 'Those Who Remain (La Cañada) began when I returned to my grandparents\' house and realized that time also lives in places. I photograph everyday objects and quiet scenes—a camilla table, a half-open door, summer light—because that is where memory feels most present to me. Moving between generations and partly veiled presences, the series reflects on what changes and what endures: home as refuge and as trace.',
    'series.territorios.estadosagua.text': 'Fragments of childhood. Color shapes the mood of each scene —fear, play, calm, curiosity— as if each tone were a different state of water.',
    'series.territorios.capasausencia.text': 'Absence does not disappear; it overlaps. Cemetery, flowers, and landscape merge into a single image, like a memory that lingers.',
    'series.territorios.boysdontcry.text': 'Boys Don\'t Cry is a series of scenes and symbols: flowers, cuts, water, street. It can be read as one story —or as many—.\nFrom that ambiguity, the series questions the stereotypes that shape masculinity from childhood: what is expected, what is repressed, what "shouldn\'t" hurt.\nBetween fragility and restraint, the images open a space for what is rarely allowed to be seen: vulnerability, fear, care.',
    'territorios.sub.lqp': 'Those who remain',
    'territorios.sub.estadosagua': 'States of water',
    'territorios.sub.capasausencia': 'Layers of absence',
    'territorios.sub.boysdontcry': "Boys don't cry",
    'territorios.sub.geografias': 'Fleeting geographies',
    'series.territorios.geografias.text': 'Landscapes in motion, seen in transit.\nThe territory blurs and becomes a memory of the land we inhabit.',
    'territorios.sub.poolstory': 'Pool Story',
    'series.territorios.poolstory.text': 'Pool Story speaks about imagination as a refuge.\nAn empty pool becomes a stage, a game, an adventure.\nHappiness lies in transforming what we already have.',
    'territorios.sub.barbie': 'Barbie and friends',
    'series.territorios.barbie.text': 'Barbie and her Friends is a game of codes: pink, pose, shine.\nA pop world that seems perfect, yet reveals the stereotype.\nBetween what is imitated and what is chosen, identity emerges — and while searching for it, why not have fun?',
    'territorios.sub.titulcia': 'A day in Titulcia',
    'series.territorios.titulcia.text': 'A day with family. Black and white brushstrokes that hold the everyday—gestures, play, and small shared moments.',
    'territorios.sub.procesion': 'Procession night',
    'series.territorios.procesion.text': 'Candles, footsteps, silence.\nA shared tradition that returns each year, lived from generation to generation, staying in memory beyond the religious.',
    
    'series.paisajes': 'Scenarios',
    'series.paisajes.year': '2024',
    'series.paisajes.text': 'The gaze in motion: territories dissolving between reality and dream.',
    
    'series.autorretrato': 'Self-Portrait',
    'series.autorretrato.year': '2024',
    'series.autorretrato.text': 'I use self-portraiture as a space for experimentation and displacement. I am not interested in faithful representation, but in becoming a symbol: concealing, fragmenting, or transforming the face to speak about identity, about what is shown and what is protected.\n\nI work with everyday objects, minimal gestures, and subtle visual shifts that create distance and, at times, a restrained sense of humor. The body appears as a support and a stage rather than an assertion, allowing the image to remain open to multiple readings.\n\nThese photographs do not aim to narrate a biography, but to activate questions. Here, self-portraiture becomes a tool to observe myself from the outside while inviting the viewer to recognize themselves within the image.',
    
    'series.gente': 'Presences',
    'series.gente.year': '2024',
    'series.gente.text': 'Portraits capturing the essence and stories of those around us.',
    
    'series.colaboraciones': 'Collaborations',
    'series.colaboraciones.year': '2024',
    'series.colaboraciones.text': 'Projects created in collaboration with other artists and creators.',
    
    'series.olivias': 'Childhood',
    'series.olivias.year': '2024',
    'series.olivias.text': "Olivia's visual universe: childhood, play, and perspective.",
    
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
