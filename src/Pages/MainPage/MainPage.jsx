import './MainPage.css';
import Company from "./Sections/Company/Company.jsx"
import Product from "./Sections/Product/Product.jsx"
import Recruit from "./Sections/Recruit/Recruit.jsx"
import Contact from "./Sections/Contact/Contact.jsx"

function MainPage() {
  return (
    <div className="main-page-container">
    <div className="main-page-banner-container">
    <div className="main-page-banner1"/>
    <div className="main-page-banner2"/>
    <div/>
    </div>
<div className="main-page-section" id="company-section">
<Company/>
</div>
<div className="main-page-section" id="product-section"><Product/></div>
<div className="main-page-section" id="recruit-section"><Recruit/></div>
<div className="main-page-section" id="contact-section"><Contact/></div>
    </div>
  );
}

export default MainPage;
