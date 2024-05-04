import '../style.css'
import { FaHouse, FaUser, FaKeyboard, FaPaperclip } from "react-icons/fa6";
const NavbarNav = () => {
return (
  <nav className="flex justify-center items-center p-5 gap-80 font-bold ">
    <h1
      className="flex justify-center items-center text-xl font-bold"
      onClick={() => (
        window.open("https://react-icons.github.io/react-icons/icons/fa6/"),
        "_blank"
      )}
    >
      ZF.
    </h1>
    <ul className="flex justify-center items-center gap-5">
      <li className="flex justify-center items-center gap-1 hover:text-blue-700 hover:cursor-pointer before:h-1 before:w-1 before:hover:bg-blue-700">
        <FaHouse />
        Home
      </li>
      <li className="flex justify-center items-center gap-1 hover:text-blue-700 hover:cursor-pointer before:h-1 before:w-1 before:hover:bg-blue-700">
        <FaUser />
        About
      </li>
      <li className="flex justify-center items-center gap-1 hover:text-blue-700 hover:cursor-pointer before:h-1 before:w-1 before:hover:bg-blue-700">
        <FaKeyboard />
        Projects
      </li>
      <li className="flex justify-center items-center gap-1 hover:text-blue-700 hover:cursor-pointer before:h-1 before:w-1 before:hover:bg-blue-700">
        <FaPaperclip />
        Resume
      </li>
    </ul>
  </nav>
);
}

export default NavbarNav;