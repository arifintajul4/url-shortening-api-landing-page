const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
                lg: "6rem",
            },
        },
        extend: {
            backgroundImage: (theme) => ({
                "boost-desktop": `url("bg-boost-desktop.svg")`,
                "boost-mobile": `url("bg-boost-mobile.svg")`,
                "shorten-desktop": `url("bg-shorten-desktop.svg")`,
                "shorten-mobile": `url("bg-shorten-mobile.svg")`,
                "icon-recognition": `url("icon-brand-recognition.svg")`,
                "icon-detailed": `url("icon-detailed-records.svg")`,
                "icon-fully": `url("icon-fully-customizable.svg")`,
                hero: `url("illustration.svg")`,
            }),
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            purple: {
                dark: "hsl(257, 27%, 26%)",
                DEFAULT: "hsl(255, 11%, 22%)",
            },
            cyan: {
                dark: "#53c0bb",
                DEFAULT: "hsl(180, 66%, 49%)",
                light: "#9be3e2",
            },
            violet: {
                dark: "hsl(260, 8%, 14%)",
                DEFAULT: "hsl(257, 27%, 26%)",
            },
            white: colors.white,
            gray: {
                DEFAULT: "hsl(0, 0%, 75%)",
                sm: "hsl(257, 7%, 63%)",
                md: "hsl(255, 11%, 22%)",
                lg: "hsl(260, 8%, 14%)",
            },
            red: "hsl(0, 87%, 67%)",
            blue: colors.blue,
            indigo: colors.indigo,
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            cursor: ["disabled"],
            backgroundColor: ["active"],
        },
    },
    plugins: [],
};
