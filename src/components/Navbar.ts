import './Navbar.css';
import logo from '../assets/logo.png';

export function renderNavbar(container: HTMLElement) {
  container.innerHTML = `
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="${logo}" alt="Lumiere Key logo" class="navbar-logo-image" />
        <span class="navbar-logo-text">
          <span>Lumiere</span>
          <span>Key</span>
        </span>
      </div>
      <button class="navbar-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span class="hamburger" aria-hidden="true"></span>
      </button>
      <ul class="navbar-menu">
        <!-- Normal link navigation -->
        <li data-route="home"><a href="/index.html">INICIO</a></li>
        <li data-route="comprar"><a href="/comprar.html">COMPRAR</a></li>
        <li data-route="ventas"><a href="/ventas.html">VENTAS</a></li>
        <li data-route="about"><a href="/about.html">SOBRE NOSOTROS</a></li>
        <li data-route="contacto"><a href="/contact.html">CONTACTO</a></li>
        <li class="navbar-phone">+34 624 41 51 65</li>
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
        // Use location.assign to keep navigation behaviour consistent
        window.location.assign(a.href);
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
  }
}
