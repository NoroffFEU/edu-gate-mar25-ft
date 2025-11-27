// views
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Login from "../pages/login.js";
import AdminDashboard from "../pages/admin-dashboard.js";

const routes = [
  { path: "/", view: Home },
  { path: "/about", view: About },
  { path: "/login", view: Login },
  { path: "/admin-dashboard", view: AdminDashboard },
];

export default routes;
