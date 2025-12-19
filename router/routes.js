// views
<<<<<<< HEAD
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Login, { initLoginForm } from "../pages/login.js";
=======
import Home from '../pages/home.js'
import About from '../pages/about.js'
import Login from '../pages/login.js'
import StudentDashboard from '../pages/student-dashboard.js'
>>>>>>> d4883d8dd36d2d61f40e1cb806c2609428c9eca4
import StudentResults from "../pages/student-results.js";
import AdminDashboard from "../pages/admin-dashboard.js";
import Signup, { initSignupForm } from "../pages/signup.js";
import TeacherDashboard from "../pages/teacher-dashboard.js";
import Registration from "../pages/registration.js";
<<<<<<< HEAD
import StudentDashboard from '../pages/student-dashboard.js'

const routes = [
 { path: "/", view: Home },
 { path: "/about", view: About },
 { path: "/login", view: Login, afterRender: initLoginForm },
 { path: "/student-results", view: StudentResults },
 { path: "/admin-dashboard", view: AdminDashboard },
 { path: "/signup", view: Signup, afterRender: initSignupForm },
 { path: "/teacher-dashboard", view: TeacherDashboard },
 { path: "/registration", view: Registration },
 { path: "/student-dashboard", view: StudentDashboard },
=======
import AdminEdit, { initAdminProfileEdit } from "../pages/admin-edit.js";

const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/login", view: Login },
    { path: "/student-dashboard", view: StudentDashboard },
    { path: "/student-results", view: StudentResults },
    { path: "/admin-dashboard", view: AdminDashboard },
    { path: "/signup", view: Signup, afterRender: initSignupForm },
    { path: "/teacher-dashboard", view: TeacherDashboard },
    { path: "/registration", view: Registration },
 { path: "/admin-edit", view: AdminEdit, afterRender: initAdminProfileEdit },
>>>>>>> d4883d8dd36d2d61f40e1cb806c2609428c9eca4
];

export default routes;