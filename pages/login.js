import PopUpMessage from "../components/popupMessageHandeling.js";
import { navigateTo } from "../router/router.js";
import { SaveLogInToLocalStorage } from "../dataHandeling/localStorageHandeling.js";
window.passwordResetMessage = passwordResetMessage;
window.wrongLoginMessage = wrongLoginMessage;
window.SaveLogInToLocalStorage = SaveLogInToLocalStorage;
export default function LogIn(){
    return /*HTML*/`
    <section class="login">
        <span id="message"></span>

        <form>
            <h1>Log in</h1>
            <div class="login-section">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com" required autofocus>
            </div>

             <div class="login-section">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter password" required autofocus>
            </div>

            <div>
                <p>Forgot your password? <span onclick="passwordResetMessage()">Click <b>here</b></span></p>
            </div>

            <div class="submit-button">
                <button onclick="wrongLoginMessage()">Submit</button>
            </div>
        </form>

    </section>  
    `;
}

function passwordResetMessage(){
    PopUpMessage(true, "Success!", "Please check your email for instructions on how to verify your account.");
}

function wrongLoginMessage(event){
    if (event) event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if(!email.includes("@") || password === ""){
        PopUpMessage(false, "Failed Log In!", "Wrong password or email address!");
        return;
    }
    SaveLogInToLocalStorage(email, password);
    navigateTo("/");
}