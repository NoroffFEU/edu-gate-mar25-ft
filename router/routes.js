// views
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Login from "../pages/login.js";
import TopPerformingStudents from "../pages/topperformingstudents.js";

const routes = [
  { path: "/", view: Home },
  { path: "/about", view: About },
  { path: "/login", view: Login },
  { path: "/topperformingstudents", view: TopPerformingStudents },
];

export default routes;
