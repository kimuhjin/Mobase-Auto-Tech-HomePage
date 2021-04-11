import "./MainPage.css";
import Company from "./Sections/Company/Company.jsx";
import Product from "./Sections/Product/Product.jsx";
import Recruit from "./Sections/Recruit/Recruit.jsx";
import Contact from "./Sections/Contact/Contact.jsx";
import Rnd from "./Sections/Rnd/Rnd.jsx";
import Business from "./Sections/Business/Business.jsx";

function MainPage() {
  return (
    <div className="main-page-container">
      <div className="main-page-banner-container">
        <div className="main-page-banner1" />
        <div className="main-page-banner2" />
        <div />
      </div>
      <div className="main-page-section" id="company-section">
        <div className="main-page-section-title-wrapper">
          <div className="main-page-section-title">회사 소개</div>
        </div>
        <Company />
      </div>
      <div className="main-page-section" id="product-section">
        <div className="main-page-section-title">제품 소개</div>
        <Product />
      </div>
      <div className="main-page-section" id="rnd-section">
        <div className="main-page-section-title">연구 개발</div>
        <Rnd />
      </div>
      <div className="main-page-section" id="recruit-section">
        <div className="main-page-section-title">채용 정보</div>
        <Recruit />
      </div>
      <div className="main-page-section" id="business-section">
        <div className="main-page-section-title">윤리 경영</div>
        <Business />
      </div>
      <div className="main-page-section" id="contact-section">
        <div className="main-page-section-title">찾아오는 길</div>
        <Contact />
      </div>
    </div>
  );
}

export default MainPage;
