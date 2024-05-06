import "../style.css";
import Programmer from "../assets/web-dev.jpg";
import Typed from "typed.js";
import Wave from "react-wavify";
import {useEffect, useRef} from "react";
import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";
import Profile from "../assets/Profile-Photo.png";

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
    <div className="flex justify-center items-center flex-row gap-1 absolute">
      <FaLinkedinIn className="hover:text-indigo-700 hover:bg-white text-3xl border-2 border-indigo-700 rounded-lg p-1 hover:cursor-pointer text-white bg-indigo-700 transition-all ease-in duration-100" />
      <FaGithub className="hover:text-black hover:bg-white text-3xl border-2 border-black rounded-lg p-1 hover:cursor-pointer text-white bg-black transition-all ease-in duration-100" />
      <FaWhatsapp className="hover:bg-white hover:text-green-600 text-3xl border-2 border-green-500 rounded-lg p-1 hover:cursor-pointer text-white bg-green-500 transition-all ease-in duration-100" />
    </div>
  );
};

const HomePage = () => {
  const [contactLogo, setContactLogo] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center gap-56 p-20 w-full h-96">
        <div className="flex flex-col font-bold w-80 gap-3">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl">
              Hi There 👋, <br /> I am
            </h1>
            <span className="text-indigo-700 drop-shadow-xl font-bold text-2xl">
              {<Typing />}
            </span>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <button
                className="font-bold py-1 px-2 text-center rounded-lg rounded-lgborder-indigo-700 text-white hover:scale-95  bg-indigo-700  transition-all ease-in duration-100"
                onClick={() => setContactLogo(!contactLogo)}
              >
                Contact Me
              </button>
              <div>{contactLogo && <Contact />}</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-60">
          <img className="w-fit" src={Programmer} alt="" />
        </div>
      </div>
      <div>
        <Wave
          mask="url(#mask)"
          fill="#4338ca"
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.1,
            points: 5,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect
                x="0"
                y="0"
                width="2000"
                height="300"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-5 h-screen">
        <div className="flex justify-center items-center">
          <h1 className="flex justify-center items-center gap-2 font-bold text-2xl before:w-16 before:h-1 before:bg-indigo-700">
            Profile
          </h1>
        </div>
        <div className="flex justify-center items-center h-96 gap-72">
          <img
            className="rounded-full w-48 hover:cursor-pointer grayscale hover:grayscale-0 transition-all ease-in duration-100"
            src={Profile}
            alt="Profile Photo"
          />
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-xl font-bold">Zacky Fachrur</h1>
              <h2 className="font-semibold text-indigo-700">
                Junior Full Stack Developer
              </h2>
            </div>
            <p className="font-medium w-96">
              I am a Junior Full Stack Developer currently studying at the
              Information Systems Undergraduate at Gunadarma University. I
              really enjoy practicing my programming skills and developing
              web-based applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
