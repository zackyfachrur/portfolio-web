import "../style.css";
import {
  FaCircleArrowRight,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaRegCommentDots,
  FaRegEnvelope,
} from "react-icons/fa6";

const FooterFoot = () => {
  return (
    <footer className="flex-col center gap-10 w-full h-full bg-indigo-700 rounded-t-lg text-white font-bold">
      <div className="flex-row center gap-60 w-full h-60">
        <div className="flex flex-col gap-5  w-60">
          <h1 className="text-2xl cursor-default">Portfolio | ZF.</h1>
          <ul className="flex gap-3 flex-col cursor-default">
            <li>
              <p>Thank you for visiting this portfolio website</p>
            </li>
            <li>
              <p>Connect with me on LinkedIn, Github and Others</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold cursor-default">Links</h1>
          <ul className="flex justify-start items-start flex-col gap-2 font-semibold">
            <li className="center gap-1 flex-row cursor-pointer hover:scale-95 animate">
              <FaCircleArrowRight />
              Home
            </li>
            <li className="center gap-1 flex-row cursor-pointer hover:scale-95 animate">
              <FaCircleArrowRight />
              About
            </li>
            <li className="center gap-1 flex-row cursor-pointer hover:scale-95 animate">
              <FaCircleArrowRight />
              Projects
            </li>
            <li className="center gap-1 flex-row cursor-pointer hover:scale-95 animate">
              <FaCircleArrowRight />
              Resume
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl flex gap-5 cursor-default">
            {"Let's"} Connect <FaRegCommentDots />
          </h1>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center flex-row gap-2 cursor-pointer hover:scale-95 animate">
              <FaRegEnvelope className="text-xl " /> mochzackyfa@gmail.com
            </li>
            <li className="flex items-center flex-row gap-2 cursor-pointer hover:scale-95 animate">
              <FaWhatsapp className="text-xl" /> +62-877-0357-7988
            </li>
          </ul>
          <ul className="flex flex-row gap-2 text-xl">
            <li>
              <FaLinkedinIn className="p-1 text-3xl text-indigo-700 animate bg-white border-2 border-white rounded-lg cursor-pointer hover:scale-95" />
            </li>
            <li>
              <FaGithub className="p-1 text-3xl text-white animate bg-black border-2 border-black rounded-lg cursor-pointer hover:scale-95" />
            </li>
            <li>
              <FaWhatsapp className="p-1 text-3xl text-white animate bg-green-500 border-2 border-green-500 rounded-lg cursor-pointer hover:scale-95" />
            </li>
          </ul>
        </div>
      </div>
      <div className="center h-20 text-xl font-bold border-t-2 w-full container">
        <p>&copy; {new Date().getFullYear()} Made with 🖤</p>
      </div>
    </footer>
  );
};

export default FooterFoot;
