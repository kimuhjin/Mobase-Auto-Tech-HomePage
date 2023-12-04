import "./Footer.css";
import logo from "../../asset/image/logo_footer.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-box">
        <img className="footer-logo" src={logo} alt="MOBASE AUTO TECH Logo" />
        모베이스오토테크 주식회사
      </div>
      <div className="footer-description">
        상호 : 모베이스오토테크(주) &nbsp;&nbsp;대표 : 윤병관
        &nbsp;&nbsp;사업자등록번호 : 131-81-95154
        <br />
        경기 화성시 동탄첨단산업1로73 &nbsp;&nbsp;TEL:032-500-5825
        &nbsp;&nbsp;FAX:032-500-5989
        <br />
        <div className="footer-copyright">
          COPYRIGHT MOBASE AUTOTECH ALL RIGHTS RESERVED
        </div>
      </div>
      <div className="footer-logo-box" />
    </div>
  );
}

export default Footer;
