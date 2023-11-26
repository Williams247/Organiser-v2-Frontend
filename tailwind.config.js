/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      lineHeight: {
        default: 7,
      },
      container: {
        center: true,
        screens: {
          none: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          "2xl": "1200px",
        },
        padding: {
          DEFAULT: "1.25rem",
          sm: "0.5rem",
        },
      },
      fontFamily: {
        mono: ["Helvetica Neue", "Arial", "sans-serif"],
      },
      animation: {
        "spin-text": "spinText 16s ease-in-out forwards infinite",
        "slide-in-fade": "slideInFade 0.3s ease-in forwards",
      },
      keyframes: {
        slideInFade: {
          "0%": {
            transform: "translateX(-6rem)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        spinText: {
          "0%, 100%": {
            transform: "rotate(0)",
            fill: "#FFCB67",
          },
          "50%": {
            transform: "rotate(360deg)",
            fill: "#FF6600",
          },
        },
      },
      aspectRatio: {
        "4/3": "4/3",
        "4/5": "4/5",
        "5/4": "5/4",
        "7/4": "7/4",
        "9/8": "9/8",
        "9/60": "9/60",
        "14/15": "14/15",
        "18/11": "18/11",
        "34/9": "34/9",
        "35/9": "35/9",
      },
    },
  },
  plugins: [],
};
