import "./Business.css";
import React, { useState } from "react";
function Business() {
  const [content, setContent] = useState(1);
  return (
    <div className="business-container">
      <div className="business-sub-header">
        <div
          className={`business-sub-header-menu ${
            content === 1 ? "clicked" : ""
          }`}
          onClick={() => setContent(1)}
        >
          윤리경영
        </div>
        <div
          className={`business-sub-header-menu ${
            content === 2 ? "clicked" : ""
          }`}
          onClick={() => setContent(2)}
        >
          품질/환경안전보건
        </div>
      </div>
      <div className="business-contents">
        {content === 1 && (
          <div className="business-ethics-container">
            <div className="business-ethics-title-line" />
            <div className="business-ethics-title">
              대표이사 윤리경영 메세지
            </div>
            <div className="business-ethics-sub-title">
              안녕하십니까?
              <br />
              모베이스 오토테크 대표이사 손영삼입니다.
            </div>
            <div className="business-ethics-article">
              당사 경영진은 윤리경영의 중요성을 실감하고 모든 구성원이 공감하며
              실천할 수 있는 기업문화를 정착시키기 위해 다음과 같은 노력을
              기울이고 있습니다.
              <div className="business-ethics-article-box">
                <div className="flex">
                  <div className="color-blue">· 첫째</div>&nbsp;&nbsp;공정한
                  경쟁과 균등한 처우를 보장하기 위해 윤리규칙, 행동지침,
                  실천지침을 통해 업무를 수행하고 있습니다.
                </div>
                <div className="flex">
                  <div className="color-blue">· 둘째</div>&nbsp;&nbsp;비윤리적인
                  행위에 대한 감찰 및 실천제도를 운영하여 직/간접 참여자에게
                  책임과 처벌을 강력하게 추진하고 있습니다.
                </div>
              </div>
              글로벌 경쟁시대에서 윤리경영은 기업의 존속과 성장을 위한
              필수사항입니다. 앞으로도 저희 모베이스 오토테크는 사내 구성원들은
              물론 대외적으로 신뢰와 존경을 받을 수 있는 기업으로 거듭나기
              위하여 최선을 다할 것입니다.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Business;
