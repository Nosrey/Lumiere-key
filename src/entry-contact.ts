import './viewport.ts';
import { renderNavbar } from './components/Navbar';
import { renderContact } from './pages/contact';
import { renderFooter } from './components/Footer';

// Mount navbar
const navbarContainer = document.createElement('div');
navbarContainer.id = 'navbar-container';
document.body.insertBefore(navbarContainer, document.body.firstChild);
renderNavbar(navbarContainer);

// Mount main content
const app = document.getElementById('app') as HTMLDivElement;
if (app) {
  renderContact(app, true);
}

// Mount footer
const footerContainer = document.createElement('div');
footerContainer.id = 'footer-container';
document.body.appendChild(footerContainer);
renderFooter(footerContainer);
