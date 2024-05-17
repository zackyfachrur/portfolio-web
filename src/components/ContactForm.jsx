import "../tailwind.css";
import { FaXmark, FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";

const MessageWhatsapp = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name === "" || email === "" || message === "") {
    return <NullOfInput />;
  } else {
    window.open(
      `https://wa.me/6287703577988?text=From ${name}%0A${email}%0A%0A${message}`
    );
  }
};

const NullOfInput = () => {
  return (
    <>
      <div className="fixed flex flex-col gap-5 p-10 font-bold text-white rounded-lg bg-custom-green-dark text-start w-96 right-20 bottom-10">
        <h1>Hello World</h1>
      </div>
    </>
  );
};

const MessageButton = () => {
  const [ContactFixed, setContactFixed] = useState(false);

  return (
    <>
      <button
        onClick={() => setContactFixed(!ContactFixed)}
        className="fixed right-0 px-5 py-2 text-xl text-white border-2 rounded-l-full bg-custom-green-dark border-custom-green-dark hover:bg-green-100 hover:text-custom-green-dark animate bottom-32"
      >
        {ContactFixed ? (
          <FaXmark data-aos="flip-left" data-aos-duration="600" />
        ) : (
          <FaWhatsapp data-aos="flip-left" data-aos-duration="600" />
        )}
      </button>
      {ContactFixed && <ContactForm />}
    </>
  );
};

const ContactForm = () => {
  return (
    <form
      data-aos="fade"
      data-aos-duration="600"
      onSubmit={MessageWhatsapp}
      className="fixed flex flex-col gap-5 p-10 font-bold text-white rounded-lg bg-custom-green-dark text-start w-96 right-20 bottom-10"
    >
      <h1 className="flex-row gap-4 pb-6 text-xl font-bold border-b-2 center">
        Message Me
        <FaWhatsapp />
      </h1>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="px-3 py-1 text-sm border-2 rounded-lg outline-none text-custom-green-dark border-custom-green-dark hover:scale-95 animate focus:scale-95"
        />
        <input
          type="email"
          placeholder="example@gmail.com"
          id="email"
          className="px-3 py-1 text-sm border-2 rounded-lg outline-none text-custom-green-dark border-custom-green-dark hover:scale-95 animate focus:scale-95"
        />
        <textarea
          type="text"
          id="message"
          placeholder="Type message..."
          className="h-20 px-3 py-1 text-sm border-2 rounded-lg outline-none text-custom-green-dark border-custom-green-dark hover:scale-95 animate focus:scale-95"
        />
      </div>
      <button
        type="submit"
        className="self-center w-32 px-3 py-1 text-sm font-bold bg-white rounded-full text-custom-green-dark hover:scale-95 animate drop-shadow-2xl"
      >
        Submit
      </button>
    </form>
  );
};

export default MessageButton;
