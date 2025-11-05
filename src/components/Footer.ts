import './Footer.css';
import { openModal } from './Modal';

export function renderFooter(container: HTMLElement) {
  container.innerHTML = `
    <footer class="footer">
      <div class="container">
  <div class="contact"><a href="mailto:contacto@lkbrokers.es">contacto@lkbrokers.es</a> · Tel: <a href="tel:+34624415165">+34 624 41 51 65</a></div>
  <div class="meta">© 2025 Lumiere Key ·  Zaragoza - España · <a href="#" data-modal="privacy">Política de privacidad</a> · <a href="#" data-modal="cookies">Política de cookies</a></div>
      </div>
    </footer>
  `;

  // Attach handler to open privacy modal when clicked
  const privacyLink = container.querySelector('[data-modal="privacy"]') as HTMLAnchorElement | null;
  if (privacyLink) {
    privacyLink.addEventListener('click', (ev) => {
      ev.preventDefault();
      // Reuse the same privacy HTML used in Navbar (define here to keep Footer standalone)
      const privacyHtml = `
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
      `;

      openModal({ title: 'Política de privacidad', html: privacyHtml });
    });
  }

  // Attach handler for cookies policy
  const cookiesLink = container.querySelector('[data-modal="cookies"]') as HTMLAnchorElement | null;
  if (cookiesLink) {
    cookiesLink.addEventListener('click', (ev) => {
      ev.preventDefault();
      const cookieHtml = `
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
      `;

      openModal({ title: 'Política de cookies', html: cookieHtml });
    });
  }
}
