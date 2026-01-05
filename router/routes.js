// views
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Login from "../pages/login.js";
import Contact from "../pages/contact.js";
import YourResults, { initYourResults } from "../pages/your-results.js";
import StudentDashboard from "../pages/student-dashboard.js";
import AdminDashboard from "../pages/admin-dashboard.js";
import Signup, { initSignupForm } from "../pages/signup.js";
import TeacherDashboard from "../pages/teacher-dashboard.js";
import Registration from "../pages/registration.js";
import AdminEdit, { initAdminProfileEdit } from "../pages/admin-edit.js";
import { initFormValidation } from "../pages/form-field-validation.js";


const routes = [
 { path: "/", view: Home },
 { path: "/about", view: About },
 { path: "/login", view: Login },
 { path: "/contact", view: Contact },
 { path: "/your-results", view: YourResults, afterRender: initYourResults },
 { path: "/student-dashboard", view: StudentDashboard },
 { path: "/admin-dashboard", view: AdminDashboard },
 {
  path: "/signup",
  view: Signup,
  afterRender: () => {
   initSignupForm();
   initFormValidation();
  },
 },
 { path: "/teacher-dashboard", view: TeacherDashboard },
 {
  path: "/registration",
  view: Registration,
  afterRender: () => {
   initSignupForm();
   initFormValidation();
  },
 },
 {
  path: "/admin-edit",
  view: AdminEdit,
  afterRender: () => {
   initAdminProfileEdit();
   initFormValidation();
  },
 },
];


export default routes;
