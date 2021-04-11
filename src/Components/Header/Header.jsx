import "./Header.css";
import logo from "../../asset/image/logo.png";
import React, { useState } from "react";

function Header() {
  const [clicked, setClicked] = useState("");

  //  setInterval(() => {
  //     let presentPosition = document.querySelector('html').scrollTop+80;
  //     if(presentPosition>=935){
  //       setClicked("company")
  //     }
  //     if(presentPosition >=document.getElementById("product-section").offsetTop
  //     &&presentPosition <document.getElementById("recruit-section").offsetTop
  //     ){
  //       setClicked("product")
  //     }
  //      if(presentPosition >=document.getElementById("recruit-section").offsetTop){
  //       setClicked("recruit")
  //     }
  //  }, 1000);
  function handleScrollTo(e) {
    setClicked(e.target.id);
    const locationName = `${e.target.id}-section`;
    let menuHeight = 80 + 30;
    let location =
      document.getElementById(locationName) !== null
        ? document.getElementById(locationName).offsetTop
        : 0;
    window.scrollTo({
      top: location - menuHeight,
      behavior: "smooth",
    });
  }

  // 회사 소개
  // 제품 소개
  // 품질 및 연구 개발
  // 인재 육성 (채용 안내)
  // 찾아오는 길
  return (
    <div className="header-container-wrapper">
      <div className="header-container">
        <img className="logo" src={logo} alt="MOBASE AUTO TECH Logo" />
        <div className="menu-container">
          <div
            className={`menu ${clicked === "company" ? "clicked" : ""}`}
            id="company"
            onClick={handleScrollTo}
          >
            회사소개
          </div>
          <div
            className={`menu ${clicked === "product" ? "clicked" : ""}`}
            id="product"
            onClick={handleScrollTo}
          >
            제품소개
          </div>
          <div
            className={`menu ${clicked === "rnd" ? "clicked" : ""}`}
            id="rnd"
            onClick={handleScrollTo}
          >
            연구개발
          </div>
          <div
            className={`menu ${clicked === "recruit" ? "clicked" : ""}`}
            id="recruit"
            onClick={handleScrollTo}
          >
            채용정보
          </div>
          <div
            className={`menu ${clicked === "business" ? "clicked" : ""}`}
            id="business"
            onClick={handleScrollTo}
          >
            윤리경영
          </div>
          <div
            className={`menu ${clicked === "contact" ? "clicked" : ""}`}
            id="contact"
            onClick={handleScrollTo}
          >
            찾아오는 길
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
