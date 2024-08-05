/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/flowbite-react/lib/**/*.js", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },
    },
  },
  plugins: ["flowbite/plugin"],
};
