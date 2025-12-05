// views


import Home from '../pages/home.js'
import About from '../pages/about.js'
import Login from '../pages/login.js'
import Contact from '../pages/contact.js'
import StudentResults, { initStudentResults } from '../pages/student-results.js'


const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/login", view: Login },
    { path: "/contact", view: Contact },
    { path: "/student-results", view: StudentResults, afterRender: initStudentResults },
];

export default routes;
