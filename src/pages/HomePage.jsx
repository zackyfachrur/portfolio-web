import "../style.css";
import Programmer from "../assets/web-dev.jpg";
import Typed from "typed.js";
import Wave from "react-wavify";
import {useEffect, useRef} from "react";
import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";
import Profile from "../assets/Profile-Photo.png";
import FooterFoot from "../components/FooterFoot";

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

const HomePage = () => {
  const [contactLogo, setContactLogo] = useState(false);

  return (
    <>
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
                className="px-3 text-sm py-1 font-bold text-center text-white transition-all duration-100 ease-in bg-indigo-700 rounded-full rounded-lgborder-indigo-700 hover:scale-95 drop-shadow-2xl"
                onClick={() => setContactLogo(!contactLogo)}
              >
                Contact Me
              </button>
              <div>{contactLogo && <Contact />}</div>
            </div>
          </div>
        </div>
        <div className="center w-60">
          <img className="w-fit drop-shadow-2xl" src={Programmer} alt="" />
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
      <div className="flex-col w-full h-screen gap-5 center">
        <div className="center">
          <h1 className="text-2xl font-bold center before:m-2 before:w-16 before:h-1 before:bg-indigo-700">
            Profile
          </h1>
        </div>
        <div className="center h-96 gap-72">
          <img
            className="w-48 transition-all duration-100 ease-in rounded-full hover:cursor-pointer grayscale hover:grayscale-0"
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
              really enjoy practicing my programming skills.
            </p>
            <button className="text-sm bg-indigo-700 w-32 font-bold text-white rounded-full py-1 px-3 hover:scale-95 animate drop-shadow-2xl">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <FooterFoot />
    </>
  );
};

export default HomePage;
