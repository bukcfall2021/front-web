/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E79315",
        "half-white": "#fafafa",
      },
      fontFamily: {
        body: ["Poppins"],
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
