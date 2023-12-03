/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lime-green": "#39DB4A",
      },
      fontFamily: {
        body: ["Poppins"],
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
