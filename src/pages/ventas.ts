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
      <h1>Venda su propiedad con Lumiere Key</h1>
      <p class="hero-sub">Sabemos que vender su hogar es una decisión importante. Permítanos acompañarle.</p>
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
  // add text-justify so paragraph text on the ventas page is justified
  contentInner.className = 'comprar-content-inner text-justify';
  // Build a richer layout by splitting text into semantically grouped blocks
  contentInner.innerHTML = `
    <section class="ventas-intro">
      <h2 class="lead">Sabemos que vender su hogar es una decisión importante</h2>
      <p>El siguiente paso consiste en elegir la agencia adecuada para representar su propiedad. Aunque pueda parecer razonable trabajar con varios agentes a la vez, le invitamos a considerar lo siguiente: sin una agencia verdaderamente comprometida con su éxito, ¿su propiedad recibirá la atención exclusiva y el cuidado personalizado que realmente merece?</p>
    </section>

    <section class="ventas-marketing">
      <div class="col text full-width">
        <h3>¡Nuestro marketing!</h3>
      </div>
    </section>

    <section class="ventas-steps">
      <article class="ventas-step">
        <div class="ventas-step-content">
          <h4><span class="ventas-step-number">1</span> - Estrategia de Marketing</h4>
          <p>Nuestro trabajo no es solo enseñar casas, sino también crear una estrategia de venta clara y efectiva. Definimos un plan SMART (específico, medible, alcanzable, realista y con plazos).</p>
          <p>Preparamos un discurso atractivo que destaque lo que hace única su propiedad.</p>
          <p>Nos apoyamos en contenidos profesionales:</p>
          <ul>
            <li>Fotos y vídeos de alta calidad.</li>
            <li>Material pensado para redes sociales y portales inmobiliarios.</li>
          </ul>
        </div>
        <div class="ventas-step-media"><img src="${ventas2}" alt="Marketing visual" loading="lazy"/></div>
      </article>

      <article class="ventas-step">
        <div class="ventas-step-media"><img src="${ventas3}" alt="Publicación y promoción" loading="lazy"/></div>
        <div class="ventas-step-content">
          <h4><span class="ventas-step-number">2</span> - Publicación y Promoción</h4>
          <p>Una vez tengamos el material listo, publicamos y damos visibilidad de su inmueble en:</p>
          <ul>
            <li>Nuestra web se encuentra posicionada y actualizada. Contamos con nuestra propia red de compradores e interesados en comprar.</li>
            <li>Portales inmobiliarios: Idealista, Fotocasa, Habitaclia, etc.</li>
            <li>CRM interno (Customer Relationship Management) para seguimiento de los clientes.</li>
          </ul>
          <p>Campañas digitales en: LinkedIn (inversores y profesionales), Facebook (público amplio) e Instagram (impacto visual).</p>
        </div>
      </article>

      <article class="ventas-step">
        <div class="ventas-step-content">
          <h4><span class="ventas-step-number">3</span> - Contacto y Visitas</h4>
          <p>Cuando hay interés en la propiedad:</p>
          <ul>
            <li>Participamos en jornadas de puertas abiertas para interesados y posibles compradores.</li>
            <li>Coordinamos visitas privadas con compradores ya dispuestos a lanzar primeras ofertas tras primeras visitas.</li>
            <li>Escuchamos con atención al comprador y adaptamos nuestro discurso de acuerdo a sus necesidades.</li>
            <li>Generamos sensación de exclusividad: esto nos hace únicos y diferenciadores.</li>
          </ul>
        </div>
        <div class="ventas-step-media"><img src="${ventas4}" alt="Visitas" loading="lazy"/></div>
      </article>

      <article class="ventas-step">
        <div class="ventas-step-media"><img src="${ventas5}" alt="Seguimiento y ajustes" loading="lazy"/></div>
        <div class="ventas-step-content">
          <h4><span class="ventas-step-number">4</span> - Seguimiento y Ajustes</h4>
          <p>Si después de 2-3 meses no hay resultados, nos encargamos de analizar y ajustar factores clave:</p>
          <ul>
            <li>Ajustes en el precio — comprobaremos si el precio es realmente competitivo.</li>
            <li>Mejoraremos la presentación (fotos, decoración, puesta en escena, entre otras).</li>
            <li>Identificaremos las áreas precisas que necesiten mejoras según la escucha activa de los compradores potenciales y la respuesta general del mercado.</li>
          </ul>
        </div>
      </article>

      <article class="ventas-step">
        <div class="ventas-step-content">
          <h4><span class="ventas-step-number">5</span> - Cierre de la Venta</h4>
          <ul>
            <li>Cuando nos llegue una oferta: le informamos inmediatamente.</li>
            <li>Aseguramos la firma del contrato de reserva.</li>
            <li>Contrato de arras: el comprador entrega 10% como señal.</li>
            <li>Finalmente, acompañamos al propietario a notaría para el pago del 90 % restante y la entrega de llaves.</li>
          </ul>
        </div>
        <div class="ventas-step-media"><img src="${ventas1}" alt="Cierre" loading="lazy"/></div>
      </article>
    </section>
  `;

  // Append main content container (no additional listing image)
  innerContainer.appendChild(contentInner);
  bodyWrap.appendChild(innerContainer);

  if (mountHeroOutside && app.parentNode) {
    app.parentNode.insertBefore(hero, app);
  } else {
    app.appendChild(hero);
  }

  app.appendChild(bodyWrap);
}

export const ventasImages = { ventas1, ventas2, ventas3, ventas4, ventas5 };
