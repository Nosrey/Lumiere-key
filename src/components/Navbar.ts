import './Navbar.css';
import logo from '../assets/logo.png';
import { openModal } from './Modal';

export function renderNavbar(container: HTMLElement) {
  container.innerHTML = `
    <nav class="navbar">
      <a href="index.html" class="navbar-logo" aria-label="Ir a inicio">
        <img src="${logo}" alt="Lumiere Key logo" class="navbar-logo-image" />
        <span class="navbar-logo-text">
          <span>Lumiere</span>
          <span>Key</span>
        </span>
      </a>
      <button class="navbar-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span class="hamburger" aria-hidden="true"></span>
      </button>
      <ul class="navbar-menu">
  <!-- Normal link navigation (use relative paths so dev and build both work) -->
  <li data-route="home"><a href="index.html">INICIO</a></li>
  <li data-route="comprar"><a href="comprar.html">COMPRAR</a></li>
  <li data-route="ventas"><a href="ventas.html">VENTAS</a></li>
  <li data-route="about"><a href="about.html">SOBRE NOSOTROS</a></li>
  <li data-route="contacto"><a href="contact.html">CONTACTO</a></li>
  <li class="navbar-phone"><a href="tel:+34624415165">+34 624 41 51 65</a></li>
      </ul>
    </nav>
  `;

  // Hook up the toggle button for mobile
  const toggle = container.querySelector('.navbar-toggle') as HTMLButtonElement | null;
  const menu = container.querySelector('.navbar-menu') as HTMLElement | null;

  if (toggle && menu) {
    // Wire up basic navigation behaviour: scroll to top for INICIO and
    // highlight the active menu item based on current location.
    const menuItems = Array.from(menu.querySelectorAll('li[data-route]')) as HTMLLIElement[];

    const setActiveByRoute = () => {
      const path = window.location.pathname || '';
      const currentFile = path.split('/').pop() || '';
      const hash = window.location.hash || '';

      // clear previous
      menuItems.forEach((li) => li.classList.remove('active'));

      // If hash contains top or path is root, mark home active
      if (hash === '#top' || path === '/' || path === '') {
        const home = menu.querySelector('li[data-route="home"]') as HTMLLIElement | null;
        home?.classList.add('active');
        return;
      }

      // More robust: compare the anchor href filename with current filename
      menuItems.forEach((li) => {
        const a = li.querySelector('a') as HTMLAnchorElement | null;
        if (!a) return;
        const href = a.getAttribute('href') || '';
        const hrefFile = href.split('/').pop() || '';

        // Exact match (e.g. contact.html === contact.html)
        if (hrefFile === currentFile) {
          li.classList.add('active');
          return;
        }

        // Special-case: index.html should be active for root
        if ((currentFile === '' || currentFile === '/') && hrefFile === 'index.html') {
          li.classList.add('active');
          return;
        }
      });
    };

  // Initial active state
  setActiveByRoute();

    // When navigation occurs, update active state
    window.addEventListener('popstate', setActiveByRoute);

    // Make each whole menu item clickable (improves tapping accuracy)
    menuItems.forEach((li) => {
      const a = li.querySelector('a') as HTMLAnchorElement | null;
      if (!a) return;

      // If user clicks the LI (not precisely the anchor), navigate to the anchor href.
      li.addEventListener('click', (ev) => {
        // allow clicks on interactive children to behave normally
        const target = ev.target as HTMLElement | null;
        if (target && target.tagName.toLowerCase() === 'a') {
          // let the anchor handle the navigation
          return;
        }
        ev.preventDefault();
        // Use the raw href attribute (relative) so navigation works with Vite base
        const hrefAttr = a.getAttribute('href') || a.href;
        window.location.assign(hrefAttr);
      });
    });

    // Close mobile menu when clicking INICIO (navigation will happen naturally via href)
    const homeLink = menu.querySelector('li[data-route="home"] a') as HTMLAnchorElement | null;
    if (homeLink) {
      homeLink.addEventListener('click', () => {
        // If on mobile, close the menu after click
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
        // Let the natural navigation happen via href="/index.html"
      });
    }
    const nav = container.querySelector('.navbar') as HTMLElement | null;
    const mq = window.matchMedia('(max-width: 768px)');

    const updateNavbarSolid = () => {
      if (!nav) return;
      // Keep legacy behaviour: solid when scrolled down, transparent at top
      if (window.scrollY > 20) {
        nav.classList.add('navbar-solid');
        nav.classList.remove('navbar-transparent');
      } else {
        nav.classList.remove('navbar-solid');
        nav.classList.add('navbar-transparent');
      }
    };

    // Initial state
    updateNavbarSolid();

    // Update on scroll (passive)
    window.addEventListener('scroll', updateNavbarSolid, { passive: true });

    // Also recalc on resize so mobile/desktop logic stays consistent
    window.addEventListener('resize', updateNavbarSolid);

    toggle.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));

      // Mobile-only: if we open the menu while at top (transparent), force solid
      if (mq.matches) {
        if (isOpen) {
          nav?.classList.add('navbar-solid');
          nav?.classList.remove('navbar-transparent');
        } else {
          // Closed: restore based on scroll position
          updateNavbarSolid();
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!container.contains(e.target as Node) && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        // If we're on mobile, closing should restore transparency when at top
        if (mq.matches) updateNavbarSolid();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        if (mq.matches) updateNavbarSolid();
      }
    });

    // --- Política de privacidad: abrir modal en click ---
    const privacyHtml = `
      <p><strong>Introducción</strong></p>
      <p>En Lumiere Key ("nosotros", "nuestro") valoramos su privacidad. La presente Política de Privacidad explica qué datos recopilamos, con qué finalidad, la base legal para su tratamiento, cómo los protegemos y sus derechos en relación con esos datos.</p>

      <h3>Datos que recopilamos</h3>
      <p>Podemos recopilar y procesar los siguientes datos personales cuando usted interactúa con nuestro sitio o servicios:</p>
      <ul>
        <li>Datos de contacto: nombre, dirección de correo electrónico y teléfono cuando nos los facilita para consultas o contrataciones.</li>
        <li>Datos de navegación: información técnica sobre su dispositivo y navegación (por ejemplo IP, tipo de navegador, páginas visitadas) recogida mediante cookies y registros del servidor.</li>
        <li>Datos de transacción: información necesaria para procesar compras o servicios cuando proceda.</li>
      </ul>

      <h3>Finalidades y base legal</h3>
      <p>Utilizamos sus datos para:</p>
      <ul>
        <li>Responder a sus consultas y prestar servicios solicitados (ejecución contractual).</li>
        <li>Gestionar pedidos y facturación (ejecución contractual o interés legítimo).</li>
        <li>Cumplir obligaciones legales (por ejemplo, contabilidad y fiscalidad).</li>
        <li>Mejorar el sitio web y la experiencia de usuario mediante análisis (consentimiento o interés legítimo).</li>
      </ul>

      <h3>Cookies y tecnologías similares</h3>
      <p>Usamos cookies para recordar preferencias, ofrecer funcionalidades y analizar el uso del sitio. Puede gestionar o deshabilitar cookies desde su navegador; tenga en cuenta que algunas funciones pueden dejar de estar disponibles.</p>

      <h3>Cesión a terceros</h3>
      <p>No venderemos sus datos personales. Podemos compartir información con proveedores que prestan servicios (por ejemplo, alojamiento, pasarelas de pago) siempre que garanticen un nivel adecuado de protección y cumplan con sus obligaciones contractuales.</p>

      <h3>Seguridad</h3>
      <p>Implementamos medidas técnicas y organizativas razonables para proteger sus datos frente a accesos no autorizados, pérdida o alteración.</p>

      <h3>Conservación</h3>
      <p>Conservaremos sus datos el tiempo necesario para las finalidades indicadas y para cumplir obligaciones legales. Los criterios de conservación incluyen la duración del servicio contratado, necesidades administrativas y plazos legales aplicables.</p>

      <h3>Sus derechos</h3>
      <p>Usted tiene derecho a solicitar acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición al tratamiento de sus datos. Para ejercerlos, contacte con nosotros en <a href="mailto:contacto@lkbrokers.es">contacto@lkbrokers.es</a>. También puede presentar una reclamación ante la autoridad de control (por ejemplo, la AEPD en España).</p>

      <h3>Cambios en la política</h3>
      <p>Podemos actualizar esta política ocasionalmente. Publicaremos la versión vigente en nuestro sitio y, cuando proceda, le informaremos de cambios importantes.</p>

      <p><em>Última actualización: octubre de 2025.</em></p>
    `;

    // Attach click handler to any element that has data-modal="privacy"
    const modalTriggers = menu.querySelectorAll('[data-modal="privacy"]');
    modalTriggers.forEach((el) => {
      el.addEventListener('click', (ev) => {
        ev.preventDefault();
        openModal({ title: 'Política de privacidad', html: privacyHtml });
        // close mobile menu if open
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
}
