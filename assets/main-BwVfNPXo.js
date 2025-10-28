import{r as u,a as v}from"./Footer-Cr0BdTaO.js";function b(e){try{document.body.classList.add("page-home")}catch{}e.innerHTML=`
    <section class="intro-section">
      <div class="intro-inner container text-justify">
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
  `}const y="/Lumiere-key/assets/ventas-1-Bm6cdYvO.jpg",d="/Lumiere-key/assets/header-1-b5oQd-1l.gif",l=document.createElement("div");document.body.prepend(l);u(l);function m(){const e=document.querySelector(".navbar");e&&(window.scrollY===0?(e.classList.add("navbar-transparent"),e.classList.remove("navbar-solid")):(e.classList.add("navbar-solid"),e.classList.remove("navbar-transparent")))}window.addEventListener("scroll",m);window.addEventListener("DOMContentLoaded",m);const a=document.createElement("section");a.className="hero";a.innerHTML=`
  <div class="hero-content">
    <h1>Vive el lujo en Aragón</h1>
    <div class="hero-cta">
      <button class="btn-cta">Propiedades en Zaragoza</button>
      <button class="btn-cta">Residencias de montaña</button>
      <button class="btn-cta">Vendemos tu propiedad</button>
    </div>
  </div>
`;const r=document.querySelector("#app");r&&r.parentNode?document.body.insertBefore(a,r):document.body.appendChild(a);try{const e=new Image;e.src=d,e.onload=()=>{try{a.style.setProperty("--hero-bg",`url('${d}')`),a.classList.add("hero--gif-ready")}catch{}}}catch{}const c=document.querySelector("#app");c&&b(c);const n=document.createElement("section");n.className="areas-section";n.innerHTML=`
  <div class="areas-inner text-justify">
    <p class="areas-subtitle">La ubicación es clave</p>
  <h2 class="areas-title lead">Descubra las mejores zonas de Aragón.</h2>
    <p class="areas-desc">En Aragón se compra la tierra y por ende el tiempo, el espacio y la calma. Zaragoza destaca por su excelente comunicación con grandes ciudades como Madrid y Barcelona, y sus alrededores como el valle de Tena, Ordesa y Monte Perdido, ofrece impresionantes vistas y propiedades exclusivas en entornos de montaña.</p>
    <button class="cta-outline">EXPLORAR ZONAS</button>
  </div>
`;a&&a.parentNode?a.parentNode.insertBefore(n,a.nextSibling):document.body.appendChild(n);function t(){const e=a.querySelector("h1");if(!e)return;window.innerWidth>=900&&e.scrollWidth<=e.clientWidth?document.body.classList.add("page-home--prefer-nowrap"):document.body.classList.remove("page-home--prefer-nowrap")}t();let o=null;window.addEventListener("resize",()=>{o&&window.clearTimeout(o),o=window.setTimeout(()=>{t(),o=null},120)});document.fonts&&typeof document.fonts.ready<"u"?document.fonts.ready.then(()=>{t(),setTimeout(t,250)}):setTimeout(t,300);const i=document.createElement("section");i.className="trailer-section";i.innerHTML=`
  <div class="trailer-head">
    <p class="trailer-head-subtitle">Lumiere Key</p>
    <h2 class="trailer-head-title">Transformando el mercado inmobiliario en Aragón</h2>
  <p class="trailer-head-desc text-center mb-0">En Lumiere Key hemos transformado la forma de adquirir, vender e invertir en propiedades exclusivas en Aragón. Como una agencia joven y en constante expansión, nos enfocamos tanto en el mercado inmobiliario premium como en el dinámico estilo de vida que ofrece esta región. A través de estrategias de marketing innovadoras y un trato completamente personalizado, garantizamos que cada experiencia inmobiliaria en Aragón sea única y excepcional.</p>
  </div>
  <div class="trailer-wrap">
    <div class="trailer-poster" data-playing="false" aria-hidden="false">
      <div class="trailer-poster-bg" style="background-image:url('${y}')" aria-hidden="true"></div>
      <!-- Play button removed per request: poster remains static and non-interactive -->
    </div>
    <!-- Video element intentionally removed so only the image is shown and no playback is possible -->
  </div>
`;n&&n.parentNode?n.parentNode.insertBefore(i,n.nextSibling):document.body.appendChild(i);const p=document.createElement("div");document.body.appendChild(p);v(p);
