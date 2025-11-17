//Bootstraps the app, loads router
import { initRouter } from "./router/router.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();

document.addEventListener("click", (e) => {
    const navLinks = document.getElementById("nav-links");

    if (e.target.closest("#burger-btn")) {
        navLinks.classList.toggle("show");
    }
    if (e.target.closest("#nav-links a")) {
        navLinks.classList.remove("show");
    }
});

initRouter();
