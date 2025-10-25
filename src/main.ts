import './style.css';
import { renderNavbar } from './components/Navbar';
import { renderHome } from './pages/home';
// Import assets so Vite resolves the correct URLs for dev and build
import trailerPoster from './assets/trailer-poster.jpg';
import { renderFooter } from './components/Footer';

// Crear contenedor para el navbar
const navbarContainer = document.createElement('div');
document.body.prepend(navbarContainer);
renderNavbar(navbarContainer);

// Animación de transparencia del navbar según el scroll
function updateNavbarBackground() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY === 0) {
    navbar.classList.add('navbar-transparent');
    navbar.classList.remove('navbar-solid');
  } else {
    navbar.classList.add('navbar-solid');
    navbar.classList.remove('navbar-transparent');
  }
}

window.addEventListener('scroll', updateNavbarBackground);
window.addEventListener('DOMContentLoaded', updateNavbarBackground);

// Crear y añadir hero directamente al body para que llegue hasta el top de la ventana
const hero = document.createElement('section');
hero.className = 'hero';
hero.innerHTML = `
  <div class="hero-content">
    <h1>Vive el lujo en Aragón</h1>
    <div class="hero-cta">
      <button class="btn-cta">Propiedades en Zaragoza</button>
      <button class="btn-cta">Residencias de montaña</button>
      <button class="btn-cta">Vendemos tu propiedad</button>
    </div>
  </div>
`;
// Insertar hero antes del contenedor #app para que quede arriba; si no existe, anexar al body
const appElement = document.querySelector('#app');
if (appElement && appElement.parentNode) {
  document.body.insertBefore(hero, appElement);
} else {
  document.body.appendChild(hero);
}

// Crear contenedor para el contenido principal (#app) y rellenarlo usando el renderer de la página
const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  renderHome(app);
}

// (no client-side route handling here; comprar is now a standalone page)

// Crear la sección areas-section fuera de #app para que ocupe todo el ancho
const areasSection = document.createElement('section');
areasSection.className = 'areas-section';
areasSection.innerHTML = `
  <div class="areas-inner">
    <p class="areas-subtitle">La ubicación es clave</p>
  <h2 class="areas-title lead">Descubra las <strong>mejores zonas de Aragón</strong> para vivir de lujo</h2>
    <p class="areas-desc">En Aragón compra tiempo, espacio y calma. Zaragoza destaca por su excelente comunicación con grandes ciudades como Madrid y Barcelona, y sus alrededores —Benasque, el valle de Tena, Ordesa y Monte Perdido— ofrecen impresionantes vistas y propiedades exclusivas en entornos de montaña.</p>
    <button class="cta-outline">EXPLORAR ZONAS</button>
  </div>
`;

// Insert the areas section immediately after the hero so it sits flush with it
// (previously it was inserted after #app which has padding and caused a gap).
if (hero && hero.parentNode) {
  hero.parentNode.insertBefore(areasSection, hero.nextSibling);
} else {
  document.body.appendChild(areasSection);
}

// Detect if hero title overflows its container on desktop and allow wrapping when needed.
// This prevents ellipsis and instead enables a clean line-break at word boundaries.
function updateHeroTitleWrapping() {
  const title = hero.querySelector('h1');
  if (!title) return;
  const isDesktop = window.innerWidth >= 900;
  // If desktop and the title's scrollWidth is greater than its clientWidth -> it overflows
  // If title fits within its client width, prefer nowrap; otherwise allow wrapping
  if (isDesktop && title.scrollWidth <= title.clientWidth) {
    document.body.classList.add('page-home--prefer-nowrap');
  } else {
    document.body.classList.remove('page-home--prefer-nowrap');
  }
}

// Run initially and on resize (debounced).
updateHeroTitleWrapping();
let _resizeTimer: number | null = null;
window.addEventListener('resize', () => {
  if (_resizeTimer) window.clearTimeout(_resizeTimer);
  // debounce 120ms
  _resizeTimer = window.setTimeout(() => {
    updateHeroTitleWrapping();
    _resizeTimer = null;
  }, 120) as unknown as number;
});
// Re-check after webfonts load (fonts can change measured width) and a short delay
if (document.fonts && typeof (document.fonts as any).ready !== 'undefined') {
  (document.fonts as any).ready.then(() => {
    updateHeroTitleWrapping();
    // extra safety in case fonts apply late
    setTimeout(updateHeroTitleWrapping, 250);
  });
} else {
  // fallback: schedule a delayed check
  setTimeout(updateHeroTitleWrapping, 300);
}

// Insert a video trailer section right after the areas section
const videoSection = document.createElement('section');
videoSection.className = 'trailer-section';
videoSection.innerHTML = `
  <div class="trailer-head">
    <p class="trailer-head-subtitle">Lumiere Key</p>
    <h2 class="trailer-head-title">Transformando el mercado inmobiliario en Aragón</h2>
  <p class="trailer-head-desc text-center mb-0">En Lumiere Key hemos transformado la forma de adquirir, vender e invertir en propiedades exclusivas en Aragón. Como una agencia joven y en constante expansión, nos enfocamos tanto en el mercado inmobiliario premium como en el dinámico estilo de vida que ofrece esta región. A través de estrategias de marketing innovadoras y un trato completamente personalizado, garantizamos que cada experiencia inmobiliaria en Aragón sea única y excepcional.</p>
  </div>
  <div class="trailer-wrap">
    <div class="trailer-poster" data-playing="false" aria-hidden="false">
      <div class="trailer-poster-bg" style="background-image:url('${trailerPoster}')" aria-hidden="true"></div>
      <!-- Play button removed per request: poster remains static and non-interactive -->
    </div>
    <!-- Video element intentionally removed so only the image is shown and no playback is possible -->
  </div>
`;

if (areasSection && areasSection.parentNode) {
  areasSection.parentNode.insertBefore(videoSection, areasSection.nextSibling);
} else {
  document.body.appendChild(videoSection);
}

// The trailer poster is intentionally static now: no play button, no video element
// and no event handlers are attached so the image cannot start any playback.

// Create and render footer at the end of the document
const footerContainer = document.createElement('div');
document.body.appendChild(footerContainer);
renderFooter(footerContainer);
