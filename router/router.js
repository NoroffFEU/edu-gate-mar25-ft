import routes from "./routes.js";
import { GetEmailFromLocalStorage } from "../dataHandeling/localStorageHandeling.js";

const NotFound = () => /*HTML*/`
<div>
    <h1>testing 404 error page</h1>
    <a href="/" data-link>Home</a>
</div>
`;




function router() {
    let path = location.pathname;
    try {
        const url = new URL(window.location.href);
        path = url.pathname;
    } catch (e) {
    }
    if (path.endsWith("index.html") || path === "/templates/") path = "/";

    const isLoggedIn = !!GetEmailFromLocalStorage();
    if (!isLoggedIn && path !== "/login") {
        navigateTo("/login");
        return;
    }
    if (isLoggedIn && path === "/login") {
        navigateTo("/");
        return;
    }

    const route = routes.find(r => r.path === path);
    const view = route ? route.view : NotFound;
    document.querySelector("#app").innerHTML = view();
    updateActiveNav();
}

function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

function updateActiveNav() {
  const links = document.querySelectorAll('.header-navbar a[data-link]');
  links.forEach(link => {
    if (link.getAttribute('href') === location.pathname) {
      link.classList.add('nav-clicked');
    } else {
      link.classList.remove('nav-clicked');
    }
  });
}



export function initRouter() {
    document.addEventListener("click", e => {
        const link = e.target.closest('a[data-link]');
        if (link) {
            e.preventDefault();
            navigateTo(link.href);
        }
    });

    window.addEventListener("popstate", router);
    document.addEventListener("DOMContentLoaded", router);
}

export { navigateTo, router };

