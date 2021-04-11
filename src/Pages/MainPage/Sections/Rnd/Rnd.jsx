import "./Rnd.css";
import React, { useState } from "react";
function Rnd() {
  const [content, setContent] = useState(1);
  return (
    <div className="rnd-container">
      <div className="rnd-sub-header">
        <div
          className={`rnd-sub-header-menu ${content === 1 ? "clicked" : ""}`}
          onClick={() => setContent(1)}
        >
          R&D센터
        </div>
        <div
          className={`rnd-sub-header-menu ${content === 2 ? "clicked" : ""}`}
          onClick={() => setContent(2)}
        >
          연구분야
        </div>
        <div
          className={`rnd-sub-header-menu ${content === 3 ? "clicked" : ""}`}
          onClick={() => setContent(3)}
        >
          연구성과
        </div>
      </div>
      <div className="rnd-contents">{content === 1 && <div></div>}</div>
    </div>
  );
}

export default Rnd;
