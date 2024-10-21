/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'top1': 'radial-gradient(circle at 400px 400px, #F0B53F, #000)'
      }
    },
  },
  plugins: [],
}

