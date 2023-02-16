/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-pattern": "url('/src/assets/pattern-background-desktop.svg')",
      }),
    },
  },
  plugins: [],
};
