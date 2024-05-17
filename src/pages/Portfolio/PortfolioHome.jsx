import "../../tailwind.css";
import Wilies from "../../assets/wilies/dekstop-product.png";
import MasakanMaman from "../../assets/burger/dekstop-home.png";
import PringAstula from "../../assets/pringastula/dekstop-home.png";

const PortfolioHome = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full h-96 gap-52">
        <div className="center w-80">
          <img src={Wilies} className="scale-150 rounded animate" alt="" />
        </div>
        <div className="flex-col gap-2 font-bold center w-72">
          <h1 className="text-xl font-bold">Market Profile</h1>
          <h2 className="text-custom-green-dark">Front-end Web</h2>
          <p className="text-sm">
            This website was created using the React JS library with a Slider in
            it and has a form feature that has been validated so that the form
            cannot be filled in if it {`doesn't`} have a value.
          </p>
          <button
            className="w-32 px-3 py-1 text-sm border-2 rounded-full border-custom-green-dark bg-custom-green-dark hover:bg-custom-green-light hover:text-custom-green-dark animate"
            onClick={() =>
              window.open("https://wilies-shoes.web.app/", "_blank")
            }
          >
            Preview Web
          </button>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center w-full h-96 gap-52 bg-custom-green-dark">
        <div className="center w-80">
          <img
            src={MasakanMaman}
            className="scale-150 rounded animate"
            alt=""
          />
        </div>
        <div className="flex-col gap-2 font-bold center w-72 ">
          <h1 className="text-xl font-bold">Restaurant Profile</h1>
          <h2 className="text-custom-green-dark">Front-end Web</h2>
          <p className="text-sm">
            This website was created using the React JS library with a Slider in
            it and has a form feature that has been validated so that the form
            cannot be filled in if it {`doesn't`} have a value.
          </p>
          <button
            className="w-32 px-3 py-1 text-sm rounded-full border-custom-green-dark hover:scale-95 animate bg-custom-green-light text-custom-green-dark animate"
            onClick={() =>
              window.open("https://burger-web-page.vercel.app/", "_blank")
            }
          >
            Preview Web
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-96 gap-52">
        <div className="center w-80">
          <img src={PringAstula} className="scale-150 rounded animate" alt="" />
        </div>
        <div className="flex-col gap-2 font-bold center w-72">
          <h1 className="text-xl font-bold">Company Profile</h1>
          <h2 className="text-custom-green-dark">Front-end Web</h2>
          <p className="text-sm">
            This website was created using the React JS library with a Slider in
            it and has a form feature that has been validated so that the form
            cannot be filled in if it {`doesn't`} have a value.
          </p>
          <button
            className="w-32 px-3 py-1 text-sm rounded-full border-custom-green-dark bg-custom-green-dark hover:bg-custom-green-light hover:text-custom-green-dark animate"
            onClick={() =>
              window.open("https://bambo-pringastula.vercel.app/", "_blank")
            }
          >
            Preview Web
          </button>
        </div>
      </div>
    </>
  );
};

export default PortfolioHome;
