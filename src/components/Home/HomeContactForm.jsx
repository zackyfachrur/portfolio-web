import "../../tailwind.css";
import { FaRegMessage } from "react-icons/fa6";

const MessageWhatsapp = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  window.open(
    `https://wa.me/6287703577988?text=From ${name}%0A${email}%0A%0A${message}`
  );
};

const ContactFormOfHome = () => {
  return (
    <form
      onSubmit={MessageWhatsapp}
      className="flex gap-5 flex-col text-start w-96 font-bold bg-indigo-700  rounded-lg text-white p-10 fixed right-20 bottom-10"
    >
      <h1 className="center flex-row gap-4 font-bold text-xl">
        Message us
        <FaRegMessage />
      </h1>
      <div className="flex gap-3 flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="border-2 rounded-lg border-indigo-700 text-indigo-700 px-3 text-sm outline-none py-1 hover:scale-95 animate focus:scale-95"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="border-2 rounded-lg border-indigo-700 px-3 text-indigo-700 text-sm outline-none py-1 hover:scale-95 animate focus:scale-95"
        />
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          placeholder="Type message..."
          className="border-2 rounded-lg border-indigo-700 px-3 text-indigo-700 text-sm py-1 h-20 outline-none hover:scale-95 animate focus:scale-95"
        />
      </div>
      <button
        type="submit"
        className="w-32 px-3 py-1 text-sm font-bold text-indigo-700 bg-white rounded-full hover:scale-95 animate drop-shadow-2xl self-center"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactFormOfHome;
