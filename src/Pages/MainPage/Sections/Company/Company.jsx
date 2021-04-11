import "./Company.css";
import React, { useState } from "react";
import { GoLaw } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { RiUserStarLine } from "react-icons/ri";

function Company() {
  const [content, setContent] = useState(1);

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
        {content === 2 && <div className="company-image-2"></div>}
        {content === 3 && (
          <div className="company-certification-container">
            <div className="company-certification-box">
              <div className="company-certification-image"></div>
              <div className="company-certification-title">IATF</div>
              <div className="company-certification-date">2021.04</div>
            </div>
            <div className="company-certification-box">
              <div className="company-certification-image"></div>
              <div className="company-certification-title">
                SQ Certification for HKMC
              </div>
              <div className="company-certification-date">2021.04</div>
            </div>
            <div className="company-certification-box">
              <div className="company-certification-image"></div>
              <div className="company-certification-title">ISO 13001</div>
              <div className="company-certification-date">2021.04</div>
            </div>
            <div className="company-certification-box">
              <div className="company-certification-image"></div>
              <div className="company-certification-title">
                QSB Certification for GM
              </div>
              <div className="company-certification-date">2021.04</div>
            </div>
            <div className="company-certification-box">
              <div className="company-certification-image"></div>
              <div className="company-certification-title">xxx 인증서</div>
              <div className="company-certification-date">2021.04</div>
            </div>
            <div className="company-certification-box">
              <div className="company-certification-image"></div>
              <div className="company-certification-title">xxx 인증서</div>
              <div className="company-certification-date">2021.04</div>
            </div>
          </div>
        )}
        {content === 4 && (
          <div className="company-business-area-container">
            <div className="company-business-area-title">◼ SECURITY 시스템</div>
            <div className="company-business-area-image"></div>
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
            <div className="company-business-area-title">
              ◼ 자동차용 전자 UNIT
            </div>
            <div className="company-business-area-image"></div>
            <div className="company-business-area-contents">
              <b>개요</b>
              <br />
              급속도록 발전하고 있는 자동차 기술에 따라 자동차의 각종 부품 또한
              기존의 기계적인 환경에서 전자, 전기, IT, BIO를 아우르는 융복합
              <br />
              기술 환경으로 변화하고 있습니다.
              <br />
              모베이스 오토테크는 자동차의 전자화, 지능화 추세에 따라 두뇌역할을
              하는 필수적인 BCM 부터 편의성을 극대화 하기 위한 무선 충전 등의
              기술 및 제품 개발에 대하여 지속적인 투자를 하고 있습니다.
              <div className="company-business-area-contents-dashed-line" />
              <b>주요 품목</b>
              <br />
              BCM(Body Control Module), 이모빌라이저 시스템, LDC(Low-Voltage
              DCDC Converter), PSM(Power Seat Module),
              <br />
              휴대폰 무선충전 시스템, 냉·온장컵 모듈, 기타
            </div>
            <div className="company-business-area-contents-line" />
            {/* */}
            <div className="company-business-area-title">◼ 자동차용 SWITCH</div>
            <div className="company-business-area-image"></div>
            <div className="company-business-area-contents">
              <b>개요</b>
              <br />
              자동차는 시동부터 운전, 주차의 과정까지 일련의 기계와 전자
              장치들의 상호작용으로 작동되고 있습니다. 각각의 기능을 작동시키기
              <br />
              위해서는 작동부에 전월을 인가하거나 동작 신호를 입력하기 위한 각종
              SWITCH 장칙 필수적이며, 자동차 내에 안전 및 각종 편의장치의 종류가
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
            <div className="company-business-area-title">
              ◼ 마그네슘 다이캐스팅
            </div>
            <div className="company-business-area-image"></div>
            <div className="company-business-area-contents">
              <b>개요</b>
              <br />
              마그네슘은 현재 사용되는 금속 중에서도 매장량이 매우 풍부하고 100%
              재황용이 가능한 금속입니다.
              <br />
              자동차의 전자화와 더불어 친환경 기술이 대거 적용되는 추세로
              마그네슘의 활용가치가 주목받고 있습니다. 이 마그네슘은 전자파
              차폐효과가 매우 뛰어나며 동일한 질량일 경우 강철 대비 1/4의 무게만
              가질 정도로 경량성 또한 매우 우수합니다.
              <br />
              모베이스 오토테크는 1993년부터 마그네슘 다이캐스팅 사업을 시작하여
              20년이 넘는 기간 동안 축적한 노하우를 통해 우수한 마그네슘 제품을
              생산하고 있습니다,.
              <br />
              획기적으로 발전시키고 있습니다.
              <div className="company-business-area-contents-dashed-line" />
              <b>주요 적용(가능) 품목</b>
              <br />
              자동차용 각종 구조물(스티어링 휠, 스티어링 칼럼 락, 시트 프레임
              등), IT 기기(휴대폰, 태블릿 PC)케이스, 의료기기 구조물 및 케이스,
              전동공구 프레임, 광학기기 프레임, 화장품 부속 도구 등
            </div>
            {/* */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Company;
