import './MainPage.css';
import Company from "./Sections/Company/Company.jsx"
import Product from "./Sections/Product/Product.jsx"
import Recruit from "./Sections/Recruit/Recruit.jsx"

function MainPage() {
  return (
    <div className="main-page-container">
    <div className="main-page-banner-container">
    <div className="main-page-banner1"/>
    <div className="main-page-banner2"/>
    {/* <div className="main-page-banner-customer">
     <img className="logo" src="http://www.seoyonelec.com/data/file/client/thumb-3422075460_pgSCezbP_e9e177ff4a21d98dc1d7b12a799c27c853651447_168x60.jpg" alt="MOBASE AUTO TECH Logo"/>
      <img className="logo" src="http://www.seoyonelec.com/data/file/client/thumb-3422075460_Sfn9WoBm_b08e0e0fc3ea1bbae59f56c6646f441cfaf47e3f_168x60.jpg" alt="MOBASE AUTO TECH Logo"/>
       <img className="logo" src="http://www.seoyonelec.com/data/file/client/thumb-3422075460_3QCmExVj_0dae0f81d284cb642b6b1f5e2a055b08d4106e9c_168x60.jpg" alt="MOBASE AUTO TECH Logo"/>
        <img className="logo" src="http://www.seoyonelec.com/data/file/client/thumb-3422075460_5pyISg8r_db1b004c7e3a45f0e505655b78bfd6042726e625_168x60.jpg" alt="MOBASE AUTO TECH Logo"/>
         <img className="logo" src="http://www.seoyonelec.com/data/file/client/thumb-3422075460_rK54ipQN_ef5849a2edb9afc87de0da821e66dc5c3cb87170_168x60.jpg" alt="MOBASE AUTO TECH Logo"/>
          <img className="logo" src="http://www.seoyonelec.com/data/file/client/thumb-3422075460_SML1oUAj_384a91126f31748363efca6bf945cab7b5d5b6d9_168x60.jpg" alt="MOBASE AUTO TECH Logo"/>
    </div> */}
    <div/>
    </div>
    
<div className="main-page-section" id="company-section">
<Company/>
</div>
<div className="main-page-section" id="product-section"><Product/></div>
<div className="main-page-section" id="recruit-section"><Recruit/></div>
    </div>
  );
}

export default MainPage;
