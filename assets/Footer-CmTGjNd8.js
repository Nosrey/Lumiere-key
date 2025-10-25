(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const v="/Lumiere-key/assets/logo-DGPpP51Y.png";function L(l){l.innerHTML=`
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="${v}" alt="Lumiere Key logo" class="navbar-logo-image" />
        <span class="navbar-logo-text">
          <span>Lumiere</span>
          <span>Key</span>
        </span>
      </div>
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
        <li class="navbar-phone">+34 624 41 51 65</li>
      </ul>
    </nav>
  `;const o=l.querySelector(".navbar-toggle"),a=l.querySelector(".navbar-menu");if(o&&a){const c=Array.from(a.querySelectorAll("li[data-route]")),e=()=>{const r=window.location.pathname||"",n=r.split("/").pop()||"",u=window.location.hash||"";if(c.forEach(i=>i.classList.remove("active")),u==="#top"||r==="/"||r===""){a.querySelector('li[data-route="home"]')?.classList.add("active");return}c.forEach(i=>{const f=i.querySelector("a");if(!f)return;const m=(f.getAttribute("href")||"").split("/").pop()||"";if(m===n){i.classList.add("active");return}if((n===""||n==="/")&&m==="index.html"){i.classList.add("active");return}})};e(),window.addEventListener("popstate",e),c.forEach(r=>{const n=r.querySelector("a");n&&r.addEventListener("click",u=>{const i=u.target;if(i&&i.tagName.toLowerCase()==="a")return;u.preventDefault();const f=n.getAttribute("href")||n.href;window.location.assign(f)})});const t=a.querySelector('li[data-route="home"] a');t&&t.addEventListener("click",()=>{a.classList.contains("open")&&(a.classList.remove("open"),o.setAttribute("aria-expanded","false"))});const s=l.querySelector(".navbar"),p=window.matchMedia("(max-width: 768px)"),d=()=>{s&&(window.scrollY>20?(s.classList.add("navbar-solid"),s.classList.remove("navbar-transparent")):(s.classList.remove("navbar-solid"),s.classList.add("navbar-transparent")))};d(),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),o.addEventListener("click",r=>{r.stopPropagation();const n=a.classList.toggle("open");o.setAttribute("aria-expanded",String(n)),p.matches&&(n?(s?.classList.add("navbar-solid"),s?.classList.remove("navbar-transparent")):d())}),document.addEventListener("click",r=>{!l.contains(r.target)&&a.classList.contains("open")&&(a.classList.remove("open"),o.setAttribute("aria-expanded","false"),p.matches&&d())}),document.addEventListener("keydown",r=>{r.key==="Escape"&&a.classList.contains("open")&&(a.classList.remove("open"),o.setAttribute("aria-expanded","false"),p.matches&&d())})}}function g(l){l.innerHTML=`
    <footer class="footer">
      <div class="container">
  <div class="contact">Av. Bulevar Príncipe Alfonso de Hohenlohe 269, Local 02 · 29602 Marbella, Málaga · <a href="mailto:contact@lumierekey.com">contact@lumierekey.com</a> · Tel: <a href="tel:+34951748888">+34 624 41 51 65</a></div>
  <div class="meta">© 2025 Lumiere Key SL · <a href="#">Privacy Policy</a> · <a href="#">Cookies Policy</a></div>
      </div>
    </footer>
  `}export{g as a,L as r};
