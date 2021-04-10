import Header from "./Components/Header/Header.jsx"
import MainPage from "./Pages/MainPage/MainPage.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import smoothscroll from 'smoothscroll-polyfill';
import "./App.css"

function App() {
  smoothscroll.polyfill();
  return (
    <div className="app">
    <Header/>
    <MainPage/>
    <Footer/>
    </div>
  );
}

export default App;
