export default function Login(){
    
    return /*HTML*/`
    
    <div class="login-page">
       <div class="login-form">
            <h1 class="login-h1" >Log in</h1>
            <div class="login-input-form">
                <label class="login-label" for="email">Email</label>
                <input class="login-input" type="email" name="email" id="email" placeholder="example@mail.com">
            </div>
            <div class="login-input-form">
                <label class="login-label" for="password">Password</label>
                <input class="login-input" type="text" name="password" id="password" placeholder="Enter password">
            </div>
            <p class="login-p">Forgot your password? Click 
                <a class="login-a" href="#">here</a>
            </p>
            <a class="login-a" href="#">
                <button class="btn">Submit</button>
            </a>
        </div>
    </div>  
    `;
}
