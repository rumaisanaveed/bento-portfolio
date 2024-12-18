/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-bg": "#F6F6F6",
        "dark-black": "#181717",
        "custom-black": "#282828",
        "dark-blue": "#0A66C2",
        "custom-orange": "#FF8B25",
        "custom-purple": "#9747FF",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, #7017FF 0%, #C500E9 30%, #ED00C0 50%, #F80261 71%, #FF1B90 100%)",
      },
    },
  },
  plugins: [],
};
