/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./renderer/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./assets/pages/**/*.{js,ts,jsx,tsx}",
    "./assets/renderer/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
