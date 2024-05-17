import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./views/AboutPage.jsx";
import PortfolioPage from "./views/PortfolioPage.jsx";
import Navbar from "./components/NavbarNav.jsx";
import FooterFoot from "./components/FooterFoot";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
      </Routes>
      <FooterFoot />
    </BrowserRouter>
  );
};

export default App;
