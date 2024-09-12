/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

//Iconos svg

const {
  iconsPlugin,
  dynamicIconsPlugin,
} = require("@egoist/tailwindcss-icons");

export default {
  darkMode: "selector",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      //Cambiar a mi gusto
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      screens: {
        //Cambiar a mi gusto

        dm: "450px",
        fm: "575px",
        mx: "900px",
        mr: "1150px",
      },
      colors: {
        //Cambiar a mi gusto
        primary: {
          DEFAULT: "#427150",
          strong: "#31543B",
          soft: "#60A674",
          light: "#C3D9C9",
        },
        secondary: {
          DEFAULT: "#101C12",
          soft: "#233327",
          strong: "#0C150E",
        },
      },
    },
  },
  plugins: [
    //Añadir o quitar depende
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    iconsPlugin({ prefix: "icon" }),
    dynamicIconsPlugin({ prefix: "icon" }),
  ],
};
