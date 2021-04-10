import './Product.css';
import React,{useState} from "react"
function Product() {
  const [content,setContent]=useState(1)
  return (
    <div className="product-container">
    <div className="product-sub-header">
    <div className="product-sub-header-menu" onClick={()=>setContent(1)}>
    Product menu 1
    </div>
     <div className="product-sub-header-menu" onClick={()=>setContent(2)}>
    Product menu 2
    </div>
     <div className="product-sub-header-menu" onClick={()=>setContent(3)}>
    Product menu 3
    </div>
    </div>
    <div className="product-contents">
     {content ===1 &&("Product content 1")}
     {content ===2 &&("Product content 2")}
     {content ===3 &&("Product content 3")}
     </div>
    </div>
  );
}

export default Product;
