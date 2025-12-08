// views

import Home from "../pages/home.js";
import About from "../pages/about.js";
import Login from "../pages/login.js";
import StudentResults from "../pages/student-results.js";
import AdminDashboard from "../pages/admin-dashboard.js";
import Signup, { initSignupForm } from "../pages/signup.js";
import TeacherDashboard from "../pages/teacher-dashboard.js";
import Registration from "../pages/registration.js";
import AdminEdit, { initAdminProfileEdit } from "../pages/admin-edit.js";

const routes = [
 { path: "/", view: Home },
 { path: "/about", view: About },
 { path: "/login", view: Login },
 { path: "/student-results", view: StudentResults },
 { path: "/admin-dashboard", view: AdminDashboard },
 { path: "/signup", view: Signup, afterRender: initSignupForm },
 { path: "/teacher-dashboard", view: TeacherDashboard },
 { path: "/registration", view: Registration },
 { path: "/admin-edit", view: AdminEdit, afterRender: initAdminProfileEdit },
];

export default routes;
