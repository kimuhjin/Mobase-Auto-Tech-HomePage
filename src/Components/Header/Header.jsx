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
      <div className="menu" id="company" onClick={handleScrollTo}>회사 소개</div>
      <div className="menu" id="product" onClick={handleScrollTo}>제품</div>
      <div className="menu" id="recruit" onClick={handleScrollTo}>인재경영</div>
      </div>
    </div>
  );
}

export default Header;
