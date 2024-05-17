import "../style.css";
import WaveOfAbout from "../pages/About/AboutWave";
import WelcomeSectionOfAbout from "../pages/About/AboutWelcomeSection";
import ProfileSectionOfAbout from "../pages/About/AboutProfileSection";
import ContactForm from "../components/ContactForm";

const AboutPage = () => {
  return (
    <>
      <WelcomeSectionOfAbout />
      <WaveOfAbout />
      <ProfileSectionOfAbout />
      <ContactForm />
    </>
  );
};

export default AboutPage;
