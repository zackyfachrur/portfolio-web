import "../style.css";
import Programmer from "../assets/junior-programmer.jpg";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";

const Typing = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
        const typed = new Typed(typeTarget.current, {
          strings: ["Zacky Fachrur","Web Developer", "Dekstop Developer", "Front End Developer" , "Back End Developer"],
          typeSpeed: 50,
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
    <div className="flex justify-center items-center flex-row gap-1 absolute">
      <FaLinkedinIn className="hover:text-blue-600 hover:bg-white text-3xl border-2 border-blue-600 rounded-lg p-1 hover:cursor-pointer text-white bg-blue-600" />
      <FaGithub className="hover:text-black hover:bg-white text-3xl border-2 border-black rounded-lg p-1 hover:cursor-pointer text-white bg-black" />
      <FaWhatsapp className="hover:bg-white hover:text-green-600 text-3xl border-2 border-green-500 rounded-lg p-1 hover:cursor-pointer text-white bg-green-500" />
    </div>
  );
}

const HomePage = () => {
  const [contactLogo, setContactLogo] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center gap-52 p-20 w-full">
        <div className="flex flex-col font-bold w-80 gap-3">
          <div className="flex flex-col justify-center text-2xl">
            <h1>
              Hi There <span>👋</span>, <br /> I am{" "}
              <span className="text-blue-600">{<Typing />}</span>
            </h1>
          </div>
          <button
            className="rounded-lg border-2 w-28 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-1 px-3"
            onClick={() => setContactLogo(!contactLogo)}
          >
            Contact Us
          </button>
          <div>{contactLogo && <Contact />}</div>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-72" src={Programmer} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
