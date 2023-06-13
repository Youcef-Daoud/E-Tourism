/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blu: "#142361",
      },
      fontFamily: {
        logo: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
