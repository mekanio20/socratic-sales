/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "player-dark": "#0F0F0F",
        "player-gray": "#272727",
        "player-light": "#FFFFFF",
        "player-red": "#FF0000",
        "player-hover": "#3D3D3D",
        "player-yellow": "#eea424",
      },
      fontFamily: {
        sans: ["Playfair Display","ui-sans-serif", "system-ui"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        ebgaramond: ["EB Garamond", "serif"],
        sf_pro: ["SF Pro Display", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};