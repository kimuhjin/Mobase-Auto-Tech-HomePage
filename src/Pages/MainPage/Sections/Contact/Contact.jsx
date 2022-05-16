import "./Contact.css";
import React, { useState } from "react";
import KakaoMap from "../../../../Components/KakaoMap/KakaoMap";
import { MdLocationOn } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaFax } from "react-icons/fa";

function Contact() {
  const [content, setContent] = useState(1);
  return (
    <div className='contact-container'>
      <div className='contact-sub-header'>
        <div
          className={`contact-sub-header-menu ${
            content === 1 ? "clicked" : ""
          }`}
          onClick={() => setContent(1)}
        >
          사업장
        </div>
      </div>
      <div className='contact-contents'>
        {content === 1 && (
          <div className='contact-contents-container'>
            <KakaoMap
              location={{ x: 37.21475486667424, y: 127.09381401782406 }}
              infoWindowMessage={"모베이스 오토테크"}
              markerOn={true}
              infoWindowOn={true}
              level={5}
            />
            <div className='contact-box'>
              <div className='contact-box-infomation'>
                <div className='contact-box-contents'>
                  <MdLocationOn className='contact-box-icon' />
                  주소 : 경기 화성시 동탄첨단산업1로73
                </div>
                <div className='contact-box-contents'>
                  <MdPhone className='contact-box-icon' /> 전화 : 032-500-5825
                </div>
                <div className='contact-box-contents'>
                  <FaFax className='contact-box-icon-s' /> 팩스 : 032-500-5989
                </div>
              </div>
              <div className='contact-box-infomation-image' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
