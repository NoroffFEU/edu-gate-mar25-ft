// views
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Login from "../pages/login.js";
import TeacherDashboard from "../pages/teacher-dashboard.js";
import AdminDashboard from "../pages/admin-dashboard.js";
import StudentProfile from "../pages/student-profile.js"; 

const routes = [
  { path: "/", view: Home },
  { path: "/about", view: About },
  { path: "/login", view: Login },
  { path: "/teacher-dashboard", view: TeacherDashboard },
  { path: "/admin-dashboard", view: AdminDashboard },
  { path: "/student-profile", view: StudentProfile },
];

export default routes;


