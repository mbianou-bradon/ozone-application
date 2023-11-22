/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#b4d5fd",
        "dark-blue": "#63a7fa",
        "light-purple": "#8f98f7",
        "dark-purple": "#6f7be8",
        "neutral-gray": "#d5dcec",
      }
    },
  },
  plugins: [],
}

