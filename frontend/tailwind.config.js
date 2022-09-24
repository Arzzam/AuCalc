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
                // primarygrad: "rgb(17,12,92) linear-gradient(90deg, rgba(17,12,92,1) 0%, rgba(10,10,75,1) 89%, rgba(20,26,106,1) 100%);"
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                lora: ["Lora", "sans-serif"],
                dansc: ["Dancing Script", "cursive"],
                rki: ["Reem Kufi Ink", "sans-serif"],
                logo: ["logofont", "sans-serif"]
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
            xs: "425px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            // xl: "1280px",
            // "2xl": "1536px",
        },
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            n1: '0.01em',
            wide: '.025em',
            wider: '.05em',
            widest: '.07em',
            widests: '.1em',
        }
    },
    plugins: [],
};
