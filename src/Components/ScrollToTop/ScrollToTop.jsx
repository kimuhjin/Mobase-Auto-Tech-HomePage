import "./ScrollToTop.css";
import { AiOutlineToTop } from "react-icons/ai";
function ScrollToTop() {
  return (
    <div
      className="scroll-to-top-layout"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <AiOutlineToTop className="scroll-to-top-icon" />
    </div>
  );
}
export default ScrollToTop;
