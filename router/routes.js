// views



import Home from '../pages/home.js'
import About from '../pages/about.js'
import Login from '../pages/login.js'
import Contact from '../pages/contact.js'
import StudentResults, { initStudentResults } from '../pages/student-results.js'
import AdminDashboard from "../pages/admin-dashboard.js";
import Signup, { initSignupForm } from "../pages/signup.js";
import TeacherDashboard from "../pages/teacher-dashboard.js";
import Registration from "../pages/registration.js";


const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/login", view: Login },
    { path: "/contact", view: Contact },
    { path: "/student-results", view: StudentResults, afterRender: initStudentResults },
    { path: "/admin-dashboard", view: AdminDashboard },
    { path: "/signup", view: Signup, afterRender: initSignupForm },
    { path: "/teacher-dashboard", view: TeacherDashboard },
    { path: "/registration", view: Registration },
];


export default routes;
