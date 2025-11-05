import { defineConfig } from 'vite';

// Establece la base para GitHub Pages (repositorio: Nosrey/Lumiere-key)
// y configura entradas múltiples para que cada HTML en la raíz
// se convierta en una página independiente en la carpeta `dist`.
export default defineConfig({
  base: '/Lumiere-key/',
  build: {
    rollupOptions: {
      // usar rutas relativas (resueltas desde la raíz del proyecto)
      input: {
        main: 'index.html',
        comprar: 'comprar.html',
        ventas: 'ventas.html',
        about: 'about.html',
        contact: 'contact.html'
      }
    }
  }
});
