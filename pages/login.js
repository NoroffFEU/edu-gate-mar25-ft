export default function Login(){

    return /*HTML*/`
    
    <div class="login-page">
       <div class="login-form">
            <h1 class="login-h1" >Log in</h1>
            <div class="login-form-input">
                <label class="login-label" for="email">Email</label>
                <input class="login-input" type="email" name="email" id="email" placeholder="example@mail.com">
                <p class="login-text-error" id="email-error"></p>
            </div>
            <div class="login-form-input">
                <label class="login-label" for="password">Password</label>
                <input class="login-input" type="password" name="password" id="password" placeholder="Enter password">
                <p class="login-text-error" id="password-error"></p>
            </div>
            <p class="login-p">Forgot your password? Click 
                <a class="login-a" href="#">here</a>
            </p>
            <div class="login-div">
                <button class="btn btn--primary" id="login-submit">Submit</button>
            </div>
        </div>
    </div>  
    `;
    
}

export function initLoginForm() {
    const submitBtn = document.getElementById("login-submit");

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // React on click of button
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
    
    let isValid = true;

     // Remove error-styling
    emailError.textContent = "";
    emailInput.classList.remove("login-input-error");
    passwordError.textContent = "";
    passwordInput.classList.remove("login-input-error");

    // When input is empty show error message and styling
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please insert your email";
        emailInput.classList.add("login-input-error");
        isValid = false;
    }

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Please insert your password";
        passwordInput.classList.add("login-input-error");
        isValid = false;
    }

    if (isValid) {
        console.log("Works");
    }
    });

    // No error text or styling when input entered
    emailInput.addEventListener("input", () => {
        emailError.textContent = "";
        emailInput.classList.remove("login-input-error");
    });
    passwordInput.addEventListener("input", () => {
        passwordError.textContent = "";
        passwordInput.classList.remove("login-input-error");
    });
}