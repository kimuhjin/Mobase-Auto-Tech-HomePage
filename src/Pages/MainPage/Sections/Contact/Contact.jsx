import "./Contact.css";
import React, { useState } from "react";
import KakaoMap from "../../../../Components/KakaoMap/KakaoMap";
function Contact() {
  const [content, setContent] = useState(1);
  return (
    <div className="contact-container">
      <div className="contact-sub-header">
        <div
          className={`contact-sub-header-menu ${
            content === 1 ? "clicked" : ""
          }`}
          onClick={() => setContent(1)}
        >
          위치
        </div>
        {/* <div
          className={`contact-sub-header-menu ${
            content === 2 ? "clicked" : ""
          }`}
          onClick={() => setContent(2)}
        >
          연락처
        </div> */}
      </div>
      <div className="contact-contents">
        {content === 1 && (
          <KakaoMap
            location={{ x: 37.21475486667424, y: 127.09381401782406 }}
            infoWindowMessage={"모베이스 오토테크"}
            markerOn={true}
            infoWindowOn={true}
            level={5}
          />
        )}
        {content === 2 && (
          <div className="contact-contact">
            <br />
            담당자 : 김직재 <br />
            연락처 : 010-5817-0714 <br />
            이메일 : jjkim@sccc.kr
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
