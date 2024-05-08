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
    <footer className="flex-col w-full h-full gap-10 font-bold text-white bg-indigo-700 rounded-t-lg center">
      <div className="container flex flex-row items-center justify-center w-full h-full p-10 xl:justify-center md:flex-row md:justify-center md:items-center xl:items-center xl:gap-60 md:gap-40 sm:flex-col sm:gap-20 sm:justify-start sm:items-start">
        <div className="flex flex-col gap-5 w-60">
          <h1 className="text-2xl cursor-default">Portfolio | ZF.</h1>
          <ul className="flex flex-col gap-3 cursor-default w-60">
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
          <ul className="flex flex-col items-start justify-start gap-2 font-semibold">
            <li className="flex-row gap-1 cursor-pointer center hover:scale-95 animate">
              <FaCircleArrowRight />
              Home
            </li>
            <li className="flex-row gap-1 cursor-pointer center hover:scale-95 animate">
              <FaCircleArrowRight />
              About
            </li>
            <li className="flex-row gap-1 cursor-pointer center hover:scale-95 animate">
              <FaCircleArrowRight />
              Projects
            </li>
            <li className="flex-row gap-1 cursor-pointer center hover:scale-95 animate">
              <FaCircleArrowRight />
              Resume
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="flex gap-5 text-2xl cursor-default">
            {"Let's"} Connect <FaRegCommentDots />
          </h1>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row items-center gap-2 cursor-pointer hover:scale-95 animate">
              <FaRegEnvelope className="text-xl " /> mochzackyfa@gmail.com
            </li>
            <li className="flex flex-row items-center gap-2 cursor-pointer hover:scale-95 animate">
              <FaWhatsapp className="text-xl" /> +62-877-0357-7988
            </li>
          </ul>
          <ul className="flex flex-row gap-2 text-xl">
            <li>
              <FaLinkedinIn className="p-1 text-3xl text-indigo-700 bg-white border-2 border-white rounded-lg cursor-pointer animate hover:scale-95" />
            </li>
            <li>
              <FaGithub className="p-1 text-3xl text-white bg-black border-2 border-black rounded-lg cursor-pointer animate hover:scale-95" />
            </li>
            <li>
              <FaWhatsapp className="p-1 text-3xl text-white bg-green-500 border-2 border-green-500 rounded-lg cursor-pointer animate hover:scale-95" />
            </li>
          </ul>
        </div>
      </div>
      <div className="container w-full h-20 text-xl font-bold border-t-2 center">
        <p>&copy; {new Date().getFullYear()} Made with 🖤</p>
      </div>
    </footer>
  );
};

export default FooterFoot;
