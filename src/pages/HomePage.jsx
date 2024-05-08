import "../style.css";

import WaveOfHome from "../components/Home/HomeWave";
import WelcomeSectionOfHome from "../components/Home/HomeWelcomeSection";
import ProfileSectionOfHome from "../components/Home/HomeProfileSection";
import MessageButton from "../components/Home/HomeContactForm";

const HomePage = () => {
  return (
    <>
      <WelcomeSectionOfHome />
      <WaveOfHome />
      <ProfileSectionOfHome />
      <MessageButton />
    </>
  );
};

export default HomePage;
