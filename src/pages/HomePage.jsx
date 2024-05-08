import "../style.css";
import FooterFoot from "../components/FooterFoot";
import WaveOfHome from "../components/Home/HomeWave";
import WelcomeSectionOfHome from "../components/Home/HomeWelcomeSection";
import ProfileSectionOfHome from "../components/Home/HomeProfileSection";
import ContactFormOfHome from "../components/Home/HomeContactForm";
import { FaRegMessage, FaXmark } from "react-icons/fa6";
import { useState } from "react";

const HomePage = () => {
  const [ContactFixed, setContactFixed] = useState(false);

  return (
    <>
      <WelcomeSectionOfHome />
      <WaveOfHome />
      <ProfileSectionOfHome />
      <button
        onClick={() => setContactFixed(!ContactFixed)}
        className="fixed right-0 bottom-32 py-2 px-5 rounded-l-lg text-white text-xl bg-indigo-700 hover:bg-white border-2 hover:text-indigo-700 border-indigo-700"
      >
        {ContactFixed ? <FaXmark /> : <FaRegMessage />}
      </button>
      {ContactFixed && <ContactFormOfHome />}
      <FooterFoot />
    </>
  );
};

export default HomePage;
