// views
import Home from '../pages/home.js'
import About from '../pages/about.js'
import Login from '../pages/login.js'
import Signup, { initSignupForm } from "../pages/signup.js";

const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/login", view: Login },
    { path: "/signup", view: Signup, afterRender: initSignupForm },
];

export default routes;