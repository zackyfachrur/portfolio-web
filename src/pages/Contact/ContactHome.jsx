import "../../tailwind.css";
// import PhoneImg from "../../assets/phone.png";
import BusinessMan from "../../assets/business-man.png";

const sendingWhatsapp = () => {
  const name = document.getElementById("nama").value;
  const mail = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  window.open(
    `https://wa.me/6287703577988?text=From ${name}%0A${mail}%0A%0A${message}`
  );
};

const ContactHome = () => {
  return (
    <>
      <div className="max-[1600px]:flex-row max-[1005px]:flex-col max-[1005px]:pt-80 max-[1005px]:mb-80 max-[995px]:mb-72 -z-50 w-full h-screen center">
        <img src={BusinessMan} alt="Phone Image" className="w-96" />
        <form
          action="/"
          onSubmit={sendingWhatsapp}
          className="flex flex-col max-[1600px]:self-end max-[1600px]:rounded-t-3xl max-[1005px]:self-center px-32 py-20 gap-9 max-[1005px]:rounded-t-none max-[1005px]:rounded-3xl max-[1005px]:flex-col  max-[1005px]:-mt-5 max-[890px]:w-4/5 max-[715px]:bg-transparent center bg-custom-green-dark/30"
        >
          <h1 className="self-center max-[1600px]:text-3xl max-[510px]:text-xl font-bold text-white w-96 center">
            Contact Us
          </h1>
          <div className="flex flex-col gap-2 px-10 py-10 bg-white w-96 rounded-3xl text-custom-green-dark">
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="text-base font-bold">
                Name
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                className="text-base font-bold rounded-lg outline-none border-1 focus:border-custom-green-dark animate focus:outline-custom-green-dark"
                placeholder="John Doe"
                required
              />
              <label
                htmlFor="email"
                className="text-base font-bold outline-none border-1 focus:border-custom-green-dark animate focus:outline-custom-green-dark"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="text-base font-bold rounded-lg outline-none border-1 focus:border-custom-green-dark animate focus:outline-custom-green-dark"
                placeholder="example@gmail.com"
                required
              />
              <label htmlFor="message" className="text-base font-bold">
                Messages
              </label>
              <textarea
                name="message"
                id="message"
                className="text-base font-bold rounded-lg outline-none border-1 focus:border-custom-green-dark animate focus:outline-custom-green-dark"
                placeholder="Type a message"
                required
              />
            </div>

            <button
              type="submit"
              className="self-center px-10 py-1 text-base font-bold text-white rounded-full bg-custom-green-darker w-52 hover:scale-95 animate"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactHome;
