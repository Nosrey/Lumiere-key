import{r as E,a as C}from"./Footer-CmTGjNd8.js";/* empty css              */const L="/Lumiere-key/assets/buys-hero-2zdr3T3d.jpg",k="/Lumiere-key/assets/buys-body-2-EsBlwMxj.jpeg",N="/Lumiere-key/assets/image-1-CccbALsx.jpeg",p="/Lumiere-key/assets/image-3-Da5xnIfQ.jpeg",S="/Lumiere-key/assets/buys-background-CWlf-FER.jpg";let n=null;function q(){n=document.createElement("div"),n.className="lk-modal-backdrop";const e=document.createElement("div");e.className="lk-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const r=document.createElement("div");r.className="modal-media";const o=document.createElement("div");o.className="modal-body";const t=document.createElement("button");return t.className="modal-close",t.innerHTML="✕",t.setAttribute("aria-label","Cerrar"),t.title="Cerrar",t.addEventListener("click",()=>l()),e.appendChild(r),e.appendChild(o),e.appendChild(t),n.appendChild(e),n.addEventListener("click",a=>{a.target===n&&l()}),document.addEventListener("keydown",b),n}function b(e){e.key==="Escape"&&l()}function M(e){if(n||q(),!n)return;const r=n.querySelector(".lk-modal"),o=r.querySelector(".modal-media"),t=r.querySelector(".modal-body");if(o.innerHTML="",e.imgSrc){const a=document.createElement("img");a.src=e.imgSrc,a.alt=e.title||"Imagen",o.appendChild(a)}if(t.innerHTML="",e.title){const a=document.createElement("h2");a.textContent=e.title,t.appendChild(a)}if(e.html){const a=document.createElement("div");a.innerHTML=e.html,t.appendChild(a)}document.body.appendChild(n)}function l(){n&&(n.parentNode&&n.parentNode.removeChild(n),n=null,document.removeEventListener("keydown",b))}function T(e,r=!1){e.innerHTML="";const o=document.createElement("section");o.className="comprar-hero",o.style.backgroundImage=`url('${L}')`,o.id="buy",o.innerHTML=`
    <div class="hero-inner">
      <h1>¿Sueña con tener una propiedad en Zaragoza?</h1>
      <p class="hero-sub">Nuestras propiedades de lujo y residencias exclusivas te esperan.</p>
      <div class="hero-cta">
        <button class="btn-primary contact-button">Contáctanos</button>
        <button class="btn-outline">Explorar listados</button>
      </div>
    </div>
  `;const t=document.createElement("section");t.className="comprar-body",t.style.backgroundImage=`url('${S}')`;const a=document.createElement("div");a.className="container comprar-body-inner";const s=document.createElement("div");s.className="comprar-content-inner",s.innerHTML=`
    <h2 class="lead">Tu tranquilidad es nuestra prioridad</h2>
    <p>Nuestros listados ofrecen una amplia gama de propiedades de lujo de alta gama, excepcionales como casas de vacaciones o residencia. Tu tranquilidad es nuestra prioridad.</p>
    <h3>¿Estás pensando en vender antes de comprar?</h3>
    <p>Si necesitas vender tu vivienda actual antes de adquirir la próxima, nos ocupamos de todo por ti. Consulta nuestra Guía de Venta para descubrir consejos útiles e información esencial sobre el proceso, y ponte en contacto con nosotros para dar el primer paso. Nuestro equipo de profesionales se encargará de que la transacción sea ágil y sin complicaciones, ayudándote a avanzar con seguridad hacia tu nuevo hogar.</p>
  `;const d=document.createElement("div");d.className="comprar-images",d.innerHTML=`
    <article class="listing-card">
      <div class="listing-media"><img src="${p}" alt="Propiedad 1" loading="lazy"/></div>
      <div class="listing-body">
        <h4>Villa en Zaragoza</h4>
        <p class="meta">4 hab · 3 baños · Zona: Centro</p>
        <div class="card-cta"><button class="btn-outline">Ver ficha</button></div>
      </div>
    </article>
    <article class="listing-card">
      <div class="listing-media"><img src="${k}" alt="Propiedad 2" loading="lazy"/></div>
      <div class="listing-body">
        <h4>Residencia de lujo</h4>
        <p class="meta">5 hab · 4 baños · Zona: Sierra</p>
        <div class="card-cta"><button class="btn-outline">Ver ficha</button></div>
      </div>
    </article>
  `,a.appendChild(s),a.appendChild(d),t.appendChild(a),r&&e.parentNode?e.parentNode.insertBefore(o,e):e.appendChild(o);const c=o.querySelector(".hero-inner");c&&c.hasAttribute("style")&&c.removeAttribute("style"),e.appendChild(t),e.querySelectorAll(".card-cta .btn-outline").forEach((h,u)=>{h.addEventListener("click",()=>{const f=["Villa en Zaragoza","Residencia de lujo"],m=[p,N];M({title:f[u]||"Ficha",imgSrc:m[u]||m[0],html:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p><p>Aliquam erat volutpat. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros.</p>"})})})}const v=document.createElement("div");document.body.prepend(v);E(v);function y(){const e=document.querySelector(".navbar");e&&(window.scrollY===0?(e.classList.add("navbar-transparent"),e.classList.remove("navbar-solid")):(e.classList.add("navbar-solid"),e.classList.remove("navbar-transparent")))}window.addEventListener("scroll",y);window.addEventListener("DOMContentLoaded",y);const i=document.createElement("div");i.id="app";document.body.appendChild(i);i.style.paddingTop="0";T(i,!0);const g=document.createElement("div");document.body.appendChild(g);C(g);
