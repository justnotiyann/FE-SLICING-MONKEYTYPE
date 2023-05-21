/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        background: "#282A36",
        input: "#20222C",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
