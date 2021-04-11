import "./Rnd.css";
import React, { useState } from "react";
function Rnd() {
  const [content, setContent] = useState(1);
  return (
    <div className="rnd-container">
      <div className="rnd-sub-header">
        <div
          className={`rnd-sub-header-menu ${content === 1 ? "clicked" : ""}`}
          onClick={() => setContent(1)}
        >
          R&D 센터
        </div>
        <div
          className={`rnd-sub-header-menu ${content === 2 ? "clicked" : ""}`}
          onClick={() => setContent(2)}
        >
          연구분야
        </div>
        <div
          className={`rnd-sub-header-menu ${content === 3 ? "clicked" : ""}`}
          onClick={() => setContent(3)}
        >
          연구성과
        </div>
      </div>
      <div className="rnd-contents">
        {content === 1 && (
          <div className="rnd-center-container">
            <div className="rnd-center-title">
              모베이스 오토테크는 국내 1위, Global Top 10을 이루기 위해 <br />
              다음과 같은 전약으로 연구를 진행하고 있습니다.
            </div>
            <div className="rnd-center-sub-title">
              R&D 목표 달성을 위한 전략
            </div>
            <div className="rnd-center-sub-title-line" />
            <div className="rnd-center-article-title">
              저희 모베이스 오토테크는 활발한 R&D투바와 최고의 교육과정으로
              연구인재를 육성하고 있습니다.
              <br />
              <br />
            </div>
            <div className="rnd-center-article">
              최신의 자동차 기술을 반영하고, 시장을 선도하기 위한 끊임없는
              연구로 신기술과 신제품을 개발하며, 더불어 현재 생산중인 제품의
              소형화, 저비용화, 모듈화를 위한 선행 및 양산 개발을 통하여 고객의
              만족도를 극대화 하고 있습니다.
              <br />
              <br />
              오늘날의 자동차는 시스템의 전자화 추세에 따라 소프트웨어의 활용이
              중요해졌습니다. 저희 모베이스 오토테크는 이것의 중요성을
              최우선으로 인식하여 소프트웨어의 표준화, 글로벌 플랫폼의 적용,
              Test Case의 개발과 더불어 운전자의 안전을 고려한
              ISO26262(기능안전프로세스), 전세계 지역별 대응을 위환
              A-SPICE프로세스 인증도 준비하고 있습니다.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rnd;
