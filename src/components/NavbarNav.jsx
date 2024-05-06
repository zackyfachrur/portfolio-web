import '../style.css'
import {
  FaHouse,
  FaUser,
  FaKeyboard,
  FaPaperclip,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaRocketchat,
} from "react-icons/fa6";
import { useState } from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-row gap-1 absolute">
      <FaLinkedinIn className="hover:text-indigo-700 hover:bg-white text-3xl border-2 border-indigo-700 rounded-lg p-1 hover:cursor-pointer text-white bg-indigo-700 transition-all ease-in duration-100" />
      <FaGithub className="hover:text-black hover:bg-white text-3xl border-2 border-black rounded-lg p-1 hover:cursor-pointer text-white bg-black transition-all ease-in duration-100" />
      <FaWhatsapp className="hover:bg-white hover:text-green-600 text-3xl border-2 border-green-500 rounded-lg p-1 hover:cursor-pointer text-white bg-green-500 transition-all ease-in duration-100" />
    </div>
  );
};

const NavbarNav = () => {
  const [contactLogo, setContactLogo] = useState(false);

  return (
    <nav className="flex justify-center items-center p-5 gap-32 font-bold w-full">
      <h1
        className="flex justify-center items-center text-xl font-bold"
        onClick={() => (
          window.open("https://react-icons.github.io/react-icons/icons/fa6/"),
          "_blank"
        )}
      >
        Portfolio | ZF.
      </h1>
      <ul className="flex justify-center items-center gap-5">
        <li className="flex justify-center items-center gap-1">
          <FaHouse />
          <span className="flex justify-center items-centerhover:text-indigo-700 hover:cursor-pointer before:h-1 before:w-full flex-col-reverse before:hover:bg-indigo-700 pt-1 hover:text-indigo-700 transition-all ease-in duration-100 before:transition-all before:ease-in before:duration-100">
            Home
          </span>
        </li>
        <li className="flex justify-center items-center gap-1">
          <FaUser />
          <span className="flex justify-center items-centerhover:text-indigo-700 hover:cursor-pointer before:h-1 before:w-full flex-col-reverse before:hover:bg-indigo-700 pt-1 hover:text-indigo-700 transition-all ease-in duration-100 before:transition-all before:ease-in before:duration-100">
            About
          </span>
        </li>
        <li className="flex justify-center items-center gap-1">
          <FaKeyboard />
          <span className="flex justify-center items-centerhover:text-indigo-700 hover:cursor-pointer before:h-1 before:w-full flex-col-reverse before:hover:bg-indigo-700 pt-1 hover:text-indigo-700 transition-all ease-in duration-100 before:transition-all before:ease-in before:duration-100">
            Projects
          </span>
        </li>
        <li className="flex justify-center items-center gap-1">
          <FaPaperclip />
          <span className="flex justify-center items-centerhover:text-indigo-700 hover:cursor-pointer before:h-1 before:w-full flex-col-reverse before:hover:bg-indigo-700 pt-1 hover:text-indigo-700 transition-all ease-in duration-100 before:transition-all before:ease-in before:duration-100">
            Resume
          </span>
        </li>
        <div className="flex flex-row gap-2">
          <button
            className="rounded-lg border-2 h-8 border-indigo-700 text-white hover:bg-white hover:text-indigo-700 bg-indigo-700 font-bold py-1 px-3 transition-all ease-in duration-100"
            onClick={() => setContactLogo(!contactLogo)}
          >
            <FaRocketchat />
          </button>
          <div>{contactLogo && <Contact />}</div>
        </div>
      </ul>
    </nav>
  );
};

export default NavbarNav;