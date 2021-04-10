import './MainPage.css';
import Company from "./Sections/Company/Company.jsx"
import Product from "./Sections/Product/Product.jsx"
import Recruit from "./Sections/Recruit/Recruit.jsx"

function MainPage() {
  return (
    <div className="main-page-container">
    <div className="main-page-banner"/>
    
<div className="main-page-section" id="company-section">
<Company/>
</div>
<div className="main-page-section" id="product-section"><Product/></div>
<div className="main-page-section" id="recruit-section"><Recruit/></div>
    </div>
  );
}

export default MainPage;
