import './MainPage.css';
import Company from "./Sections/Company/Company.jsx"
import Product from "./Sections/Product/Product.jsx"
function MainPage() {
  return (
    <div className="main-page-container">
<div className="main-page-section">
<Company/>
</div>
<div className="main-page-section"><Product/></div>
<div className="main-page-section">3</div>
    </div>
  );
}

export default MainPage;
