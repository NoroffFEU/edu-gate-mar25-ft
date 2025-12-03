export default function Login(){
    
    return /*HTML*/`
    
    <div class="login-page">
       <div class="login-form">
            <h1>Log in</h1>
            <div class="login-input">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="example@mail.com">
            </div>
            <div class="login-input">
                <label for="password">Password</label>
                <input type="text" name="password" id="password" placeholder="Enter password">
            </div>
            <p>Forgot your password? Click 
                <a href="#">here</a>
            </p>
            <a href="#">
                <button class="btn">Submit</button>
            </a>
        </div>
    </div>  
    `;
}
