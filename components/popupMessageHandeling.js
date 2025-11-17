import ConfirmationMessage from "./confirmationMessage.js";
import ErrorMessage from "./errorMessage.js";

export default function PopUpMessage(type, title, message) {
    const messageContainer = document.getElementById("message");
    if (!messageContainer) return;

    messageContainer.innerHTML = "";
    const content = type ? ConfirmationMessage(title, message) : ErrorMessage(title, message);
    if (!content) return;
    messageContainer.innerHTML = content;

    const popUp = messageContainer.querySelector(".popUp-container");
    if (!popUp) return;

    requestAnimationFrame(() => {
        popUp.classList.add("show");
    });

    setTimeout(() => {
        popUp.classList.remove("show");
        setTimeout(() => {
            if (popUp.parentNode) popUp.parentNode.removeChild(popUp);
        }, 500); 
    }, 5000);
}

function closePopUp() {
    const message = document.getElementById("message");
    if (message) message.innerHTML = ""; 
}
window.closePopUp = closePopUp;
