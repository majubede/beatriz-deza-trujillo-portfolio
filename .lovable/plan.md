
## Cambiar el favicon del navegador

El objetivo es reemplazar el icono actual (el de Lovable) que aparece en la pestaña del navegador por tu logo **B|D**.

### Pasos a realizar

1. **Copiar la imagen** `user-uploads://PORTADA_WEB-4.jpg` a la carpeta `public/` del proyecto como `favicon.png`

2. **Actualizar `index.html`** para que apunte al nuevo favicon:
   ```html
   <link rel="icon" type="image/png" href="/favicon.png" />
   ```
   (reemplazando la línea actual que apunta a `/favicon.ico`)

### Resultado
El logo circular con las iniciales **B|D** aparecerá en la pestaña del navegador y en los marcadores cuando alguien guarde tu web.

> Nota: El archivo se guardará como `.png` ya que el logo tiene mejor calidad en ese formato que en `.ico`.
