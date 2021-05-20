import React, { useState } from "react";
import "./MainPage.css";
import Company from "./Sections/Company/Company.jsx";
import Product from "./Sections/Product/Product.jsx";
import Recruit from "./Sections/Recruit/Recruit.jsx";
import Contact from "./Sections/Contact/Contact.jsx";
import Rnd from "./Sections/Rnd/Rnd.jsx";
import Business from "./Sections/Business/Business.jsx";
import MainBannerPicture1 from "../../asset/image/banner-1.jpeg";
import MainBannerPicture2 from "../../asset/image/banner-2.jpeg";
import { HiOutlineChevronRight } from "react-icons/hi";
function MainPage({ clicked, setClicked, content, setContent }) {
  const [MainBannerPicture, setMainBannerPicture] = useState(0);
  let mainBannerPictureArray = [
    { url: MainBannerPicture1 },
    { url: MainBannerPicture2 },
  ];
  let pictureCount = 0;
  // const pictureTimer = setTimeout(() => {
  //   pictureCount++;
  //   if (MainBannerPicture === mainBannerPictureArray.length - 1) {
  //     pictureCount = 0;
  //   }
  //   setMainBannerPicture(pictureCount);
  // }, 3000);
  function handleScrollTo(e) {
    setClicked(e.target.id);
    const locationName = `${e.target.id}-section`;
    let menuHeight = 80 + 30;
    let location =
      document.getElementById(locationName) !== null
        ? document.getElementById(locationName).offsetTop
        : 0;
    if (e.target.id === "main") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: location - menuHeight,
        behavior: "smooth",
      });
    }
  }
  return (
    <div className="main-page-container">
      <div className="main-page-banner-container">
        <>
          <img
            src={mainBannerPictureArray[MainBannerPicture].url}
            key={mainBannerPictureArray[MainBannerPicture].url}
            className="main-page-banner"
          />
          <div className="picture-dot-container">
            {mainBannerPictureArray.map((data, index) => {
              return (
                <div
                  className={`${
                    index === MainBannerPicture
                      ? "picture-dot"
                      : "picture-dot-disable"
                  }`}
                  key={index}
                  onClick={() => {
                    // clearTimeout(pictureTimer);
                    setMainBannerPicture(index);
                  }}
                ></div>
              );
            })}
          </div>
          <div className="main-page-menu-container">
            <div className="main-page-menu">
              <div className="main-page-menu-title">제품소개</div>
              <div className="main-page-menu-content">
                <div className="main-page-menu-content-product-container">
                  <div className="main-page-menu-content-product-title-sm">
                    Control System
                    <div className="product-link-box">
                      <HiOutlineChevronRight
                        className="product-link-icon"
                        id="product"
                        onClick={(e) => {
                          handleScrollTo(e);
                          setContent(1);
                        }}
                      />
                    </div>
                  </div>
                  <div className="main-page-menu-content-product-picture-box">
                    <div className="main-page-menu-content-product-picture-1" />
                  </div>
                </div>
                <div className="main-page-menu-content-product-container">
                  <div className="main-page-menu-content-product-title">
                    Security System{" "}
                    <div className="product-link-box">
                      <HiOutlineChevronRight
                        className="product-link-icon"
                        id="product"
                        onClick={(e) => {
                          handleScrollTo(e);
                          setContent(2);
                        }}
                      />
                    </div>
                  </div>
                  <div className="main-page-menu-content-product-picture-box">
                    <div className="main-page-menu-content-product-picture-2" />
                  </div>
                </div>
                <div className="main-page-menu-content-product-container">
                  <div className="main-page-menu-content-product-title">
                    HMI{" "}
                    <div className="product-link-box">
                      <HiOutlineChevronRight
                        className="product-link-icon"
                        id="product"
                        onClick={(e) => {
                          handleScrollTo(e);
                          setContent(3);
                        }}
                      />
                    </div>
                  </div>
                  <div className="main-page-menu-content-product-picture-box">
                    <div className="main-page-menu-content-product-picture-3" />
                  </div>
                </div>
                <div className="main-page-menu-content-product-container">
                  <div className="main-page-menu-content-product-title">
                    Fan Motor
                    <div className="product-link-box">
                      <HiOutlineChevronRight
                        className="product-link-icon"
                        id="product"
                        onClick={(e) => {
                          handleScrollTo(e);
                          setContent(4);
                        }}
                      />
                    </div>
                  </div>
                  <div className="main-page-menu-content-product-picture-box">
                    <div className="main-page-menu-content-product-picture-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-page-menu">
              <div className="main-page-menu-title">고객현황</div>
              <div className="main-page-menu-content-customer">
                <div className="main-page-menu-content-customer-content">
                  <div className="main-page-menu-content-customer-content-logo-1" />
                  <div className="main-page-menu-content-customer-content-title">
                    모베이스 전자
                  </div>
                </div>
                <div className="main-page-menu-content-customer-content-line"></div>
                <div className="main-page-menu-content-customer-content">
                  <div className="main-page-menu-content-customer-content-logo-2" />
                  <div className="main-page-menu-content-customer-content-title">
                    덴소
                  </div>
                </div>
                <div className="main-page-menu-content-customer-content-line"></div>
                <div className="main-page-menu-content-customer-content">
                  <div className="main-page-menu-content-customer-content-logo-3" />
                  <div className="main-page-menu-content-customer-content-title">
                    GM 코리아
                  </div>
                </div>
                <div className="main-page-menu-content-customer-content-line"></div>
                <div className="main-page-menu-content-customer-content">
                  <div className="main-page-menu-content-customer-content-logo-4" />
                  <div className="main-page-menu-content-customer-content-title">
                    히타치
                  </div>
                </div>
                <div className="main-page-menu-content-customer-content-line"></div>
                <div className="main-page-menu-content-customer-content">
                  <div className="main-page-menu-content-customer-content-logo-5" />
                  <div className="main-page-menu-content-customer-content-title">
                    LG 에너지 솔루션
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      <div className="main-page-section" id="company-section">
        <div className="main-page-section-title-wrapper">
          <div className="main-page-section-title">회사 소개</div>
        </div>
        <Company />
      </div>
      <div className="main-page-section" id="product-section">
        <div className="main-page-section-title">제품 소개</div>
        <Product content={content} setContent={setContent} />
      </div>
      <div className="main-page-section" id="rnd-section">
        <div className="main-page-section-title">연구 개발</div>
        <Rnd />
      </div>

      <div className="main-page-section" id="business-section">
        <div className="main-page-section-title">윤리 경영</div>
        <Business />
      </div>
      <div className="main-page-section" id="recruit-section">
        <div className="main-page-section-title">채용 정보</div>
        <Recruit />
      </div>
      <div className="main-page-section" id="contact-section">
        <div className="main-page-section-title">찾아오는 길</div>
        <Contact />
      </div>
    </div>
  );
}

export default MainPage;
