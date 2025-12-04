export default function hamburgerTeacher() {
    return /*HTML*/ `
   
      <div class="hamburger-panel">
  
      <div class="hamburger-top"><img src="./public/img/logo-header.png" class="hamburger-logo"><img src="./public/icons/x-close(1).jpg" class="hamburger-close"></div>
  
      <div class="hamburger-main">
  
      <a href="/dashboard" class="hamburger-links"><span class="hamburger-text">Dashboard</span> <img src="./public/icons/dashboard.png" class="hamburger-icon"></a>
  
      <a href="/profile" class="hamburger-links"><span class="hamburger-text">Profile</span> <img src="./public/icons/user-circle.png" class="hamburger-icon"></a>
  
      <a href="/manageResults" class="hamburger-links"><span class="hamburger-text">Manage results</span> <img src="./public/icons/results.png" class="hamburger-icon"></a>
  
      <a href="/about" class="hamburger-links"><span class="hamburger-text">About</span> <img src="./public/icons/about.png"></a>
  
      <a href="/contact" class="hamburger-links"><span class="hamburger-text">Contact</span> <img src="./public/icons/contact.png"></a>
        
      <a href="/logout" class="hamburger-links hamburger-logout"><span class="hamburger-text">Log out</span> <img src="./public/icons/logout.png" class="hamburger-icon"></a>
  
      </div>
  
      </div>
    `;
  }