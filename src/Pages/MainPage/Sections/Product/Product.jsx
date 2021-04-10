import './Product.css';
import React,{useState} from "react"
function Product() {
  const [content,setContent]=useState(1)
  return (
    <div className="product-container">
    <div className="product-sub-header">
    <div className={`product-sub-header-menu ${content===1 ?"clicked":""}`} onClick={()=>setContent(1)}>
 LDC
    </div>
     <div className={`product-sub-header-menu ${content===2 ?"clicked":""}`} onClick={()=>setContent(2)}>
   DC-DC Converter
    </div>
    </div>
    <div className="product-contents">
      {content ===1 &&<div className="product-image-1"></div>}
      {content ===2 &&<div className="product-image-2"></div>}
     {content ===3 &&("Product content 3")}
     </div>
    </div>
  );
}

export default Product;
