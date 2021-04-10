import './Header.css';
import logo from "../../asset/image/logo.png"
function Header() {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="MOBASE AUTO TECH Logo"/>
      <div className="menu-container">
      <div className="menu">Company</div>
      <div className="menu">Product</div>
      <div className="menu">R&BD</div>
      <div className="menu">IR</div>
      </div>
    </div>
  );
}

export default Header;
