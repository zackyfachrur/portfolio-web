import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage.jsx'
import About from "./pages/AboutPage.jsx";
import Navbar from './components/NavbarNav.jsx'
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
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <FooterFoot />
    </BrowserRouter>
  );
};

export default App;