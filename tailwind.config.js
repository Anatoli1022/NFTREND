/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/flowbite-react/lib/**/*.js", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["flowbite/plugin"],
};
