import "../../tailwind.css";
import Wilies from "../../assets/wilies/dekstop-product.png";
import MasakanMaman from "../../assets/burger/dekstop-home.png";
import PringAstula from "../../assets/pringastula/dekstop-home.png";
import Hastek from "../../assets/hastek/dekstop-home.png";

const PortfolioHome = () => {
  return (
    <>
      {/* Section Wilies */}
      <div className="max-[1600px]:pt-10 center">
        <div className="flex max-[1600px]:flex-row max-[1600px]:gap-52 max-[1600px]:h-96 max-[1035px]:flex-col max-[1035px]:h-screen max-[1035px]:gap-28  items-center justify-center w-full max-w-screen-lg">
          <div
            className="center max-[1600px]:w-80 max-[490px]:w-72 max-[445px]:w-60"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <img src={Wilies} className="scale-150 rounded animate" alt="" />
          </div>
          <div
            className="flex-col gap-2 font-bold center w-72"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h1 className="text-xl font-bold">Market Profile</h1>
            <h2 className="text-custom-green-dark">Front-end Web</h2>
            <p className="text-sm text-center">
              This website was created using the React JS library with a Slider
              in it and has a form feature that has been validated so that the
              form cannot be filled in if it {`doesn't`} have a value.
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
      </div>
      {/* End Section Wilies */}

      {/* Section Masakan Maman */}
      <div
        className="flex justify-end mb-20 align-items-end"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <div className="flex max-[1600px]:flex-row-reverse max-[1600px]:gap-52 max-[1600px]:h-96 max-[1035px]:flex-col max-[1035px]:h-screen max-[1035px]:gap-28  items-center justify-center max-[1600px]:w-full  max-w-screen-lg rounded-l-full bg-custom-green-dark/30">
          <div className="center max-[1600px]:w-80 max-[490px]:w-72 max-[445px]:w-60 ">
            <img
              src={MasakanMaman}
              className="scale-150 rounded animate"
              alt=""
            />
          </div>
          <div className="flex-col gap-2 font-bold center w-72">
            <h1 className="text-xl font-bold">Restaurant Profile</h1>
            <h2 className="text-custom-green-dark">Front-end Web</h2>
            <p className="text-sm text-center">
              This website was created using the React JS library with a Slider
              in it with food and drink order.
            </p>
            <button
              className="w-32 px-3 py-1 text-sm rounded-full border-custom-green-dark hover:scale-95 animate bg-custom-green-light text-custom-green-dark"
              onClick={() =>
                window.open("https://burger-web-page.vercel.app/", "_blank")
              }
            >
              Preview Web
            </button>
          </div>
        </div>
      </div>
      {/* End Section Masakan Maman  */}

      {/* Section Hastek*/}
      <div
        className="flex justify-start mt-20 align-items-start"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="flex max-[1600px]:flex-row max-[1600px]:gap-52 max-[1600px]:h-96 max-[1035px]:flex-col max-[1035px]:h-screen max-[1035px]:gap-28  items-center justify-center w-full max-w-screen-lg rounded-r-full bg-custom-green-dark/30">
          <div className="center max-[1600px]:w-80 max-[490px]:w-72 max-[445px]:w-60">
            <img src={Hastek} className="scale-150 rounded animate" alt="" />
          </div>
          <div className="flex-col gap-2 font-bold center w-72">
            <h1 className="text-xl font-bold">Company Profile</h1>
            <h2 className="text-custom-green-dark">Front-end Web</h2>
            <p className="text-sm text-center">
              This website was created using the PHP and implementing the GET ID
              method for each page URL to make navigation easier and more
              dynamic.
            </p>
            <button
              className="w-32 px-3 py-1 text-sm rounded-full border-custom-green-dark hover:scale-95 animate bg-custom-green-light text-custom-green-dark"
              onClick={() =>
                window.open("https://burger-web-page.vercel.app/", "_blank")
              }
            >
              Preview Web
            </button>
          </div>
        </div>
      </div>
      {/* End Section Hastek */}

      {/* Section Astula */}
      <div className="flex justify-center mb-20 align-items-center">
        <div className="flex max-[1600px]:flex-row max-[1600px]:gap-52 max-[1600px]:h-96 max-[1035px]:flex-col max-[1035px]:h-screen max-[1035px]:gap-28  items-center justify-center w-full max-w-screen-lg">
          <div
            className="center max-[1600px]:w-80 max-[490px]:w-72 max-[445px]:w-60"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <img
              src={PringAstula}
              className="scale-150 rounded animate"
              alt=""
            />
          </div>
          <div
            className="flex-col gap-2 font-bold center w-72"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h1 className="text-xl font-bold">Company Profile</h1>
            <h2 className="text-custom-green-dark">Front-end Web</h2>
            <p className="text-sm text-center">
              This website was created using the PHP with Bootstrap 5 to make
              this website simple and shorten the development time.
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
      </div>
      {/* End Section Astula */}
    </>
  );
};

export default PortfolioHome;
