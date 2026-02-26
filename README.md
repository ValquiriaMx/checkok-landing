# CheckOK Landing Page

Landing page para CheckOK — app de seguridad familiar.

## Desarrollo local

```bash
npm install
npm run dev
```

## Agregar capturas de pantalla

1. Coloca las imágenes en `src/assets/`
2. En `src/App.jsx`, importa y agrega al array `screenshots`:

```js
import screen2 from './assets/screen2.jpg'
const screenshots = [screen1, screen2, screen3]
```

## Build para producción

```bash
npm run build
```

El output queda en `/dist` — listo para subir a Cloudflare Pages.
