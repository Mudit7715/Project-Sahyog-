/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        primary: "000000",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'custom-radial': `radial-gradient(
          circle at -30% 0%,
          rgba(128, 0, 255, 0.6),
          transparent 50%
        ),
        radial-gradient(circle at 110% 70%, rgba(0, 0, 255, 0.6), transparent 50%),
        radial-gradient(circle at 0% 160%, rgba(50, 0, 150, 0.6), transparent 60%)`,
      },
      animation: {
        blink: 'blink 5s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 }, 
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};