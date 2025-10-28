(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const k="/Lumiere-key/assets/logo-DGPpP51Y.png";let n=null;function L(){n=document.createElement("div"),n.className="lk-modal-backdrop";const e=document.createElement("div");e.className="lk-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const s=document.createElement("div");s.className="modal-media";const a=document.createElement("div");a.className="modal-body";const r=document.createElement("div");r.className="lk-modal-header";const o=document.createElement("h2");o.className="lk-modal-title",r.appendChild(o);const i=document.createElement("button");return i.className="modal-close",i.innerHTML="✕",i.setAttribute("aria-label","Cerrar"),i.title="Cerrar",i.addEventListener("click",()=>h()),r.appendChild(i),e.appendChild(r),e.appendChild(s),e.appendChild(a),n.appendChild(e),n.addEventListener("click",t=>{t.target===n&&h()}),document.addEventListener("keydown",b),n}function b(e){e.key==="Escape"&&h()}function f(e){if(n||L(),!n)return;const s=n.querySelector(".lk-modal"),a=s.querySelector(".modal-media"),r=s.querySelector(".modal-body");if(a.innerHTML="",e.imgSrc){const t=document.createElement("img");t.src=e.imgSrc,t.alt=e.title||"Imagen",a.appendChild(t)}a.children.length===0?s.classList.add("no-media"):s.classList.remove("no-media"),r.innerHTML="";const o=s.querySelector(".lk-modal-title"),i=s.querySelector(".lk-modal-header");if(o&&(o.textContent=e.title||"",i&&(e.title?i.classList.remove("no-title"):i.classList.add("no-title"))),e.html){const t=document.createElement("div");t.innerHTML=e.html,r.appendChild(t)}document.body.appendChild(n)}function h(){n&&(n.parentNode&&n.parentNode.removeChild(n),n=null,document.removeEventListener("keydown",b))}function P(e){e.innerHTML=`
    <nav class="navbar">
      <a href="index.html" class="navbar-logo" aria-label="Ir a inicio">
        <img src="${k}" alt="Lumiere Key logo" class="navbar-logo-image" />
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
        <li class="navbar-phone">+34 624 41 51 65</li>
      </ul>
    </nav>
  `;const s=e.querySelector(".navbar-toggle"),a=e.querySelector(".navbar-menu");if(s&&a){const r=Array.from(a.querySelectorAll("li[data-route]")),o=()=>{const c=window.location.pathname||"",l=c.split("/").pop()||"",u=window.location.hash||"";if(r.forEach(d=>d.classList.remove("active")),u==="#top"||c==="/"||c===""){a.querySelector('li[data-route="home"]')?.classList.add("active");return}r.forEach(d=>{const m=d.querySelector("a");if(!m)return;const g=(m.getAttribute("href")||"").split("/").pop()||"";if(g===l){d.classList.add("active");return}if((l===""||l==="/")&&g==="index.html"){d.classList.add("active");return}})};o(),window.addEventListener("popstate",o),r.forEach(c=>{const l=c.querySelector("a");l&&c.addEventListener("click",u=>{const d=u.target;if(d&&d.tagName.toLowerCase()==="a")return;u.preventDefault();const m=l.getAttribute("href")||l.href;window.location.assign(m)})});const i=a.querySelector('li[data-route="home"] a');i&&i.addEventListener("click",()=>{a.classList.contains("open")&&(a.classList.remove("open"),s.setAttribute("aria-expanded","false"))});const t=e.querySelector(".navbar"),v=window.matchMedia("(max-width: 768px)"),p=()=>{t&&(window.scrollY>20?(t.classList.add("navbar-solid"),t.classList.remove("navbar-transparent")):(t.classList.remove("navbar-solid"),t.classList.add("navbar-transparent")))};p(),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),s.addEventListener("click",c=>{c.stopPropagation();const l=a.classList.toggle("open");s.setAttribute("aria-expanded",String(l)),v.matches&&(l?(t?.classList.add("navbar-solid"),t?.classList.remove("navbar-transparent")):p())}),document.addEventListener("click",c=>{!e.contains(c.target)&&a.classList.contains("open")&&(a.classList.remove("open"),s.setAttribute("aria-expanded","false"),v.matches&&p())}),document.addEventListener("keydown",c=>{c.key==="Escape"&&a.classList.contains("open")&&(a.classList.remove("open"),s.setAttribute("aria-expanded","false"),v.matches&&p())});const y=`
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
    `;a.querySelectorAll('[data-modal="privacy"]').forEach(c=>{c.addEventListener("click",l=>{l.preventDefault(),f({title:"Política de privacidad",html:y}),a.classList.contains("open")&&(a.classList.remove("open"),s.setAttribute("aria-expanded","false"))})})}}function S(e){e.innerHTML=`
    <footer class="footer">
      <div class="container">
  <div class="contact"><a href="mailto:contacto@lkbrokers.es">contacto@lkbrokers.es</a> · Tel: <a href="tel:+34951748888">+34 624 41 51 65</a></div>
  <div class="meta">© 2025 Lumiere Key SL · <a href="#" data-modal="privacy">Política de privacidad</a> · <a href="#" data-modal="cookies">Política de cookies</a></div>
      </div>
    </footer>
  `;const s=e.querySelector('[data-modal="privacy"]');s&&s.addEventListener("click",r=>{r.preventDefault(),f({title:"Política de privacidad",html:`
        <div class="text-justify">
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
        </div>
      `})});const a=e.querySelector('[data-modal="cookies"]');a&&a.addEventListener("click",r=>{r.preventDefault(),f({title:"Política de cookies",html:`
        <div class="text-justify">
        <p><strong>Política de cookies</strong></p>
        <p>Este sitio web utiliza cookies para mejorar su experiencia, analizar el uso del sitio y ofrecer funcionalidades adicionales. A continuación describimos los tipos de cookies que utilizamos y cómo gestionarlas.</p>

        <h3>¿Qué son las cookies?</h3>
        <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita. Permiten, por ejemplo, recordar sus preferencias o identificar el dispositivo para fines de análisis.</p>

        <h3>Tipos de cookies que usamos</h3>
        <ul>
          <li><strong>Necesarias:</strong> estrictamente necesarias para el funcionamiento del sitio (p. ej. mantener sesión, seguridad). No requieren consentimiento.</li>
          <li><strong>Funcionales:</strong> recuerdan preferencias y mejoran la experiencia (idioma, ajustes de visualización).</li>
          <li><strong>Analíticas:</strong> recogen información anónima sobre el uso del sitio (p. ej. páginas visitadas) para mejorar el servicio. Suele requerir consentimiento.</li>
          <li><strong>Publicidad / Marketing:</strong> utilizadas para mostrar anuncios relevantes y medir campañas. Requieren consentimiento explícito.</li>
        </ul>

        <h3>Gestión y revocación del consentimiento</h3>
        <p>Puede gestionar o bloquear cookies mediante la configuración de su navegador. Para eliminar cookies ya almacenadas, use las opciones de privacidad del navegador. Tenga en cuenta que deshabilitar cookies puede afectar al correcto funcionamiento de ciertas funcionalidades del sitio.</p>

        <h3>Cookies de terceros</h3>
        <p>Algunas funcionalidades, como mapas, videos o herramientas de análisis, pueden utilizar cookies proporcionadas por terceros que operan bajo sus propias políticas de privacidad. Le recomendamos revisar las políticas de esos proveedores si desea más información.</p>

        <h3>Duración</h3>
        <p>Las cookies pueden ser de sesión (se eliminan al cerrar el navegador) o persistentes (se mantienen según la duración establecida por la cookie).</p>

        <h3>Más información y contacto</h3>
        <p>Si tiene preguntas sobre el uso de cookies en este sitio, contacte con nosotros en <a href="mailto:contacto@lkbrokers.es">contacto@lkbrokers.es</a>.</p>

        <p><em>Última actualización: octubre de 2025.</em></p>
        </div>
      `})})}export{S as a,f as o,P as r};
