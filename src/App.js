import React, { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
import smoothscroll from "smoothscroll-polyfill";
import "./App.css";

function App() {
  const [clickedMenu, setClickedMenu] = useState("");
  const [content, setContent] = useState(1);
  smoothscroll.polyfill();
  return (
    <div className="app">
      <Header clicked={clickedMenu} setClicked={setClickedMenu} />
      <MainPage
        clicked={clickedMenu}
        setClicked={setClickedMenu}
        content={content}
        setContent={setContent}
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
