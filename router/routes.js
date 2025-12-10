// views
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Login from "../pages/login.js";
import Contact from "../pages/contact.js";
import StudentDashboard from "../pages/student-dashboard.js";
import StudentResults from "../pages/student-results.js";
import Signup, { initSignupForm } from "../pages/signup.js";
import TeacherDashboard from "../pages/teacher-dashboard.js";
import AdminDashboard from "../pages/admin-dashboard.js";
import StudentProfileEdit from "../pages/student-profile-edit.js";
import Registration from "../pages/registration.js";

const routes = [
  { path: "/", view: Home },
  { path: "/about", view: About },
  { path: "/login", view: Login },
  { path: "/contact", view: Contact },
  { path: "/student-dashboard", view: StudentDashboard },
  { path: "/student-results", view: StudentResults },
  { path: "/admin-dashboard", view: AdminDashboard },
  { path: "/signup", view: Signup, afterRender: initSignupForm },
  { path: "/teacher-dashboard", view: TeacherDashboard },
  { path: "/student-profile-edit", view: StudentProfileEdit },
  { path: "/registration", view: Registration },
];

export default routes;