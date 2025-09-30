/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        "deep-blue2": "#1f1d59",
        "light-blue" : "#325f6e",
        blue: "#2CBCE9",
        grey2:"#808080",
        red: "#DC4492",
        red2:"#f54266",
        purple:"#8b51c9",
        yellow: "#FDCC49",
        grey: "#ededed",
        green:"#4da36f",
        "dark-grey": "#757575",
        "light-green":"#00ffbf",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/rbvrrit-small5.png')",
        person2: "url('./assets/pragathiLogo-rounded.jpg')",
        person3: "url('./assets/zphs-small.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
