import "../tailwind.css";
import WaveOfAbout from "../pages/About/AboutWave";
import WelcomeSectionOfAbout from "../pages/About/AboutWelcomeSection";
import ProfileSectionOfAbout from "../pages/About/AboutProfileSection";
import ContactForm from "../components/ContactForm";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <WelcomeSectionOfAbout />
      <WaveOfAbout />
      <ProfileSectionOfAbout />
      <ContactForm />
    </div>
  );
};

export default AboutPage;
