import './Header.css';
import logo from "../../asset/image/logo.png"
import React from "react"
function Header() {
   
     function handleScrollTo(e) {
       const locationName = `${e.target.id}-section`;
            let menuHeight = 80;
            let location =
                document.getElementById(locationName) !== null
                    ? document.getElementById(locationName).offsetTop
                    : 0;
            window.scrollTo({
                top: location - menuHeight,
                behavior: 'smooth',
            });
     }


  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="MOBASE AUTO TECH Logo"/>
      <div className="menu-container">
      <div className="menu" id="company" onClick={handleScrollTo}>Company</div>
      <div className="menu" id="product" onClick={handleScrollTo}>Product</div>
      <div className="menu" id="rnbd" onClick={handleScrollTo}>R&BD</div>
      </div>
    </div>
  );
}

export default Header;
