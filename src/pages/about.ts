import '../styles/fonts.css';
import '../style.css';
import about1 from '../assets/about-us/image-1.jpeg';
import about2 from '../assets/about-us/image-2.jpeg';
import about3 from '../assets/about-us/image-3.jpeg';
import about4 from '../assets/about-us/image-4.jpeg';

export function renderAbout(app: HTMLDivElement, mountHeroOutside = false) {
  app.innerHTML = '';

  // Hero section
  const hero = document.createElement('section');
  hero.className = 'comprar-hero';
  hero.style.backgroundImage = `url('${about1}')`;
  hero.id = 'about-hero';
  hero.innerHTML = `
    <div class="hero-inner">
      <h1>Sobre nosotros</h1>
      <p class="hero-sub">Lumiere Key nace de la unión entre dos caminos, el arte y la empresa. Dos emprendedores que decidimos crear una inmobiliaria, un camino iluminado hacia su hogar.</p>
    </div>
  `;

  // Main content section
  const bodyWrap = document.createElement('section');
  bodyWrap.className = 'comprar-body';
  bodyWrap.style.backgroundImage = `url('${about2}')`;

  const innerContainer = document.createElement('div');
  innerContainer.className = 'container comprar-body-inner about-content';

  const contentInner = document.createElement('div');
  // justify paragraph text inside about page sections
  contentInner.className = 'comprar-content-inner text-justify';
  contentInner.innerHTML = `
    <section class="about-intro">
      <h2 class="lead">Nuestra historia</h2>
      <p>Lumiere Key nace de la unión entre dos caminos, el arte y la empresa. Dos emprendedores que decidimos crear una inmobiliaria, un camino iluminado hacia tu hogar.</p>
    </section>

    <section class="about-team-grid">
      <div class="team-member">
        <h3>Kevin</h3>
        <div class="member-image">
          <img src="${about3}" alt="Kevin - Co-fundador" loading="lazy"/>
        </div>
        <div class="member-description">
          <p>Cuenta con un sólido recorrido empresarial de más de 8 años. Su espíritu emprendedor, capacidad de gestión, liderazgo y visión estratégica aportan a la empresa la estructura y el impulso necesario para que cada proyecto de Lumiere Key se desarrolle con actitud, óptima y resolutiva.</p>
        </div>
      </div>
      
      <div class="team-member">
        <h3>Luz</h3>
        <div class="member-image">
          <img src="${about4}" alt="Luz - Co-fundadora" loading="lazy"/>
        </div>
        <div class="member-description">
          <p>Ha forjado su carrera en el ámbito cinematográfico, con una amplia y reconocida trayectoria como guionista y directora de cine. Su experiencia en el campo artístico y su paso por el sector de ventas, le brinda una amplia visión en el ámbito empresarial, equilibrada, profesional y creativa.</p>
        </div>
      </div>
    </section>

    <section class="about-mission">
      <div class="mission-content">
        <h3>Nuestra misión</h3>
        <p class="mission-lead">⚜️​ Juntos formamos un equipo que combina creatividad, experiencia y profesionalidad. Creemos que encontrar un hogar no se trata solo de cerrar una operación, sino de abrir una puerta a nuevas etapas de vida.</p>
        <p class="mission-sub">⚜️​ En Lumiere Key, acompañamos a nuestros clientes con cercanía, transparencia y dedicación, porque entendemos que cada llave que entregamos ilumina una nueva historia.</p>
      </div>
    </section>
  `;

  innerContainer.appendChild(contentInner);
  bodyWrap.appendChild(innerContainer);

  if (mountHeroOutside && app.parentNode) {
    app.parentNode.insertBefore(hero, app);
  } else {
    app.appendChild(hero);
  }

  app.appendChild(bodyWrap);
}

export const aboutImages = { about1, about2, about3, about4 };
