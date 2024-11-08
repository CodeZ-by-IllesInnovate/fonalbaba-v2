/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Urbanist",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: ["JetBrains Mono", "ui-serif", "serif"],
      },
      colors: {
        primary: "#CCD5AE", // Sötétebb pasztell szín
        pastel: "#dbcc79",
        secondary: "#E9EDC9", // Világosabb pasztell szín
        background: "#FEFAE0", // Fő háttér
        accent: "#FAEDCD", // Egyéb kiegésziítő szín
        muted: "#D4A373", // Egy sötétebb, pasztell szín
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      white: "#ffffff", // Fő háttér fehér
    }),
  },
  plugins: [],
};
