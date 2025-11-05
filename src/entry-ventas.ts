import './style.css';
import './viewport.ts';
import './styles/fonts.css';
import { renderNavbar } from './components/Navbar';
import { renderVentas } from './pages/ventas';
import { renderFooter } from './components/Footer';

const navbarContainer = document.createElement('div');
document.body.prepend(navbarContainer);
renderNavbar(navbarContainer);

function updateNavbarBackground() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY === 0) {
    navbar.classList.add('navbar-transparent');
    navbar.classList.remove('navbar-solid');
  } else {
    navbar.classList.add('navbar-solid');
    navbar.classList.remove('navbar-transparent');
  }
}

window.addEventListener('scroll', updateNavbarBackground);
window.addEventListener('DOMContentLoaded', updateNavbarBackground);

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

app.style.paddingTop = '0';
renderVentas(app, true);

const footerContainer = document.createElement('div');
document.body.appendChild(footerContainer);
renderFooter(footerContainer);
