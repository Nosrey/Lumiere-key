import '../styles/fonts.css';
import '../style.css';
import '../styles/ventas.css';
import ventas1 from '../assets/sells/ventas-1.jpg';
import ventas2 from '../assets/sells/ventas-2.jpg';
import ventas3 from '../assets/sells/ventas-3.jpg';
import ventas4 from '../assets/sells/ventas-4.jpg';
import ventas5 from '../assets/sells/ventas-5.jpg';

export function renderVentas(app: HTMLDivElement, mountHeroOutside = false) {
  app.innerHTML = '';

  const hero = document.createElement('section');
  hero.className = 'comprar-hero';
  hero.style.backgroundImage = `url('${ventas1}')`;
  hero.id = 'ventas-hero';
  hero.innerHTML = `
    <div class="hero-inner">
      <h1>Vender su propiedad con Lumiere Key</h1>
      <p class="hero-sub">Sabemos que vender tu hogar es una decisión importante. Permítanos acompañarle.</p>
      <div class="hero-cta">
        <button class="btn-primary contact-button">Contactar</button>
        <button class="btn-outline">Solicitar valoración</button>
      </div>
    </div>
  `;

  const bodyWrap = document.createElement('section');
  bodyWrap.className = 'comprar-body';
  bodyWrap.style.backgroundImage = `url('${ventas4}')`;

  const innerContainer = document.createElement('div');
  innerContainer.className = 'container comprar-body-inner';

  const contentInner = document.createElement('div');
  contentInner.className = 'comprar-content-inner';
  // Build a richer layout by splitting text into semantically grouped blocks
  contentInner.innerHTML = `
    <section class="ventas-intro">
      <h2 class="lead">Sabemos que vender tu hogar es una decisión importante</h2>
      <p>El siguiente paso consiste en elegir la agencia adecuada para representar tu propiedad. Aunque pueda parecer razonable trabajar con varios agentes a la vez, te invitamos a considerar lo siguiente: sin una agencia verdaderamente comprometida con tu éxito, ¿tu propiedad recibirá la atención exclusiva y el cuidado personalizado que realmente merece?</p>
    </section>

    <section class="ventas-marketing">
      <div class="col text full-width">
        <h3>¡Nuestro marketing!</h3>
        <p>En Lumiere Key, la colaboración es la esencia de todo lo que hacemos. Estamos convencidos de que, cuando los equipos trabajan en perfecta sintonía, los resultados son extraordinarios. Nuestro enfoque coordinado garantiza que los departamentos de marketing y ventas actúen de la mano, creando una estrategia integral pensada para mostrar su hogar en su mejor versión.</p>
      </div>
    </section>

    <section class="ventas-process two-column reverse">
      <div class="col media">
  <div class="comprar-content-bg"><img src="${ventas3}" alt="Estrategia de ventas" loading="lazy"/></div>
      </div>
      <div class="col text">
        <h3>Proceso personalizado</h3>
        <p>Desde el momento en que iniciamos, nuestro equipo se dedica sin descanso a diseñar un plan a medida que se alinee con sus objetivos y con las características únicas de su propiedad. Aprovechamos la experiencia de nuestros especialistas en marketing para desarrollar imágenes impactantes, campañas segmentadas y contenido persuasivo, mientras nuestro equipo comercial se enfoca en forjar relaciones sólidas con compradores potenciales. Así, cubrimos cada etapa del proceso, desde el anuncio inicial hasta la negociación final.</p>
        <p>¡Permítanos acompañarle en todo el recorrido!</p>
      </div>
    </section>

    <section class="ventas-listings">
      <h3>Listado recientemente por Lumiere Key</h3>
      <p>Combinamos un profundo conocimiento de las áreas clave de Aragón con una clara comprensión de lo que desean los vendedores. Nuestro enfoque está en crear propiedades que el mercado demanda, ya sea un apartamento de lujo, una casa adosada o una villa. Cada proyecto enfatiza el diseño atemporal y la calidad duradera, asegurando que su inversión resista la prueba del tiempo, tanto en estilo como en valor.</p>
    </section>
  `;

  // Add a final grid of recent listings with balanced thumbnails
  const images = document.createElement('div');
  images.className = 'comprar-images';
  images.innerHTML = `
    <div class="comprar-image-block">
      <img src="${ventas4}" alt="Listado destacado" loading="lazy" class="comprar-image-large" />
    </div>
  `;

  innerContainer.appendChild(contentInner);
  innerContainer.appendChild(images);
  bodyWrap.appendChild(innerContainer);

  // JS fallback: ensure the listing image block matches the inner container width
  // This forces horizontal centering even if other global rules interfere.
  const adjustListingImage = () => {
    try {
      const bodyInnerEl = innerContainer; // .comprar-body-inner
      const imageBlockEl = images.querySelector('.comprar-image-block') as HTMLElement | null;
      const imgEl = imageBlockEl ? imageBlockEl.querySelector('.comprar-image-large') as HTMLImageElement | null : null;
      if (bodyInnerEl && imageBlockEl && imgEl) {
        const bodyStyle = getComputedStyle(bodyInnerEl);
        const paddingLeft = parseFloat(bodyStyle.paddingLeft || '0') || 0;
        const paddingRight = parseFloat(bodyStyle.paddingRight || '0') || 0;
        const targetWidth = Math.max(0, bodyInnerEl.clientWidth - paddingLeft - paddingRight);
        imageBlockEl.style.width = targetWidth + 'px';
        imageBlockEl.style.margin = '0 auto';
        imgEl.style.width = '100%';
        imgEl.style.maxWidth = '100%';
      }
    } catch (e) {
      /* ignore */
    }
  };
  // Run once and on resize
  setTimeout(adjustListingImage, 50);
  window.addEventListener('resize', adjustListingImage);

  if (mountHeroOutside && app.parentNode) {
    app.parentNode.insertBefore(hero, app);
  } else {
    app.appendChild(hero);
  }

  app.appendChild(bodyWrap);
}

export const ventasImages = { ventas1, ventas2, ventas3, ventas4, ventas5 };
