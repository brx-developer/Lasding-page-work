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
      translate: {
        4.5: "1.125rem",
      },
      colors: {
        primary: {
          DEFAULT: "#f57b4e", // Color principal
          light: "#ff8c5e", // Variante clara
          dark: "#c44e2e", // Variante oscura
          accent: "#ffa800", // Variante de acento
          soft: "#fbd5b5", // Variante suave
        },
        secondary: {
          DEFAULT: "#236689", // Color secundario
          light: "#3b6b8e", // Variante clara
          dark: "#1a4a5b", // Variante oscura
          accent: "#1e8fb4", // Variante de acento
          soft: "#9ec0d6", // Variante suave
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
