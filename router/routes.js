// views


import Home from '../pages/home.js'
import About from '../pages/about.js'
import Login from '../pages/login.js'
import Contact from '../pages/contact.js'


const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/login", view: Login },
    { path: "/contact", view: Contact },
];

export default routes;
