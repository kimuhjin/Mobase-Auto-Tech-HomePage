import "./Footer.css";
import logo from "../../asset/image/logo_footer.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img className="logo" src={logo} alt="MOBASE AUTO TECH Logo" />
        주식회사 모베이스 오토테크
      </div>
      <div className="footer-description">
        상호 : (주)모베이스오토테크 &nbsp;&nbsp;대표 : 박노헌
        &nbsp;&nbsp;사업자등록번호 : 131-81-95154
        <br />
        경기 화성시 동탄첨단산업1로73 &nbsp;&nbsp;TEL:032-500-5874
        &nbsp;&nbsp;FAX:032-500-5989
        <br />
        <div className="footer-copyright">
          COPYRIGHT MOBASE AUTOTECH ALL RIGHTS RESERVED
        </div>
      </div>
      <div className="footer-logo" />
    </div>
  );
}

export default Footer;
