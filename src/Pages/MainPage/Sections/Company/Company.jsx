import './Company.css';
import React,{useState} from "react"
function Company() {
  const [content,setContent]=useState(1)
  return (
    <div className="company-container">
    <div className="company-sub-header">
    <div className="company-sub-header-menu" onClick={()=>setContent(1)}>
    Company menu 1
    </div>
     <div className="company-sub-header-menu" onClick={()=>setContent(2)}>
    Company menu 2
    </div>
     <div className="company-sub-header-menu" onClick={()=>setContent(3)}>
    Company menu 3
    </div>
    </div>
    <div className="company-contents">
     {content ===1 &&("Company content 1")}
     {content ===2 &&("Company content 2")}
     {content ===3 &&("Company content 3")}
     </div>
    </div>
  );
}

export default Company;
