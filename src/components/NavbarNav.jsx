import "../style.css";
import { FaHouse, FaUser, FaKeyboard, FaPaperclip } from "react-icons/fa6";

const NavbarNav = () => {
  return (
    <nav className="flex justify-center items-center p-5 gap-80 font-bold w-full">
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
      </ul>
    </nav>
  );
};

export default NavbarNav;
