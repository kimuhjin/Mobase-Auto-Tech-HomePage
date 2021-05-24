import "./ScrollToTop.css";
import { GoHome } from "react-icons/go";
function ScrollToTop() {
  return (
    <div
      className="scroll-to-top-layout"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <GoHome className="scroll-to-top-icon" />
    </div>
  );
}
export default ScrollToTop;
