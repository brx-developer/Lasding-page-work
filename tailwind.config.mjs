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
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      width: {
        "9/20": "45%",
        "11/20": "55%",
      },
      translate: {
        4.5: "1.125rem",
      },
      colors: {
        primary: {
          DEFAULT: "#5BE4C0", // Color secundario
          light: "#7AEACC", // Variante clara
          dark: "#49B699", // Variante oscura
          accent: "#00FFBB", // Variante de acento
          soft: "#E4F2EE", // Variante suave
        },
        secondary: {
          DEFAULT: "#186FE4", // Color principal
          light: "#3581E8", // Variante clara
          dark: "#1356AF", // Variante oscura
          accent: "#006FFF", // Variante de acento
          soft: "#DCE7F5", // Variante suave
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    iconsPlugin({ prefix: "icon" }),
    require("@tailwindcss/aspect-ratio"),
    dynamicIconsPlugin({ prefix: "icon" }),
  ],
};
