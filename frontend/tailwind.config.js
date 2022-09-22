/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',    // On dev comment/uncomment this to enable/disable darkmode.
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "sans-serif"],
        dansc: ["Dancing Script", "cursive"],
        rki: ["Reem Kufi Ink", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite", // For Loading animation.
        "spin-inner": "spin-inner 1.6s ease-in-out infinite", // For Loading animation.
      },
      keyframes: {
        "spin-inner": {
          // For Loading animation.
          "0%": {
            "stroke-dasharray": "1px, 100px",
            "stroke-dashoffset": "0",
          },
          "50%": {
            "stroke-dasharray": "50px, 100px",
            "stroke-dashoffset": "-12px",
          },
          "100%": {
            "stroke-dasharray": "50px, 100px",
            "stroke-dashoffset": "-62px",
          },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      // xl: "1280px",
      // "2xl": "1536px",
    },
  },
  plugins: [],
};
