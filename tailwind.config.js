/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lama Sans", "sans-serif"], // Default sans font
      },
      colors: {
        primary: "#FFC700", // Custom primary color
      },
    },
    variants: {
      scrollBehavior: ['responsive'],
    },
  },
  plugins: [],
};
