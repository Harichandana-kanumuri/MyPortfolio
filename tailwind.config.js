/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure the index.html file is scanned
    "./src/**/*.{js,ts,jsx,tsx}" // Scans all files inside the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
