/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "var(--primary-background)",
        mainText: "var(--main-text)",
        headText: "var(--head-text)",
        rouge: "var(--rouge)",
        black: "var(--black)",
        purple: "var(--purple)",
        purpleText: "var(--purple-text)",
        lightPurple: "var(--light-purple)",
        white: "var(--white)",
        softPink: "var(--soft-pink)",
        lightButtonBg: "var(--light-button-bg)",
        lightBrown: "var(--light-brown)",
      },
    },
  },
  plugins: [],
};
