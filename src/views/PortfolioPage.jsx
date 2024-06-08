import "../tailwind.css";
import ContactForm from "../components/ContactForm";
import PortfolioHome from "../pages/Portfolio/PortfolioHome";

const PortfolioPage = () => {
  return (
    <div className="overflow-x-hidden">
      <PortfolioHome />
      <ContactForm />
    </div>
  );
};

export default PortfolioPage;
