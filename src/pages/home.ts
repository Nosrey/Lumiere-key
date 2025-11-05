export function renderHome(app: HTMLDivElement) {
  // Contenido principal de la página de inicio centrado en Lumiere Key y Aragón
  // mark body so we can scope homepage-only styles (safe to call multiple times)
  try { document.body.classList.add('page-home'); } catch (e) {}

  app.innerHTML = `
    <section class="intro-section">
      <div class="intro-inner container text-justify">
  <h2 class="intro-title">Proceso de publicación</h2>
  <p class="intro-text">En Lumiere Key combinamos análisis de mercado, presentación premium y difusión dirigida para posicionar su propiedad frente a compradores de alto nivel. Le asesoramos en valoración, estilismo y creación de contenido (fotografía profesional, vídeos y tours virtuales) para maximizar visibilidad y precio, acompañándole en cada paso del proceso.</p>

  <h2 class="intro-subtitle">Colección en exclusiva</h2>
        <p class="intro-text">Como referencia en el mercado de Zaragoza y Aragón, gestionamos una selección cuidada de residencias y fincas de alto standing. Cada inmueble recibe una estrategia comercial personalizada, acceso a una cartera selecta de compradores y condiciones de venta privilegiadas. Descubra propiedades únicas con la discreción y la eficacia que exige el segmento premium.</p>

        <div class="intro-cta">
          <button class="btn-primary">Explorar propiedades</button>
          <button class="btn-outline">Solicitar valoración privada</button>
        </div>
      </div>
    </section>
  `;
}
