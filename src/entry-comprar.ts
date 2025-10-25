import './style.css';
import './styles/fonts.css';
import { renderNavbar } from './components/Navbar';
import { renderComprar } from './pages/comprar';
import { renderFooter } from './components/Footer';

// Render a standalone comprar page
const navbarContainer = document.createElement('div');
document.body.prepend(navbarContainer);
renderNavbar(navbarContainer);

// Animación de transparencia del navbar según el scroll (mismo comportamiento que en main.ts)
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

// remove the default top padding from #app so the hero sits flush with the content
app.style.paddingTop = '0';
renderComprar(app, true);

const footerContainer = document.createElement('div');
document.body.appendChild(footerContainer);
renderFooter(footerContainer);
