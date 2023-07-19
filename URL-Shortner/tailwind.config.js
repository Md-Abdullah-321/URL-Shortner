/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'background': '#D3D3D3',
      'heading': '#2C87C5',
      'block': '#FFFFFF',
    },
    extend: {
      boxShadow: {
        'custom' : 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
      }
    },
  },
  plugins: [],
}