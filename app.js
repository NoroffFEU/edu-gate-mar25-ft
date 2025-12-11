//Bootstraps the app, loads router
import { initRouter } from "./router/router.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import studentResults, { selectPageNumber } from "./pages/student-results.js";
selectPageNumber();
 
document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();
document.getElementById("student-page").innerHTML = studentResults();



initRouter();
