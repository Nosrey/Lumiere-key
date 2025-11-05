import '../styles/fonts.css';
import '../style.css';
import buysHero from '../assets/buys/buys-hero.jpg';
import buysBody2 from '../assets/buys/buys-body-2.jpeg';
import buysBody2b from '../assets/buys/buys-body-2b.jpg';
import buysBody from '../assets/buys/buys-body.jpg';
import buysBg from '../assets/buys/buys-background.jpg';
import { openModal } from '../components/Modal';
// footer is appended by the page entry (entry-comprar.ts)

export function renderComprar(app: HTMLDivElement, mountHeroOutside = false) {
  // ensure #app is empty before rendering the comprar page
  app.innerHTML = '';
  // Hero
  const hero = document.createElement('section');
  hero.className = 'comprar-hero';
  hero.style.backgroundImage = `url('${buysHero}')`;
  hero.id = 'buy';
  hero.innerHTML = `
    <div class="hero-inner">
      <h1>¿Sueña con tener una propiedad en Zaragoza?</h1>
      <p class="hero-sub">Nuestras propiedades de lujo y residencias exclusivas te esperan.</p>
      <div class="hero-cta">
        <button class="btn-primary contact-button">Contáctenos</button>
        <button class="btn-outline">Explorar listados</button>
      </div>
    </div>
  `;

  // Main content wrapped in a single parent that will carry the subtle background
  const bodyWrap = document.createElement('section');
  bodyWrap.className = 'comprar-body';
  bodyWrap.style.backgroundImage = `url('${buysBg}')`;

  // inner container keeps content centered while bodyWrap is full-bleed
  const innerContainer = document.createElement('div');
  innerContainer.className = 'container comprar-body-inner';

  const contentInner = document.createElement('div');
  // justify paragraph text on the comprar (buy) page
  contentInner.className = 'comprar-content-inner text-justify';
  contentInner.innerHTML = `
  <h2 class="lead">Su tranquilidad es nuestra prioridad</h2>
  <p>Nuestros listados ofrecen una amplia gama de propiedades de lujo de alta gama, excepcionales como casas de vacaciones o residencia. Su tranquilidad es nuestra prioridad.</p>
    <!-- Inline style with !important to override global/media-query rules that reduce h3 size -->
    <h3 class="comprar-spaced" style="font-size:2.2rem !important; line-height:1.15 !important; font-weight:700 !important;">¿Está pensando en vender antes de comprar?</h3>
    <p>Si necesita vender su vivienda actual antes de adquirir la próxima, nos ocupamos de todo por usted. Consulte nuestra Guía de Venta para descubrir consejos útiles e información esencial sobre el proceso, y póngase en contacto con nosotros para dar el primer paso. Nuestro equipo de profesionales se encargará de que la transacción sea ágil y sin complicaciones, ayudándole a avanzar con seguridad hacia su nuevo hogar.</p>
  `;

  // Listings rendered as cards with image, meta and CTA
  const images = document.createElement('div');
  images.className = 'comprar-images';
  images.innerHTML = `
    <article class="listing-card">
      <div class="listing-media"><img src="${buysBody}" alt="Propiedad 1" loading="lazy"/></div>
      <div class="listing-body">
        <h4>Villa en Zaragoza</h4>
        <p class="meta">4 hab · 3 baños · Zona: Centro</p>
        <div class="card-cta"><button class="btn-outline">Ver ficha</button></div>
      </div>
    </article>
    <article class="listing-card">
      <div class="listing-media"><img src="${buysBody2}" alt="Propiedad 2" loading="lazy"/></div>
      <div class="listing-body">
        <h4>Residencia de lujo</h4>
        <p class="meta">5 hab · 4 baños · Zona: Sierra</p>
        <div class="card-cta"><button class="btn-outline">Ver ficha</button></div>
      </div>
    </article>
  `;

  innerContainer.appendChild(contentInner);
  innerContainer.appendChild(images);
  bodyWrap.appendChild(innerContainer);

  if (mountHeroOutside && app.parentNode) {
    // insert hero before the #app element so it reaches the top of the page
    app.parentNode.insertBefore(hero, app);
  } else {
    app.appendChild(hero);
  }

  // Remove any accidental inline styles on the hero-inner (e.g. from devtools)
  // without removing the hero backgroundImage which is set on the hero element itself.
  const heroInnerEl = hero.querySelector('.hero-inner') as HTMLElement | null;
  if (heroInnerEl && heroInnerEl.hasAttribute('style')) {
    heroInnerEl.removeAttribute('style');
  }

  app.appendChild(bodyWrap);

  // Attach modal handlers to card buttons
  const buttons = app.querySelectorAll('.card-cta .btn-outline');
  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
  const titles = ['Villa en Zaragoza', 'Residencia de lujo'];
  // Use the specific secondary body image (buys-body-2b.jpg) for the second listing
  const imgs = [buysBody, buysBody2b];
      openModal({
        title: titles[idx] || 'Ficha',
        imgSrc: imgs[idx] || imgs[0],
        html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p><p>Aliquam erat volutpat. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros.</p>`
      });
    });
  });
}

// Optional: export image URLs for tests or other modules
export const comprarImages = { buysHero, buysBody };