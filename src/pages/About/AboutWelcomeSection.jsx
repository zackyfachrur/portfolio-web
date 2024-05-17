import "../../tailwind.css";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";
import JuniorProgramer from "../../assets/junior-programmer.jpg";
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
    <div
      className="absolute flex flex-row items-center justify-center gap-1"
      data-aos="fade"
    >
      <FaLinkedinIn className="p-1 text-3xl text-white transition-all duration-100 ease-in border-2 rounded-lg bg-blue-700 border-blue-700 hover:text-blue-700 hover:bg-white hover:cursor-pointer" />
      <FaGithub className="p-1 text-3xl text-white transition-all duration-100 ease-in bg-black border-2 border-black rounded-lg hover:text-black hover:bg-white hover:cursor-pointer" />
      <FaWhatsapp className="p-1 text-3xl text-white transition-all duration-100 ease-in bg-green-500 border-2 border-green-500 rounded-lg hover:bg-white hover:text-green-600 hover:cursor-pointer" />
    </div>
  );
};

const WelcomeSectionOfAbout = () => {
  const [contactLogo, setContactLogo] = useState(false);
  return (
    <div className="container w-full gap-56 p-20 center h-96">
      <div
        className="flex flex-col gap-3 font-bold w-80"
        data-aos="fade-right"
        data-aos-duration="600"
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl">
            Hi There 👋, <br /> I am
          </h1>
          <span className="text-2xl font-bold text-custom-green-dark">
            {<Typing />}
          </span>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <button
              className="px-3 py-1 text-sm font-bold text-center transition-all duration-100 ease-in rounded-full text-custom-green-light bg-custom-green-dark rounded-lgborder-custom-green-dark hover:scale-95 hover"
              onClick={() => setContactLogo(!contactLogo)}
            >
              Contact Me
            </button>
            <div>{contactLogo && <Contact />}</div>
          </div>
        </div>
      </div>
      <div className="center w-64" data-aos="fade-left" data-aos-duration="600">
        <img
          className="w-screen animate"
          id="programmer"
          src={JuniorProgramer}
          alt=""
        />
      </div>
    </div>
  );
};

export default WelcomeSectionOfAbout;