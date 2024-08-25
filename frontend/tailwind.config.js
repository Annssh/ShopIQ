/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{html,js,jsx}", "./src/**/*.{html,js,jsx}","./controller/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00022a"
      }
    },
    screens: {
      sm: "620px",
      md: "840px",
      lg: "960px",
      xl: "1200px",
    },
  },
  plugins: [],
};
