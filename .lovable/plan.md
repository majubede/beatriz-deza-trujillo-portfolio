
## Cambiar la tipografía de "Beatriz Deza" a Playfair Display

### Qué se va a cambiar
El nombre **Beatriz Deza** en la cabecera (header) de la web, que actualmente usa la fuente personalizada *Elegant*, pasará a usar la fuente **Playfair Display** que has subido.

### Pasos técnicos

**1. Copiar el archivo de fuente al proyecto**
El archivo `PlayfairDisplay-VariableFont_wght.ttf` se copiará a `public/fonts/` para que esté disponible junto al resto de fuentes.

**2. Registrar la fuente en el CSS global (`src/index.css`)**
Se añadirá un bloque `@font-face` junto al de la fuente *Elegant* actual:
```css
@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/PlayfairDisplay-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```
Al ser una fuente variable, se declara el rango completo de pesos (`100 900`).

**3. Actualizar el Header (`src/components/layout/Header.tsx`)**
La línea que aplica la fuente al nombre en la cabecera:
```jsx
// Antes:
<span style={{ fontFamily: "'Elegant', serif" }}>Beatriz Deza</span>

// Después:
<span style={{ fontFamily: "'Playfair Display', serif" }}>Beatriz Deza</span>
```

### Resultado
"Beatriz Deza" en la pestaña superior de la web aparecerá con la tipografía Playfair Display. El resto de la web (navegación, textos, títulos) no se verá afectado.
