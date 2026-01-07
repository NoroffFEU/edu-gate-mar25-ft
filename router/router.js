import routes from "./routes.js";

// 404 Not Found view or route
const NotFound = () => /*HTML*/`
<div>
    <h1>testing 404 error page</h1>
    <a href="#/" data-link>Home</a>
</div>
`;

// Get the current path from hash (works on both local and GitHub Pages)
function getPath() {
    const hash = window.location.hash;
    // Remove the # and return the path, default to "/" if empty
    return hash ? hash.slice(1) : "/";
}

function router() {
    const path = getPath();
    
    const route = routes.find(r => r.path === path);
    const view = route ? route.view : NotFound;
    document.querySelector("#app").innerHTML = view();

    if (route && route.afterRender) {
        route.afterRender();
    }
}

function navigateTo(url) {
    // Extract the hash path from the URL
    let path = url;
    if (url.includes("#")) {
        path = url.split("#")[1];
    } else if (url.startsWith("/")) {
        path = url;
    }
    window.location.hash = path;
}

export function initRouter() {
    document.addEventListener("click", e => {
        const link = e.target.closest('a[data-link]');
        if (link) {
            e.preventDefault();
            const href = link.getAttribute("href");
            navigateTo(href);
        }
    });

    // Listen for hash changes instead of popstate
    window.addEventListener("hashchange", router);
    
    document.addEventListener("DOMContentLoaded", () => {
        // Redirect to #/ if no hash present
        if (!window.location.hash) {
            window.location.hash = "/";
        } else {
            router();
        }
    });
}

export { navigateTo, router, getPath };

