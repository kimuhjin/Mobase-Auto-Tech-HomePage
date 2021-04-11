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
          사업장
        </div>
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
      </div>
    </div>
  );
}

export default Contact;
