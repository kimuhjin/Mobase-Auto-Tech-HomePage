import './Company.css';
import React,{useState} from "react"
function Company() {
  const [content,setContent]=useState(1)
  return (
    <div className="company-container">
    <div className="company-sub-header">
    <div className={`company-sub-header-menu ${content===1 ?"clicked":""}`} onClick={()=>setContent(1)}>
 Vision
    </div>
     <div className={`company-sub-header-menu ${content===2 ?"clicked":""}`} onClick={()=>setContent(2)}>
   사업영역
    </div>
    </div>
    <div className="company-contents">
     {content ===1 &&<div className="company-image-1"></div>}
        {content ===2 &&<div className="company-image-2"></div>}
     {content ===3 &&("Company content 3")}
     </div>
    </div>
  );
}

export default Company;
