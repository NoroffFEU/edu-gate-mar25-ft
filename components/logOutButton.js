import { RemoveLogInToLocalStorage } from "../../../dataHandeling/localStorageHandeling.js";
import { navigateTo } from "../../../router/router.js";


export default function LogoutButton() {
  return /*HTML*/ `
    <button id="logout">
      Logout
    </button>
  `;
}

document.addEventListener("click", e => {
  if (e.target && e.target.id === "logout") {
    e.preventDefault();
    RemoveLogInToLocalStorage();
    navigateTo("/login");
  }
});