// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "custom-green-white": "#c4f2d0",
        "custom-green-light": "#D4F5E0",
        "custom-green-darker": "#34403A",
        "custom-green-dark": "#2f5e41",
        "custom-green-medium": "#138A36",
        "custom-green-lime": "#04E824",
        "custom-green-soft": "#18FF6D",
      },
      color: {
        dark: "bg-custom-green-dark",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      quicksand: '"Quicksand", sans-serif',
    },
  },
  plugins: [flowbite.plugin()],
};
