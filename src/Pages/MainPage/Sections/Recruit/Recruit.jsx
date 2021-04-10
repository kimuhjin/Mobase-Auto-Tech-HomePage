import './Recruit.css';
import React,{useState} from "react"
function Recruit() {
  const [content,setContent]=useState(1)
  return (
    <div className="recruit-container">
    <div className="recruit-sub-header">
    <div className={`recruit-sub-header-menu ${content===1 ?"clicked":""}`} onClick={()=>setContent(1)}>
 인재상
    </div>
     <div className={`recruit-sub-header-menu ${content===2 ?"clicked":""}`} onClick={()=>setContent(2)}>
 인재육성
    </div>
         <div className={`recruit-sub-header-menu ${content===3 ?"clicked":""}`} onClick={()=>setContent(3)}>
 지원하기
    </div>
    </div>
    <div className="recruit-contents">
      {content ===1 &&<div className="recruit-image-1"/>}
      {content ===2 &&<div className="recruit-image-2"/>}
      {content ===3 &&(
      <>
      <div className="recruit-infomation-container">
      <div className="recruit-image-recruit1"/>
      <div className="recruit-infomation">
      <a href="mailto:recruit@mobase-autotech.com?subject=상반기 모베이스 오토테크 신입사원 지원&body=상반기 모베이스 오토테크 신입사원 지원 서류입니다." className="recruit-email-btn">
      이메일 지원하기
      </a>
      </div>
      <div className="recruit-image-recruit2"/>
      </div>
      </>
      )}
     </div>
    </div>
  );
}

export default Recruit;
