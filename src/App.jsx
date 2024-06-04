import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./views/ContactPage.jsx";
import AboutPage from "./views/AboutPage.jsx";
import PortfolioPage from "./views/PortfolioPage.jsx";
import ResumePage from "./views/ResumePage.jsx";
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
        <Route path="/resume" element={<ResumePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
      <FooterFoot />
    </BrowserRouter>
  );
};

export default App;
