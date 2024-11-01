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
      },
    },
  },
  plugins: [],
};
