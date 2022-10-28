/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      IranianSans: ["IranianSans"],
      Vazir: ["Vazir"],
    },
    extend: {
      backgroundImage: (theme) => ({
        landing: "url('/img/show.png')",
      }),
    },
    container: {
      center: true,
      padding: "2rem",
    },
    // colors: {
    //   black_opacity: rgba(39, 39, 42, 0.395),
    //   //   white: colors.white,
    //   //   gray: colors.coolGray,
    //   //   blue: colors.lightBlue,
    //   //   red: colors.rose,
    //   //   pink: colors.fuchsia,
    //   //   gard_c: {},
    //   //   black: colors.black,
    // },
    screens: {
      xs: { max: "1024px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
