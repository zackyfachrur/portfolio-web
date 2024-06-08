import "../style.css";
import {
  FaMobileScreen,
  FaUser,
  FaKeyboard,
  FaPaperclip,
  FaBarsStaggered,
  FaXmark,
} from "react-icons/fa6";

import { Button } from "flowbite-react";
import { useState } from "react";

const NavMobileMenu = () => {
  return (
    <>
      <div
        className="absolute max-[650px]:right-10 flex w-52 px-8 py-8 pr-5 text-2xl rounded-l-full top-20 bg-custom-green-dark justify-end items-end"
        data-aos-duration="600"
        data-aos="fade-left"
      >
        <ul className="flex flex-col justify-center">
          <li
            className="flex flex-row items-center hover:bg-custom-green-light hover:text-custom-green-dark rounded-xl hover:justify-center animate"
            onClick={() => window.location.assign("/")}
          >
            <FaUser className="w-4 h-4 mr-3" />
            About
          </li>
          <li
            className="flex flex-row items-center hover:bg-custom-green-light hover:text-custom-green-dark rounded-xl hover:justify-center animate"
            onClick={() => window.location.assign("/portfolio")}
          >
            <FaKeyboard className="w-4 h-4 mr-3" />
            Portfolio
          </li>
          <li
            className="flex flex-row items-center hover:bg-custom-green-light hover:text-custom-green-dark rounded-xl hover:justify-center animate"
            onClick={() => window.location.assign("/resume")}
          >
            <FaPaperclip className="w-4 h-4 mr-3" />
            Resume
          </li>
          <li
            className="flex flex-row items-center hover:bg-custom-green-light hover:text-custom-green-dark rounded-xl hover:justify-center animate"
            onClick={() => window.location.assign("/contact")}
          >
            <FaMobileScreen className="w-4 h-4 mr-3" />
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

const NavbarNav = () => {
  const [NavMobile, setNavMobile] = useState(false);
  return (
    <nav className="fixed -right-10 z-50 p-5 font-bold flex max-[1600px]:pl-96 xl:flex center max-[1600px]:w-full max-[910px]:pl-72 max-[820px]:pl-52 max-[745px]:pl-32 md:center max-[650px]:pl-96 max-[528px]:pl-80 max-[460px]:pl-72 max-[420px]:pl-60">
      <ul className="gap-5 center">
        <Button
          color="success"
          className="max-[1600px]:hidden max-[650px]:flex bg-custom-green-dark"
          onClick={() => setNavMobile(!NavMobile)}
        >
          {NavMobile ? (
            <FaXmark data-aos-duration="600" data-aos="flip-left" />
          ) : (
            <FaBarsStaggered data-aos-duration="600" data-aos="flip-left" />
          )}
        </Button>
        {NavMobile && <NavMobileMenu />}
        <Button.Group className="text-xl font-bold drop-shadow-xl max-[650px]:hidden">
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
