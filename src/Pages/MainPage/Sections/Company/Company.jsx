import './Company.css';
import KakaoMap from "../../../../Components/KakaoMap/KakaoMap"
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
<div className={`company-sub-header-menu ${content===3 ?"clicked":""}`} onClick={()=>setContent(3)}>
   위치
    </div>

    </div>
    <div className="company-contents">
     {content ===1 &&<div className="company-image-1"></div>}
        {content ===2 &&<div className="company-image-2"></div>}
      
     {content ===3 &&<KakaoMap  location={{ x: 37.21475486667424, y:127.09381401782406 }}
                    infoWindowMessage={'모베이스 오토테크'}
                    markerOn={true}
                    infoWindowOn={true}
                    level={4}/>}
     </div>
    </div>
  );
}

export default Company;
