import "../style.css";
import Programmer from "../assets/web-dev.jpg";
import Typed from "typed.js";
import Wave from "react-wavify";
import {useEffect, useRef} from "react";

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


const HomePage = () => {

  return (
    <>
      <div className="flex justify-center items-center gap-56 p-20 w-full">
        <div className="flex flex-col font-bold w-80 gap-3">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl">
              Hi There <span>👋</span>, <br /> I am{" "}
            </h1>
            <span className="text-indigo-700 font-bold text-2xl">
              {<Typing />}
            </span>
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
                height="200"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex">
          <h1 className="flex justify-center items-center gap-2 font-bold text-2xl before:w-16 before:h-1 before:bg-indigo-700">
            Zacky Fachrur
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
