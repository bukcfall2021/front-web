/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E79315",
        "half-white": "#fafafa",
        "transparent-gray": "rgba(177, 177, 177, 0.8)",
      },
      fontFamily: {
        body: ["Poppins"],
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
