import './Footer.css';

export function renderFooter(container: HTMLElement) {
  container.innerHTML = `
    <footer class="footer">
      <div class="container">
  <div class="contact">Av. Bulevar Príncipe Alfonso de Hohenlohe 269, Local 02 · 29602 Marbella, Málaga · <a href="mailto:contact@lumierekey.com">contact@lumierekey.com</a> · Tel: <a href="tel:+34951748888">+34 624 41 51 65</a></div>
  <div class="meta">© 2025 Lumiere Key SL · <a href="#">Privacy Policy</a> · <a href="#">Cookies Policy</a></div>
      </div>
    </footer>
  `;
}
