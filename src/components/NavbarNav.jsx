import "../style.css";
import { FaHouse, FaUser, FaKeyboard, FaPaperclip } from "react-icons/fa6";

const NavbarNav = () => {
  return (
    <nav className="container w-full p-5 font-bold center gap-80">
      <h1
        className="text-xl font-bold center"
        onClick={() => (
          window.open("https://react-icons.github.io/react-icons/icons/fa6/"),
          "_blank"
        )}
      >
        Portfolio | ZF.
      </h1>
      <ul className="gap-5 center">
        <li className="gap-1 center">
          <FaHouse />
          <span
            className="flex-col-reverse pt-1 animate center items-centerhover:text-indigo-700 hover:cursor-pointer before:h-1 before:w-full before:hover:bg-indigo-700 hover:text-indigo-700 before:transition-all before:ease-in before:duration-100"
            onClick={() => window.location.assign("/")}
          >
            Home
          </span>
        </li>
        <li className="flex items-center justify-center gap-1">
          <FaUser />
          <span
            className="flex flex-col-reverse justify-center pt-1 transition-all duration-100 ease-in items-centerhover:text-indigo-700 hover:cursor-pointer before:h-1 before:w-full before:hover:bg-indigo-700 hover:text-indigo-700 before:transition-all before:ease-in before:duration-100"
            onClick={() => window.location.assign("/about")}
          >
            About
          </span>
        </li>
        <li className="flex items-center justify-center gap-1">
          <FaKeyboard />
          <span
            className="flex flex-col-reverse justify-center pt-1 transition-all duration-100 ease-in items-centerhover:text-indigo-700 hover:cursor-pointer before:h-1 before:w-full before:hover:bg-indigo-700 hover:text-indigo-700 before:transition-all before:ease-in before:duration-100"
            onClick={() => window.location.assign("/projects")}
          >
            Projects
          </span>
        </li>
        <li className="flex items-center justify-center gap-1">
          <FaPaperclip />
          <span
            className="flex flex-col-reverse justify-center pt-1 transition-all duration-100 ease-in items-centerhover:text-indigo-700 hover:cursor-pointer before:h-1 before:w-full before:hover:bg-indigo-700 hover:text-indigo-700 before:transition-all before:ease-in before:duration-100"
            onClick={() => window.location.assign("/resume")}
          >
            Resume
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarNav;
