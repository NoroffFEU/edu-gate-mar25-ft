//Bootstraps the app, loads router
import { initRouter } from "./router/router.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import SidebarTeaching from "./components/sidebar-teaching.js";
import SidebarAdmin from "./components/sidebar-admin.js";


document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();

const sidebarTeacherEl = document.getElementById("sidebarTeacher");
if (sidebarTeacherEl) {
  sidebarTeacherEl.innerHTML = SidebarTeaching();
}

const sidebarAdminEl = document.getElementById("sidebarAdmin");
if (sidebarAdminEl) {
  sidebarAdminEl.innerHTML = SidebarAdmin();
}

initRouter();
