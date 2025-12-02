// views
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Login from "../pages/login.js";
import Signup, { initSignupForm } from "../pages/signup.js";
import TeacherDashboard from "../pages/teacher-dashboard.js";
import AdminDashboard from "../pages/admin-dashboard.js";
import Registration from "../pages/registration.js";

const routes = [
 { path: "/", view: Home },
 { path: "/about", view: About },
 { path: "/login", view: Login },
 { path: "/admin-dashboard", view: AdminDashboard },
 { path: "/registration", view: Registration },
 { path: "/signup", view: Signup, afterRender: initSignupForm },
 { path: "/teacher-dashboard", view: TeacherDashboard },
 { path: "/admin-dashboard", view: AdminDashboard },
];

export default routes;
