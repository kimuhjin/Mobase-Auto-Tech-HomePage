import "./Company.css";

import React, { useState } from "react";
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
                  <div className="company-vision-contents-icon" />
                  <div className="company-vision-contents-text">
                    공정한 사회
                  </div>
                </div>
                <div className="company-vision-contents-box">
                  <div className="company-vision-contents-icon" />
                  <div className="company-vision-contents-text">가족 중심</div>
                </div>
                <div className="company-vision-contents-box">
                  <div className="company-vision-contents-icon" />
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
                  <div className="company-vision-contents-icon" />
                  <div className="company-vision-contents-text">상호존중</div>
                </div>
                <div className="company-vision-contents-box">
                  <div className="company-vision-contents-icon" />
                  <div className="company-vision-contents-text">인화단결</div>
                </div>
                <div className="company-vision-contents-box">
                  <div className="company-vision-contents-icon" />
                  <div className="company-vision-contents-text">고객감동</div>
                </div>
              </div>
            </div>
          </>
        )}
        {content === 2 && <div className="company-image-2"></div>}
        {content === 3 && <div className="company-image-2"></div>}
      </div>
    </div>
  );
}

export default Company;
