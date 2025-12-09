//Bootstraps the app, loads router
import { initRouter } from "./router/router.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import hamburgerBasic from "./components/hamburger-basic.js";
import hamburgerAdmin from "./components/hamburger-admin.js";
import hamburgerStudent from "./components/hamburger-student.js";
import hamburgerTeacher from "./components/hamburger-teacher.js";


document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();
document.getElementById("hamburger-basic").innerHTML = hamburgerBasic();
document.getElementById("hamburger-admin").innerHTML = hamburgerAdmin();
document.getElementById("hamburger-student").innerHTML = hamburgerStudent();
document.getElementById("hamburger-teacher").innerHTML = hamburgerTeacher();

const hamburgerIcon = document.querySelector(".hamburgerMenu");
const hamburgerSidebar = document.querySelector(".hamburger-panel");
const hamburgerClose = document.querySelector(".hamburger-close");

hamburgerIcon.addEventListener("click", () => hamburgerSidebar.classList.add("active"));
hamburgerClose.addEventListener("click",()  => hamburgerSidebar.classList.remove("active"));

initRouter();
