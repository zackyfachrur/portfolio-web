/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        "2xl": "0 10px 8px rgb(67 56 202)",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      quicksand: '"Quicksand", sans-serif',
    },
  },
  plugins: [],
};

