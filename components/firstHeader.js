export default function Header() {
    window.addEventListener("DOMContentLoaded", () => {
        const currentPath = window.location.pathname;
    
        const navLinks = document.querySelectorAll('li a');
    
        navLinks.forEach(link => {
          if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      });
    return /*HTML*/ `
      <a href="/"><img src="public/img/logo-header.png" class="headerLogo"></a>
      <nav>
      <ul>
        <li><a href="/about" class="firstHeader">About</a></li>
        <li><a href="/contact" class="firstHeader">Contact</a></li>
      </ul>
      </nav>
      <div class="hamburgerMenu"><img src="public/icons/hamburger-menu.png"></div>
    `;
  }
