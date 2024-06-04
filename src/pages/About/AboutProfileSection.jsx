import "../../tailwind.css";
import Profile from "../../assets/Profile-Photo.png";

const ProfileSectionOfAbout = () => {
  return (
    <div className="flex-col h-full gap-5 mb-20 center">
      <div className="flex-row p-20 center h-96 gap-72 xl:w-full md:w-screen md:max-w-screen-lg md:gap-52">
        <div data-aos="fade-right" data-aos-duration="600">
          <img
            className="rounded-full w-52 hover:cursor-pointer grayscale hover:grayscale-0 animate"
            src={Profile}
            alt="Profile Photo"
          />
        </div>
        <div
          className="flex flex-col gap-3"
          data-aos="fade-left"
          data-aos-duration="600"
        >
          <div>
            <h1 className="text-xl font-bold">Zacky Fachrur</h1>
            <h2 className="font-semibold text-custom-green-dark">
              Junior Full Stack Developer
            </h2>
          </div>
          <p className="text-sm font-bold w-80">
            I am a Junior Full Stack Developer and currently studying at the
            Information Systems Undergraduate at Gunadarma University. <br /> I
            really Interested in Web Development and Dekstop .NET Development.
          </p>
          <button className="w-32 px-3 py-1 text-sm font-bold text-white rounded-full bg-custom-green-dark hover:scale-95 animate drop-shadow-1xlIndigo hover:drop-shadow-2xlIndigo">
            <a href="src\assets\pdf\Resume.pdf" target="_blank">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSectionOfAbout;
