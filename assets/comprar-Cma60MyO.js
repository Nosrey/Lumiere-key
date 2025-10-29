import{o as y,r as h,a as f}from"./Footer-DMdW5SUs.js";/* empty css              */const L="/Lumiere-key/assets/buys-hero-2zdr3T3d.jpg",C="/Lumiere-key/assets/buys-body-2-EsBlwMxj.jpeg",E="/Lumiere-key/assets/image-1-CccbALsx.jpeg",l="/Lumiere-key/assets/image-3-Da5xnIfQ.jpeg",j="/Lumiere-key/assets/buys-background-CWlf-FER.jpg";function N(e,b=!1){e.innerHTML="";const a=document.createElement("section");a.className="comprar-hero",a.style.backgroundImage=`url('${L}')`,a.id="buy",a.innerHTML=`
    <div class="hero-inner">
      <h1>¿Sueña con tener una propiedad en Zaragoza?</h1>
      <p class="hero-sub">Nuestras propiedades de lujo y residencias exclusivas te esperan.</p>
      <div class="hero-cta">
        <button class="btn-primary contact-button">Contáctenos</button>
        <button class="btn-outline">Explorar listados</button>
      </div>
    </div>
  `;const s=document.createElement("section");s.className="comprar-body",s.style.backgroundImage=`url('${j}')`;const n=document.createElement("div");n.className="container comprar-body-inner";const r=document.createElement("div");r.className="comprar-content-inner text-justify",r.innerHTML=`
    <h2 class="lead">Su tranquilidad es nuestra prioridad</h2>
    <p>Nuestros listados ofrecen una amplia gama de propiedades de lujo de alta gama, excepcionales como casas de vacaciones o residencia. Su tranquilidad es nuestra prioridad.</p>
    <h3>¿Está pensando en vender antes de comprar?</h3>
    <p>Si necesita vender su vivienda actual antes de adquirir la próxima, nos ocupamos de todo por usted. Consulte nuestra Guía de Venta para descubrir consejos útiles e información esencial sobre el proceso, y póngase en contacto con nosotros para dar el primer paso. Nuestro equipo de profesionales se encargará de que la transacción sea ágil y sin complicaciones, ayudándole a avanzar con seguridad hacia su nuevo hogar.</p>
  `;const o=document.createElement("div");o.className="comprar-images",o.innerHTML=`
    <article class="listing-card">
      <div class="listing-media"><img src="${l}" alt="Propiedad 1" loading="lazy"/></div>
      <div class="listing-body">
        <h4>Villa en Zaragoza</h4>
        <p class="meta">4 hab · 3 baños · Zona: Centro</p>
        <div class="card-cta"><button class="btn-outline">Ver ficha</button></div>
      </div>
    </article>
    <article class="listing-card">
      <div class="listing-media"><img src="${C}" alt="Propiedad 2" loading="lazy"/></div>
      <div class="listing-body">
        <h4>Residencia de lujo</h4>
        <p class="meta">5 hab · 4 baños · Zona: Sierra</p>
        <div class="card-cta"><button class="btn-outline">Ver ficha</button></div>
      </div>
    </article>
  `,n.appendChild(r),n.appendChild(o),s.appendChild(n),b&&e.parentNode?e.parentNode.insertBefore(a,e):e.appendChild(a);const i=a.querySelector(".hero-inner");i&&i.hasAttribute("style")&&i.removeAttribute("style"),e.appendChild(s),e.querySelectorAll(".card-cta .btn-outline").forEach((v,d)=>{v.addEventListener("click",()=>{const g=["Villa en Zaragoza","Residencia de lujo"],c=[l,E];y({title:g[d]||"Ficha",imgSrc:c[d]||c[0],html:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p><p>Aliquam erat volutpat. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros.</p>"})})})}const u=document.createElement("div");document.body.prepend(u);h(u);function p(){const e=document.querySelector(".navbar");e&&(window.scrollY===0?(e.classList.add("navbar-transparent"),e.classList.remove("navbar-solid")):(e.classList.add("navbar-solid"),e.classList.remove("navbar-transparent")))}window.addEventListener("scroll",p);window.addEventListener("DOMContentLoaded",p);const t=document.createElement("div");t.id="app";document.body.appendChild(t);t.style.paddingTop="0";N(t,!0);const m=document.createElement("div");document.body.appendChild(m);f(m);
