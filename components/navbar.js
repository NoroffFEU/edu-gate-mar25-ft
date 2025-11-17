import LogoutButton from "./logOutButton.js";

export default function Navbar() {
  return /*HTML*/ `
    <nav class="header-navbar" id="header-navbar">
      ${burgerBtn()}
      <div class="nav-links" id="nav-links">
        ${closeNav()}
        ${navigationOptions()}
        
      </div>
    </nav>
  `;
}


function profileBtnInHeader(){
     return /*HTML*/`
     <a href="/profile" data-link class="UserLogo">
        <img 
          src="./public/icons/user-circle.png" 
          alt="" 
          loading="lazy"
          >
      </a>
      
     `;
}

function navigationOptions(){
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  if(isSmallScreen){
    return /*HTML*/ `
        <a href="/" data-link>
          Dashboard
          <span>
            <img src="./public/icons/dashboard.png" alt="">
          </span>
          </a>
        <a href="/about" data-link>
          About
          <span>
            <img src="./public/icons/about.png" alt="">
          </span>
          </a>
        <a href="/contact" data-link>
          Contact
          <span>
            <img src="./public/icons/contact.png" alt="">
          </span>
          </a>
        <a href="/profile" data-link>
          Profile
           <span>
            <img src="./public/icons/user-circle.png" alt="">
          </span>
        </a>
        ${LogoutButton()}
    `;
  }else{
    return /*HTML*/ `
        <a href="/" data-link>Dashboard</a>
        <a href="/about" data-link>About</a>
        <a href="/contact" data-link>Contact</a>
        ${LogoutButton()}
        ${profileBtnInHeader()}
      
    `;
  }
}

function burgerBtn(){
  return /*HTML*/`
    <button class="burgerMenu" id="burger-btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </button>
  `;
}

function closeNav(){
   return /*HTML*/`
    <div class="close-nav-btn">
      <img src="./public/icons/x-close(1).jpg" 
          alt="close menu" 
          id="burger-btn" >
    </div>
    `;
}