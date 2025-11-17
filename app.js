//Bootstraps the app, loads router
import { initRouter } from "./router/router.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();

initRouter();
