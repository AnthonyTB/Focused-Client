module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        60: "60%",
        80: "80%",
      },
      colors: {
        background: "#1a1a1a",
        altBackground: "#373737",
        accent: "#fff",
      },
      fontFamily: {
        roboto: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
