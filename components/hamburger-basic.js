export default function hamburgerBasic() {
    return /*HTML*/ `
  
      <div class="hamburger-panel">
  
      <div class="hamburger-top"><img src="./public/img/logo-header.png" class="hamburger-logo"><img src="./public/icons/x-close(1).jpg" class="hamburger-close"></div>
  
      <div class="hamburger-main">
  
      <a href="/login" class="hamburger-links"><span class="hamburger-text">Login</span> <img src="./public/icons/login.png"></a>
  
      <a href="/signup" class="hamburger-links"><span class="hamburger-text">Signup</span> <img src="./public/icons/signup.png"></a>
  
      <a href="/about" class="hamburger-links"><span class="hamburger-text">About</span> <img src="./public/icons/about.png"></a>
  
      <a href="/contact" class="hamburger-links"><span class="hamburger-text">Contact</span> <img src="./public/icons/contact.png"></a>
  
      </div>
  
      </div>
    `;
  }