/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Включает файлы в папке app
    "./components/**/*.{js,ts,jsx,tsx}", // Включает компоненты
    "./pages/**/*.{js,ts,jsx,tsx}", // Если используете pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};