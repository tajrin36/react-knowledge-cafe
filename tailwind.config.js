/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-color':'rgba(17, 17, 17, 0.60)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}