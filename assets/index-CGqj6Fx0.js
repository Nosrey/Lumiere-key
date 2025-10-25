(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(a){if(a.ep)return;a.ep=!0;const t=n(a);fetch(a.href,t)}})();const A="/Lumiere-key/assets/logo-DGPpP51Y.png";function N(e){e.innerHTML=`
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="${A}" alt="Lumiere Key logo" class="navbar-logo-image" />
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
  `;const o=e.querySelector(".navbar-toggle"),n=e.querySelector(".navbar-menu");if(o&&n){const u=Array.from(n.querySelectorAll("li[data-route]")),a=()=>{const r=window.location.pathname||"",i=r.split("/").pop()||"",v=window.location.hash||"";if(u.forEach(c=>c.classList.remove("active")),v==="#top"||r==="/"||r===""){n.querySelector('li[data-route="home"]')?.classList.add("active");return}u.forEach(c=>{const y=c.querySelector("a");if(!y)return;const L=(y.getAttribute("href")||"").split("/").pop()||"";if(L===i){c.classList.add("active");return}if((i===""||i==="/")&&L==="index.html"){c.classList.add("active");return}})};a(),window.addEventListener("popstate",a),u.forEach(r=>{const i=r.querySelector("a");i&&r.addEventListener("click",v=>{const c=v.target;c&&c.tagName.toLowerCase()==="a"||(v.preventDefault(),window.location.assign(i.href))})});const t=n.querySelector('li[data-route="home"] a');t&&t.addEventListener("click",()=>{n.classList.contains("open")&&(n.classList.remove("open"),o.setAttribute("aria-expanded","false"))});const s=e.querySelector(".navbar"),h=window.matchMedia("(max-width: 768px)"),p=()=>{s&&(window.scrollY>20?(s.classList.add("navbar-solid"),s.classList.remove("navbar-transparent")):(s.classList.remove("navbar-solid"),s.classList.add("navbar-transparent")))};p(),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),o.addEventListener("click",r=>{r.stopPropagation();const i=n.classList.toggle("open");o.setAttribute("aria-expanded",String(i)),h.matches&&(i?(s?.classList.add("navbar-solid"),s?.classList.remove("navbar-transparent")):p())}),document.addEventListener("click",r=>{!e.contains(r.target)&&n.classList.contains("open")&&(n.classList.remove("open"),o.setAttribute("aria-expanded","false"),h.matches&&p())}),document.addEventListener("keydown",r=>{r.key==="Escape"&&n.classList.contains("open")&&(n.classList.remove("open"),o.setAttribute("aria-expanded","false"),h.matches&&p())})}}function q(e){try{document.body.classList.add("page-home")}catch{}e.innerHTML=`
    <section class="intro-section">
      <div class="intro-inner container">
  <h2 class="intro-title">Proceso de publicación</h2>
  <p class="intro-text">En Lumiere Key combinamos análisis de mercado, presentación premium y difusión dirigida para posicionar su propiedad frente a compradores de alto nivel. Le asesoramos en valoración, estilismo y creación de contenido (fotografía profesional, vídeos y tours virtuales) para maximizar visibilidad y precio, acompañándole en cada paso del proceso.</p>

  <h2 class="intro-subtitle">Colección gestionada en exclusiva</h2>
        <p class="intro-text">Como referencia en el mercado de Zaragoza y Aragón, gestionamos una selección cuidada de residencias y fincas de alto standing. Cada inmueble recibe una estrategia comercial personalizada, acceso a una cartera selecta de compradores y condiciones de venta privilegiadas. Descubra propiedades únicas con la discreción y la eficacia que exige el segmento premium.</p>

        <div class="intro-cta">
          <button class="btn-primary">Explorar propiedades</button>
          <button class="btn-outline">Solicitar valoración privada</button>
        </div>
      </div>
    </section>
  `}const O="/Lumiere-key/assets/trailer-poster-Bm6cdYvO.jpg";function T(e){e.innerHTML=`
    <footer class="footer">
      <div class="container">
  <div class="contact">Av. Bulevar Príncipe Alfonso de Hohenlohe 269, Local 02 · 29602 Marbella, Málaga · <a href="mailto:contact@lumierekey.com">contact@lumierekey.com</a> · Tel: <a href="tel:+34951748888">+34 624 41 51 65</a></div>
  <div class="meta">© 2025 Lumiere Key SL · <a href="#">Privacy Policy</a> · <a href="#">Cookies Policy</a></div>
      </div>
    </footer>
  `}const E=document.createElement("div");document.body.prepend(E);N(E);function S(){const e=document.querySelector(".navbar");e&&(window.scrollY===0?(e.classList.add("navbar-transparent"),e.classList.remove("navbar-solid")):(e.classList.add("navbar-solid"),e.classList.remove("navbar-transparent")))}window.addEventListener("scroll",S);window.addEventListener("DOMContentLoaded",S);const d=document.createElement("section");d.className="hero";d.innerHTML=`
  <div class="hero-content">
    <h1>Vive el lujo en Aragón</h1>
    <div class="hero-cta">
      <button class="btn-cta">Propiedades en Zaragoza</button>
      <button class="btn-cta">Residencias de montaña</button>
      <button class="btn-cta">Vendemos tu propiedad</button>
    </div>
  </div>
`;const g=document.querySelector("#app");g&&g.parentNode?document.body.insertBefore(d,g):document.body.appendChild(d);const w=document.querySelector("#app");w&&q(w);const l=document.createElement("section");l.className="areas-section";l.innerHTML=`
  <div class="areas-inner">
    <p class="areas-subtitle">La ubicación es clave</p>
  <h2 class="areas-title lead">Descubra las <strong>mejores zonas de Aragón</strong> para vivir de lujo</h2>
    <p class="areas-desc">En Aragón compra tiempo, espacio y calma. Zaragoza destaca por su excelente comunicación con grandes ciudades como Madrid y Barcelona, y sus alrededores —Benasque, el valle de Tena, Ordesa y Monte Perdido— ofrecen impresionantes vistas y propiedades exclusivas en entornos de montaña.</p>
    <button class="cta-outline">EXPLORAR ZONAS</button>
  </div>
`;d&&d.parentNode?d.parentNode.insertBefore(l,d.nextSibling):document.body.appendChild(l);function m(){const e=d.querySelector("h1");if(!e)return;window.innerWidth>=900&&e.scrollWidth<=e.clientWidth?document.body.classList.add("page-home--prefer-nowrap"):document.body.classList.remove("page-home--prefer-nowrap")}m();let f=null;window.addEventListener("resize",()=>{f&&window.clearTimeout(f),f=window.setTimeout(()=>{m(),f=null},120)});document.fonts&&typeof document.fonts.ready<"u"?document.fonts.ready.then(()=>{m(),setTimeout(m,250)}):setTimeout(m,300);const b=document.createElement("section");b.className="trailer-section";b.innerHTML=`
  <div class="trailer-head">
    <p class="trailer-head-subtitle">Lumiere Key</p>
    <h2 class="trailer-head-title">Transformando el mercado inmobiliario en Aragón</h2>
  <p class="trailer-head-desc text-center mb-0">En Lumiere Key hemos transformado la forma de adquirir, vender e invertir en propiedades exclusivas en Aragón. Como una agencia joven y en constante expansión, nos enfocamos tanto en el mercado inmobiliario premium como en el dinámico estilo de vida que ofrece esta región. A través de estrategias de marketing innovadoras y un trato completamente personalizado, garantizamos que cada experiencia inmobiliaria en Aragón sea única y excepcional.</p>
  </div>
  <div class="trailer-wrap">
    <div class="trailer-poster" data-playing="false" aria-hidden="false">
      <div class="trailer-poster-bg" style="background-image:url('${O}')" aria-hidden="true"></div>
      <!-- Play button removed per request: poster remains static and non-interactive -->
    </div>
    <!-- Video element intentionally removed so only the image is shown and no playback is possible -->
  </div>
`;l&&l.parentNode?l.parentNode.insertBefore(b,l.nextSibling):document.body.appendChild(b);const x=document.createElement("div");document.body.appendChild(x);T(x);
