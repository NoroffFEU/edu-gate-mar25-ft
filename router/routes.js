// views
import Students from '../pages/students.js'
import Home from '../pages/home.js'
import Results from '../pages/results.js'
import School from '../pages/school.js'
import About from '../pages/about.js'
import LogIn from '../pages/login.js'

const routes = [
    { path: "/", view: Home },
    { path: "/students", view: Students },
    { path: "/results", view: Results },
    { path: "/about", view: About },
    { path: "/school", view: School },
    { path: "/login", view: LogIn },
];

export default routes;