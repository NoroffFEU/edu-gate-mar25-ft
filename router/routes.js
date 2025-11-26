// views
import Home from '../pages/home.js'
import About from '../pages/about.js'
import Login from '../pages/login.js'
import StudentDashboard from '../pages/student-dashboard.js'

const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/login", view: Login },
    { path: "/student-dashboard", view: StudentDashboard },
];

export default routes;