import "./Company.css";
import React, { useState } from "react";
import { GoLaw } from "react-icons/go";
import { IoIosPeople, IoIosPin } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { GrGroup, GrLocationPin } from "react-icons/gr";
import { RiUserStarLine, RiMapPin2Line } from "react-icons/ri";
import worldMap from "../../../../asset/image/world-map.png";
import koreaMap from "../../../../asset/image/korea-map.png";
import Hitachi_logo from "../../../../asset/image/Hitachi_logo.png";
import Lg_logo from "../../../../asset/image/lg_logo.png";
import Denso_logo from "../../../../asset/image/denso_logo.png";
import Gm_logo from "../../../../asset/image/gm_logo.png";
import MobaseElect_logo from "../../../../asset/image/mobase-elec_logo.png";
import mobase_history from "../../../../asset/image/mobase_history.png";

function Company() {
  const [content, setContent] = useState(1);
  const [countrySelect, setCountrySelect] = useState("domestic");
  const customerList = [
    {
      name: "GM Korea",
      img_src: "",
      country: "domestic",
    },
    {
      name: "Denso Korea",
      img_src: "",
      country: "domestic",
    },
    {
      name: "Mobase Electronics",
      img_src: "",
      country: "domestic",
    },
    {
      name: "HITACHI",
      img_src: "",
      country: "aboard",
    },
    {
      name: "LG Energy Solution",
      img_src: "",
      country: "aboard",
    },
  ];
  return (
    <div className="company-container">
      <div className="company-sub-header">
        <div
          className={`company-sub-header-menu ${
            content === 1 ? "clicked" : ""
          }`}
          onClick={() => setContent(1)}
        >
          Vision
        </div>
        <div
          className={`company-sub-header-menu ${
            content === 2 ? "clicked" : ""
          }`}
          onClick={() => setContent(2)}
        >
          연혁
        </div>
        <div
          className={`company-sub-header-menu ${
            content === 3 ? "clicked" : ""
          }`}
          onClick={() => setContent(3)}
        >
          인증 및 수상
        </div>
        <div
          className={`company-sub-header-menu ${
            content === 4 ? "clicked" : ""
          }`}
          onClick={() => setContent(4)}
        >
          사업영역
        </div>
        <div
          className={`company-sub-header-menu ${
            content === 5 ? "clicked" : ""
          }`}
          onClick={() => setContent(5)}
        >
          고객현황
        </div>
      </div>
      <div className="company-contents">
        {content === 1 && (
          <>
            <div className="company-vision-container">
              <div className="company-vision-title">◼ 경영이념</div>
              <div className="company-vision-contents">
                <div className="company-vision-contents-box">
                  <div className="company-vision-contents-icon">
                    <GoLaw className="company-vision-icon" />
                  </div>
                  <div className="company-vision-contents-text">
                    공정한 사회
                  </div>
                </div>
                <div className="company-vision-contents-box">
                  <div className="company-vision-contents-icon">
                    <IoIosPeople className="company-vision-icon" />
                  </div>
                  <div className="company-vision-contents-text">가족 중심</div>
                </div>
                <div className="company-vision-contents-box">
                  <div className="company-vision-contents-icon">
                    <FaHandHoldingHeart className="company-vision-icon" />
                  </div>
                  <div className="company-vision-contents-text">사회 기여</div>
                </div>
              </div>
            </div>
            <div className="company-vision-container">
              <div className="company-vision-title">◼ 행동강령</div>
              <div className="company-vision-contents">
                <div className="company-vision-contents-article">
                  - 창의와 열정으로 서로 소통하고 화합하여 최고의 제품과
                  서비스를 창출하여 인류사회에 공헌하자
                  <br />- 새로운 생각, 뜨거운 열정, 당당한 자세, 확고한 신념
                </div>
              </div>
            </div>
            <div className="company-vision-container">
              <div className="company-vision-title">◼ 사훈</div>
              <div className="company-vision-contents">
                <div className="company-vision-contents-box">
                  <div className="company-vision-contents-icon">
                    <FaRegHandshake className="company-vision-icon" />
                  </div>
                  <div className="company-vision-contents-text">상호존중</div>
                </div>
                <div className="company-vision-contents-box">
                  <div className="company-vision-contents-icon">
                    <GrGroup className="company-vision-icon" />
                  </div>
                  <div className="company-vision-contents-text">인화단결</div>
                </div>
                <div className="company-vision-contents-box">
                  <div className="company-vision-contents-icon">
                    <RiUserStarLine className="company-vision-icon" />
                  </div>
                  <div className="company-vision-contents-text">고객감동</div>
                </div>
              </div>
            </div>
          </>
        )}
        {content === 2 && (
          <div className="company-history-container">
            <div className="company-history-title-line"></div>
            <div className="company-history-title">History</div>
            <div className="history-content-container">
              <div className="history-content"></div>
            </div>
            <div className="history-content-container-bg" />
          </div>
        )}
        {content === 3 && (
          <div className="company-certification-wrapper">
            <div className="company-certification-container">
              <div className="company-certification-box">
                <div className="company-certification-image1" />
                <div className="company-certification-title">
                  SQ인증서 (증착)
                </div>
                {/* <div className="company-certification-date">2021.04</div> */}
              </div>
              <div className="company-certification-box">
                <div className="company-certification-image2"></div>
                <div className="company-certification-title">
                  SQ인증서 (조립)
                </div>
                {/* <div className="company-certification-date">2021.04</div> */}
              </div>
              <div className="company-certification-box">
                <div className="company-certification-image3"></div>
                <div className="company-certification-title">
                  SQ인증서 (도장)
                </div>
                {/* <div className="company-certification-date">2021.04</div> */}
              </div>
              <div className="company-certification-box">
                <div className="company-certification-image4"></div>
                <div className="company-certification-title">
                  SQ인증서 (사출)
                </div>
                {/* <div className="company-certification-date">2021.04</div> */}
              </div>
              <div className="company-certification-box">
                <div className="company-certification-image5"></div>
                <div className="company-certification-title">IATF 16969</div>
                {/* <div className="company-certification-date">2021.04</div> */}
              </div>
              <div className="company-certification-no-box"></div>
            </div>
            <div className="company-certification-time-container">
              <div className="company-certification-time-content">
                <div className="company-certification-time-year">2019</div>
                <div className="company-certification-time-dot">·</div>
                <div className="company-certification-time-month">06</div>
                <div className="company-certification-time-title">
                  SQ인증서 (사출)
                </div>
              </div>
              <div className="company-certification-time-content">
                <div className="company-certification-time-year">2020</div>
                <div className="company-certification-time-dot">·</div>
                <div className="company-certification-time-month">11</div>
                <div className="company-certification-time-title">
                  IATF 16969
                </div>
              </div>
              <div className="company-certification-time-content">
                <div className="company-certification-time-year">2021</div>
                <div className="company-certification-time-dot">·</div>
                <div className="company-certification-time-month">01</div>
                <div className="company-certification-time-title">
                  SQ인증서 (증착)
                </div>
              </div>
              <div className="company-certification-time-content">
                <div className="company-certification-time-year"></div>
                <div className="company-certification-time-dot">·</div>
                <div className="company-certification-time-month">01</div>
                <div className="company-certification-time-title">
                  SQ인증서 (조립)
                </div>
              </div>
              <div className="company-certification-time-content">
                <div className="company-certification-time-year"></div>
                <div className="company-certification-time-dot">·</div>
                <div className="company-certification-time-month">01</div>
                <div className="company-certification-time-title">
                  SQ인증서 (도장)
                </div>
              </div>
            </div>
          </div>
        )}
        {content === 4 && (
          <div className="company-business-area-container">
            <div className="company-business-area-title">◼ SECURITY 시스템</div>
            <div className="company-business-area-image">
              <div className="company-business-area-image-1"></div>
            </div>
            <div className="company-business-area-contents">
              <b>개요</b>
              <br />
              자동차의 보안 시스템은 고도의 암호화 및 양방향 통신기술을
              적극적으로 적용하고 있는 추세입니다.
              <br />
              모베이스 오토테크는 차량의 보안기술을 끊임없이 발전시켜 왔으며,
              독보적인 기술 수준을 국내외 고객으로 부터 인정 받고 있습니다.
              <br />
              기초적인 형태의 Key Set 부터 암호화 및 양방향 통신기술을 적용한
              이모빌라이저, 스마트키 시스템 등 차량의 보안과 편의성을
              <br />
              획기적으로 발전시키고 있습니다.
              <div className="company-business-area-contents-dashed-line" />
              <b>주요 품목</b>
              <br />
              Smart Key System, Immobilizer System, Key Set
            </div>
            <div className="company-business-area-contents-line" />
            {/* */}

            {/* */}
            <div className="company-business-area-title">◼ 자동차용 SWITCH</div>
            <div className="company-business-area-image">
              <div className="company-business-area-image-2"></div>
            </div>
            <div className="company-business-area-contents">
              <b>개요</b>
              <br />
              자동차는 시동부터 운전, 주차의 과정까지 일련의 기계와 전자
              장치들의 상호작용으로 작동되고 있습니다. 각각의 기능을 작동시키기
              <br />
              위해서는 작동부에 전원을 인가하거나 동작 신호를 입력하기 위한 각종
              SWITCH 장착 필수적이며, 자동차 내에 안전 및 각종 편의장치의 종류가
              늘어나면서 이를 위한 SWITCH 장치의 종류 또한 점점 늘어나고 있는
              추세입니다.
              <br />
              모베이스 오토테크는 이러한 SWITCH 장치들이 원활하게 작동되는 것은
              물론 안전을 위하여 운전에 방해 요소가 되지 않도록 인체공학적인
              디자인으로 개발 및 생산하고 있습니다.
              <div className="company-business-area-contents-dashed-line" />
              <b>주요 품목</b>
              <br />
              파워윈도우 스위치, 스티어링 휠 리모콘 스위치, 멀티펑션 스위치,
              인스트루먼트 판넬 스위치
            </div>
            <div className="company-business-area-contents-line" />
            {/* */}
          </div>
        )}
        {content === 5 && (
          <div className="company-customer-container">
            <div className="company-customer-country-selector">
              <div
                className={`company-customer-country-select ${
                  countrySelect === "domestic"
                    ? "company-customer-country-select-clicked"
                    : ""
                }`}
                onClick={() => setCountrySelect("domestic")}
              >
                국내
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
              <div
                className={`company-customer-country-select ${
                  countrySelect === "aboard"
                    ? "company-customer-country-select-clicked"
                    : ""
                }`}
                onClick={() => setCountrySelect("aboard")}
              >
                해외
              </div>
            </div>
            <div className="company-customer-country-container">
              {countrySelect === "domestic" && (
                <div className="company-customer-country-map-korea-container">
                  <img
                    className="company-customer-country-map-korea"
                    alr="Korea Map"
                    src={koreaMap}
                  ></img>
                  <div className="company-customer-korea-pin-suwon">
                    <img
                      className="company-customer-company-logo-mobase"
                      alr="MOBASE LOGO"
                      src={MobaseElect_logo}
                    ></img>
                    <div className="company-customer-world-pin-line-suwon" />
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
              )}
              {countrySelect === "aboard" && (
                <>
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Company;
