/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "deskview": "url('./assets/gamebg.png')",
        "phoneview": "url('./assets/phonebgg.png')",
      },
    },
  },
  plugins: [],
}