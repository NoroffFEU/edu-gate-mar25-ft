import hamburgerBasic from "./hamburger-basic.js";
import hamburgerAdmin from "./hamburger-admin.js";
import hamburgerStudent from "./hamburger-student.js";
import hamburgerTeacher from "./hamburger-teacher.js";
import { getPath } from "../router/router.js";

const userRole = '';

let hamburgerMenuHTML = '';

switch(userRole) {
  case 'admin':
    hamburgerMenuHTML = hamburgerAdmin();
    break;
  case 'student':
    hamburgerMenuHTML = hamburgerStudent();
    break;
  case 'teacher':
    hamburgerMenuHTML = hamburgerTeacher();
    break;
  default:
    hamburgerMenuHTML = hamburgerBasic();
};


export default function Header() {
  window.addEventListener("DOMContentLoaded", () => {
    const currentPath = getPath();

    const navLinks = document.querySelectorAll('li a');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      // Check if href matches current path (handle both #/path and /path formats)
      const linkPath = href.startsWith('#') ? href.slice(1) : href;
      if (linkPath === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const hamburgerBtn = document.querySelector(".hamburgerMenu");
    const hamburgerPanel = document.querySelector(".hamburger-panel");
    const hamburgerClose = document.querySelector(".hamburger-close");

    hamburgerBtn?.addEventListener("click", () => {
    hamburgerPanel.classList.add("active");
    });

    hamburgerClose?.addEventListener("click", () => {
    hamburgerPanel.classList.remove("active");
    });

  });
  return /*HTML*/ `
    <a href="#/" data-link>Home</a> |
    <a href="#/login" data-link>Login</a> 
    <a href="#/student-profile" data-link>Student profile</a>
    <a href="#/"><img src="public/img/logo-header.png" class="headerLogo" alt="Home"></a>
    <nav>
    <ul>
      <li><a href="#/dashboard">Dashboard</a></li>
      <li><a href="#/about">About</a></li>
      <li><a href="#/contact">Contact</a></li>
      <li><a href="#/profile" class="removeHover"><img src="public/icons/user-circle.png" class="UserLogo"></a></li>
    </ul>
    </nav>
    <div class="hamburgerMenu" alt="menu"><img src="public/icons/hamburger-menu.png"></div>${hamburgerMenuHTML}
  `;
}
