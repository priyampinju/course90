/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        LeagueSpartan: ["League Spartan"],
      },
      colors: {
        blue: "#3B69E0",
      },
    },
  },
  plugins: [],
};
