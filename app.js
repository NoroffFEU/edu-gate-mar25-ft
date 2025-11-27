//Bootstraps the app, loads router
import { initRouter } from "./router/router.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import SidebarAdmin from "./components/sidebar-admin.js";
import SidebarTeaching from "./components/sidebar-teaching.js";



document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();
document.getElementById("sidebar").innerHTML = SidebarTeaching();
document.getElementById("sidebar-admin").innerHTML = SidebarAdmin();

initRouter();
