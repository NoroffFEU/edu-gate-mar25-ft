import Navbar from "./navbar.js";

//needs to refresh to get the updated logo when switching screen size
export default function Header() {
     const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
     const logoSrc = isSmallScreen ? "public/img/logo-header-cropped.png" : "public/img/logo-header.png";

  return /*HTML*/ `
  <section class="header-section">
     <div class="HeaderLogo">
          <img 
               src="${logoSrc}" 
               alt="" 
               loading="lazy"
               >
     </div>
     ${Navbar()}
   </section>
  `;
}


