// views
import Home from '../pages/home.js'
import About from '../pages/about.js'
import Login from '../pages/login.js'
import StudentDashboard from '../pages/student-dashboard.js'
import StudentResults from "../pages/student-results.js";
import AdminDashboard from "../pages/admin-dashboard.js";
import Signup, { initSignupForm } from "../pages/signup.js";
import TeacherDashboard from "../pages/teacher-dashboard.js";
import Registration from "../pages/registration.js";
import AdminEdit, { initAdminProfileEdit } from "../pages/admin-edit.js";
import StudentResult from '../pages/student-result.js'


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
    { path: "/student-result", view: StudentResult },
];

export default routes;
