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
    <p>Header</p>
    <a href="/" data-link>Home</a> |
    <a href="/login" data-link>Login</a> 
    <a href="/student-profile" data-link>Student profile</a>
    <a href="/"><img src="public/img/logo-header.png" class="headerLogo"></a>
    <nav>
    <ul>
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/profile" class="removeHover"><img src="public/icons/user-circle.png" class="UserLogo"></a></li>
    </ul>
    </nav>
    <div class="hamburgerMenu"><img src="public/icons/hamburger-menu.png"></div>
  `;
}
