import "../style.css";
import {
  FaMobileScreen,
  FaUser,
  FaKeyboard,
  FaPaperclip,
} from "react-icons/fa6";

import { Button } from "flowbite-react";

const NavbarNav = () => {
  return (
    <nav className="fixed z-50 p-5 font-bold ml-72 xl:w-full md:w-full center">
      <ul className="gap-5 center">
        <Button.Group className="text-xl font-bold drop-shadow-xl">
          <Button
            color="success"
            className="bg-custom-green-dark"
            onClick={() => window.location.assign("/")}
          >
            <FaUser className="w-4 h-4 mr-3" />
            About
          </Button>
          <Button
            color="success"
            className="bg-custom-green-dark"
            onClick={() => window.location.assign("/portfolio")}
          >
            <FaKeyboard className="w-4 h-4 mr-3" />
            Portfolio
          </Button>
          <Button
            color="success"
            className="bg-custom-green-dark"
            onClick={() => window.location.assign("/resume")}
          >
            <FaPaperclip className="w-4 h-4 mr-3" />
            Resume
          </Button>
          <Button
            color="success"
            className="bg-custom-green-dark"
            onClick={() => window.location.assign("/contact")}
          >
            <FaMobileScreen className="w-4 h-4 mr-3" />
            Contact
          </Button>
        </Button.Group>
      </ul>
    </nav>
  );
};

export default NavbarNav;
