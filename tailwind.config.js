/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "500px",
      lg: "800px",
      xl: "1200px",
      "2xl": "1500px",
      "3xl": "1800px",
      "4xl": "2100px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
