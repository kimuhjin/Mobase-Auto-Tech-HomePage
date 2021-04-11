import "./Business.css";
import React, { useState } from "react";
function Business() {
  const [content, setContent] = useState(1);
  return (
    <div className="business-container">
      <div className="business-sub-header">
        <div
          className={`business-sub-header-menu ${
            content === 1 ? "clicked" : ""
          }`}
          onClick={() => setContent(1)}
        >
          윤리경영
        </div>
        <div
          className={`business-sub-header-menu ${
            content === 2 ? "clicked" : ""
          }`}
          onClick={() => setContent(2)}
        >
          품질/환경안전보건
        </div>
      </div>
      <div className="business-contents">{content === 1 && <div></div>}</div>
    </div>
  );
}

export default Business;
