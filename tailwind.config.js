/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            md: "768px",
            lg: "1440px",
        },
        colors: {
            transparent: `transparent`,
            gray: `#f1f1f1`,
            white: `#ffffff`,
            black: {
                DEFAULT: `#1A1A1A`,
                50: `#F2F2F2`,
                100: `#E6E6E6`,
                200: `#CCCCCC`,
                300: `#B3B3B3`,
                400: `#999999`,
                500: `#808080`,
                600: `#666666`,
                700: `#4D4D4D`,
                800: `#333333`,
                900: `#1A1A1A`,
            },
            blue: {
                DEFAULT: `#1EA7FF`,
                50: `#F3FAFF`,
                100: `#E9F7FF`,
                200: `#D2EDFF`,
                300: `#BCE5FF`,
                400: `#A5DCFF`,
                500: `#8FD3FF`,
                600: `#78CAFF`,
                700: `#62C2FF`,
                800: `#4BB9FF`,
                900: `#35B0FF`,
            },
            pink: {
                DEFAULT: `##FF647F`,
            },
            red: {
                DEFAULT: `#DA2020`,
                500: "#FF5C5C",
                50: `#FFDAD2`,
            },
            orange: {
                DEFAULT: `#FF8A1E`,
                50: `#FFEDD2`,
            },
        },
        fontFamily: {
            DEFAULT: [
                "Pretendard",
                "-apple-system",
                "BlinkMacSystemFont",
                "system-ui",
                "Roboto",
                '"Helvetica Neue"',
                '"Segoe UI"',
                '"Apple SD Gothic Neo"',
                '"Noto Sans KR"',
                '"Malgun Gothic"',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                "sans-serif",
            ],
        },
        fontSize: {
            xxs: "0.625rem",
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            xxl: "1.375rem",
            xxxl: "1.5rem",
            h4: "2.125rem",
            h3: "3rem",
            h2: "3.75rem",
            h1: "6rem",
        },
        borderRadius: {
            xxxs: "0.25rem", //4
            xxs: "0.375rem", //6
            xs: "0.5rem", //8
            sm: "0.625rem", //10
            md: "0.75rem", //12
            lg: "0.875rem", //14
            xl: "1.125rem", //18
            xxl: "1.5rem", //24
        },
        borderWidth: {
            DEFAULT: "0.063rem",
        },
        lineHeight: {
            DEFAULT: 1.2,
        },
        extend: {
            boxShadow: {
                card: "0px 1px 4px 0px rgba(105, 123, 134, 0.12)",
            },
            transitionProperty: {
                "max-height": "max-height",
            },
            writingMode: {
                vertical: "vertical-rl",
            },
            maxWidth: {
                44: "11rem",
                7.5: "7.5rem",
            },
            spacing: {
                0.75: "0.188rem",
                1.25: "0.313rem",
                1.75: "0.406rem",
                2.75: "0.688rem",
                3.75: "0.938rem",
                4.5: "1.125rem",
                5.5: "1.375rem",
                7.5: "1.875rem",
                9.5: "2.344rem",
                11.5: "2.875rem",
                12.5: "3.125rem",
                13: "3.375rem",
                19: "4.75rem",
                22: "5.75rem",
                38: "9.375rem",
                38.5: "9.75rem",
                39: "9.531rem",
                44.5: "11.813rem",
                47.5: "11.875rem",
                50: "12.5rem",
                56.5: "14.25rem",
                72: "4.5rem",
                80.5: "20.313rem",
                120: "7.5rem",
                card: "31.5rem",
                smCard: "21.125rem",
                menu: "20.688rem",
                modal: "23rem",
            },
        },
    },
    plugins: [],
};