/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-green": "var(--dark-green)",
        teal: "var(--teal)",
        "light-cyan": "var(--light-cyan)",
      },
      padding: {
        "9px": "9px",
        "11px": "11px",
        "17px": "17px",
        "22px": "22px",
        "25px": "25px",
      },
      lineHeight: {
        "64px": "64px",
        "132px": "132px",
      },
      margin: {
        "15px": "15px",
        "19px": "19px",
      },
      fontSize: {
        "64px": "64px",
        "140px": "140px",
      },
      width: {
        "74px": "74px",
      },
      height: {
        "74px": "74px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
