module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Nunito",
    },
  },
  variants: {
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
