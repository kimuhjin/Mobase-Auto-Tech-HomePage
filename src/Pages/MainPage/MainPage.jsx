import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Company from "./Sections/Company/Company.jsx";
import Product from "./Sections/Product/Product.jsx";
import Recruit from "./Sections/Recruit/Recruit.jsx";
import Contact from "./Sections/Contact/Contact.jsx";
import Rnd from "./Sections/Rnd/Rnd.jsx";
import Business from "./Sections/Business/Business.jsx";
import MainBannerPicture1 from "../../asset/image/banner-1.png";
import MainBannerPicture2 from "../../asset/image/banner-2.png";
import { HiOutlineChevronRight } from "react-icons/hi";
///
import { GoLaw } from "react-icons/go";
import { IoIosPeople, IoIosPin } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { GrGroup, GrLocationPin } from "react-icons/gr";
import { RiUserStarLine, RiMapPin2Line } from "react-icons/ri";
import worldMap from "../../asset/image/world-map.png";
import koreaMap from "../../asset/image/korea-half.png";
import Hitachi_logo from "../../asset/image/Hitachi_logo.png";
import Lg_logo from "../../asset/image/lg_logo.png";
import Denso_logo from "../../asset/image/denso_logo.png";
import Gm_logo from "../../asset/image/gm_logo.png";
import MobaseElect_logo from "../../asset/image/mobase-elec_logo.png";
import mobase_history from "../../asset/image/mobase_history.png";
function MainPage({ clicked, setClicked, content, setContent }) {
  const [MainBannerPicture, setMainBannerPicture] = useState(0);
  let mainBannerPictureArray = [
    { url: MainBannerPicture1 },
    { url: MainBannerPicture2 },
  ];
  const [MainBannerProducts, setMainBannerProducts] = useState(0);
  let mainBannerProductsArray = [
    { id: 0, name: "Control System", src: 1 },
    { id: 0, name: "Security System", src: 2 },
    { id: 1, name: "HMI", src: 3 },
    { id: 1, name: "Fan Motor", src: 4 },
  ];
  let productsCount = 0;
  setTimeout(() => {
    productsCount++;
    if (MainBannerProducts === 1) {
      productsCount = 0;
    }
    setMainBannerProducts(productsCount);
  }, 8000);
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
          <div className="main-page-banner-picture-container">
            <img
              src={mainBannerPictureArray[MainBannerPicture].url}
              key={mainBannerPictureArray[MainBannerPicture].url}
              className="main-page-banner"
            ></img>
            {MainBannerPicture === 0 && (
              <>
                <div className="main-page-banner-picture-title">
                  Synergy for you,
                  <br />
                  Mobase AutoTech
                </div>
                <div className="main-page-banner-picture-bar"></div>
                <div className="main-page-banner-picture-article">
                  차원 높은 품질과 서비스를 바탕으로
                  <br />
                  <div className="main-page-banner-picture-article-inline">
                    감동을 선사하는 기업,&nbsp;&nbsp;
                    <div className="main-page-banner-picture-article-blue color-white">
                      모베이스 오토테크
                    </div>
                  </div>
                </div>
              </>
            )}
            {MainBannerPicture === 1 && (
              <>
                <div className="main-page-banner-picture-title-2">
                  Talent,
                  <br />
                  Creativity,
                  <br />
                  Integrity
                </div>
                <div className="main-page-banner-picture-bar-white"></div>
                <div className="main-page-banner-picture-article-2 color-white">
                  모베이스의 중심에 여러분이 있습니다.
                  <br />
                  <div className="main-page-banner-picture-article-inline color-white">
                    사람중심의 기업,&nbsp;&nbsp;
                    <div className="main-page-banner-picture-article-weight">
                      모베이스 오토테크
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
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
                <div className="main-page-menu-content-layout">
                  {mainBannerProductsArray.map((data, index) => {
                    if (MainBannerProducts === data.id) {
                      return (
                        <div
                          className="main-page-menu-content-product-container"
                          key={index}
                        >
                          <div className="main-page-menu-content-product-title-sm">
                            {data.name}
                            <div className="product-link-box">
                              <HiOutlineChevronRight
                                className="product-link-icon"
                                id="product"
                                onClick={(e) => {
                                  handleScrollTo(e);
                                  setContent(data.src);
                                }}
                              />
                            </div>
                          </div>
                          <div className="main-page-menu-content-product-picture-box">
                            <div
                              className={`main-page-menu-content-product-picture-${data.src}`}
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            <div className="main-page-menu">
              <div className="main-page-menu-title">고객현황</div>
              <div className="main-page-menu-content-customer">
                {MainBannerProducts === 0 && (
                  <div className="company-customer-country-container-main-page">
                    <div className="company-customer-country-map-korea-container">
                      <img
                        className="company-customer-country-map-korea-main-page"
                        alr="Korea Map"
                        src={koreaMap}
                      ></img>
                      <div className="company-customer-korea-pin-suwon">
                        <img
                          className="company-customer-company-logo-mobase-mainpage"
                          alr="MOBASE LOGO"
                          src={MobaseElect_logo}
                        ></img>
                        <div className="company-customer-world-pin-line-suwon-mainpage" />
                        <div className="company-customer-world-pin-contents-suwon">
                          <RiMapPin2Line className="company-customer-pin-icon" />
                          <div className="company-customer-world-pin-title">
                            SUWON
                          </div>
                        </div>
                      </div>
                      <div className="company-customer-korea-pin-changwon">
                        <img
                          className="company-customer-company-logo-gm"
                          alr="GM LOGO"
                          src={Gm_logo}
                        ></img>
                        <div className="company-customer-world-pin-line-gm" />
                        <img
                          className="company-customer-company-logo-denso"
                          alr="DENSO LOGO"
                          src={Denso_logo}
                        ></img>
                        <div className="company-customer-world-pin-line-denso" />
                        <div className="company-customer-world-pin-contents-changwon">
                          <div className="company-customer-world-pin-title">
                            CHANGWON
                          </div>
                          <RiMapPin2Line className="company-customer-pin-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {MainBannerProducts === 1 && (
                  <div className="company-customer-country-container-main-page-2">
                    <div className="company-customer-country-map-korea-container">
                      <img
                        className="company-customer-country-map-world"
                        alr="worldMap"
                        src={worldMap}
                      ></img>
                      <div className="company-customer-world-pin-usa">
                        <img
                          className="company-customer-company-logo"
                          alr="HITACHI LOGO"
                          src={Hitachi_logo}
                        ></img>
                        <div className="company-customer-world-pin-line-poland" />
                        <div className="company-customer-world-pin-contents">
                          <RiMapPin2Line className="company-customer-pin-icon" />
                          <div className="company-customer-world-pin-title">
                            USA
                          </div>
                        </div>
                      </div>
                      <div className="company-customer-world-pin-poland">
                        <img
                          className="company-customer-company-logo-lg"
                          alr="LG LOGO"
                          src={Lg_logo}
                        ></img>

                        <div className="company-customer-world-pin-line-poland" />
                        <div className="company-customer-world-pin-contents">
                          <RiMapPin2Line className="company-customer-pin-icon" />
                          <div className="company-customer-world-pin-title">
                            POLAND
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* <div className="main-page-menu-content-customer-content">
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
                </div>*/}
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
