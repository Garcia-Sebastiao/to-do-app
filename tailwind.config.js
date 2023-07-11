/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-color": "#FFFCE3",
        "secondary-color": "#242424",
        "color-1": "#E9FFE3",
        "color-2": "#E3E6FF",
      },
      colors: {
        "primary-color": "#FFFCE3",
        "secondary-color": "#242424",
        "color-1": "#E9FFE3",
        "color-2": "#E3E6FF",
      },
      fontFamily: {
        helveticaBold: "helveticaBold",
      },
      textColor: {
        "primary-color" : "#606060"
      }
    },
  },
  plugins: [],
};
