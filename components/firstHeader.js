import { getPath } from "../router/router.js";

export default function Header() {
    window.addEventListener("DOMContentLoaded", () => {
        const currentPath = getPath();
    
        const navLinks = document.querySelectorAll('li a');
    
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          const linkPath = href.startsWith('#') ? href.slice(1) : href;
          if (linkPath === currentPath) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      });
    return /*HTML*/ `
      <a href="#/"><img src="public/img/logo-header.png" class="headerLogo"></a>
      <nav>
      <ul>
        <li><a href="#/about" class="firstHeader">About</a></li>
        <li><a href="#/contact" class="firstHeader">Contact</a></li>
      </ul>
      </nav>
      <div class="hamburgerMenu"><img src="public/icons/hamburger-menu.png"></div>
    `;
  }
