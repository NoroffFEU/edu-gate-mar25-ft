// views

import Home from '../pages/home.js'
import About from '../pages/about.js'
import Login from '../pages/login.js'
import StudentResults from '../pages/student-results.js'
import AdminDashboard from "../pages/admin-dashboard.js";

const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/login", view: Login },
    { path: "/student-results", view: StudentResults },
    { path: "/admin-dashboard", view: AdminDashboard },

];

export default routes;
