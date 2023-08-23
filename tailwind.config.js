/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/tw-elements-react/dist/js/**/*.js"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                gothic: ["DotGothic16", "sans-serif"],
                flow: ["Flow Circular", "cursive"],
                rale: ["Raleway", "sans-serif"],
                raledots: ["Raleway Dots", "cursive"],
                roboto: ["Roboto Condensed", "sans-serif"],
                zen: ["Zen Dots", "cursive"],
                lulo: "var(--font-lulo)"
            },
            colors: {
                pagegray: {
                    light: "#C5C6C7",
                    DEFAULT: "#1F2833",
                    dark: "#0B0C10",
                },
                pagecyan: {
                    light: "#9FE3DE",
                    DEFAULT: "#66FCF1",
                    dark: "45A29E",
                },
            },
        },
    },
    plugins: [
        require("tailwindcss-dotted-background"),
        require("tailwindcss-animated"),
        require("tw-elements-react/dist/plugin.cjs")
    ],
};
