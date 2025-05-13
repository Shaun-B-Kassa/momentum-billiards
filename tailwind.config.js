module.exports = {
  content: ["./*.html", "./js/*.js"], // Include JS files
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        offWhite: "#f4f4f4",
        accentRed: "#b22222",
        accentGold: "#d4af37",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

