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
    <a href="/login" data-link>Login</a> here
    <a href="/student-profile" data-link>Student profile</a>
  `;
}
