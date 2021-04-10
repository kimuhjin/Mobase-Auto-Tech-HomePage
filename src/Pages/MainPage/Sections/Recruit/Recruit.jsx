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
    </div>
    <div className="recruit-contents">
      {content ===1 &&<div className="recruit-image-1"></div>}
      {content ===2 &&<div className="recruit-image-2"></div>}
     </div>
    </div>
  );
}

export default Recruit;
