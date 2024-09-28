module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        krona: ["Krona One", "sans-serif"],
        sunflower: ["Sunflower", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#0c0808",
        pink: "#fed2d1",
        yellow: "#FFc94b",
        "light-grey": "#ECECEC",
        "dark-grey": "#B8B8B8",
        purple: "#ba10ba",
        // purple: "#EE2EEE",
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        fadeInOut: "fadeInOut 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
