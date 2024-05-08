import "../../tailwind.css";
import Profile from "../../assets/Profile-Photo.png";

const ProfileSectionOfHome = () => {
  return (
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
            Information Systems Undergraduate at Gunadarma University. I really
            enjoy practicing my programming skills.
          </p>
          <button className="w-32 px-3 py-1 text-sm font-bold text-white bg-indigo-700 rounded-full hover:scale-95 animate drop-shadow-2xl">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSectionOfHome;
