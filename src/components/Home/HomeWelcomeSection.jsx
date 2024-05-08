import "../../tailwind.css";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";
import Programmer from "../../assets/web-dev.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { useState } from "react";

const Typing = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "Web Developer",
        "Dekstop Developer",
        "Front End Developer",
        "Back End Developer",
      ],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};

const Contact = () => {
  return (
    <div className="absolute flex flex-row items-center justify-center gap-1">
      <FaLinkedinIn className="p-1 text-3xl text-white transition-all duration-100 ease-in bg-indigo-700 border-2 border-indigo-700 rounded-lg hover:text-indigo-700 hover:bg-white hover:cursor-pointer" />
      <FaGithub className="p-1 text-3xl text-white transition-all duration-100 ease-in bg-black border-2 border-black rounded-lg hover:text-black hover:bg-white hover:cursor-pointer" />
      <FaWhatsapp className="p-1 text-3xl text-white transition-all duration-100 ease-in bg-green-500 border-2 border-green-500 rounded-lg hover:bg-white hover:text-green-600 hover:cursor-pointer" />
    </div>
  );
};

const WelcomeSectionOfHome = () => {
  const [contactLogo, setContactLogo] = useState(false);
  return (
    <div className="container w-full gap-56 p-20 center h-96">
      <div className="flex flex-col gap-3 font-bold w-80">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl">
            Hi There 👋, <br /> I am
          </h1>
          <span className="text-2xl font-bold text-indigo-700">
            {<Typing />}
          </span>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <button
              className="px-3 py-1 text-sm font-bold text-center text-white transition-all duration-100 ease-in bg-indigo-700 rounded-full rounded-lgborder-indigo-700 hover:scale-95 drop-shadow-2xl"
              onClick={() => setContactLogo(!contactLogo)}
            >
              Contact Me
            </button>
            <div>{contactLogo && <Contact />}</div>
          </div>
        </div>
      </div>
      <div className="center w-60">
        <img
          className="w-fit drop-shadow-2xl"
          id="programmer"
          src={Programmer}
          alt=""
        />
      </div>
    </div>
  );
};

export default WelcomeSectionOfHome;
