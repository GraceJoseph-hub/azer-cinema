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
        "light-grey": "#ECECEC",
        "dark-grey": "#B8B8B8",
        purple: "#ba10ba",
      },
      screens: {
        'xs': '250px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
};
