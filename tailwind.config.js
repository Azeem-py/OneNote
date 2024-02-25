/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '100px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      boxShadow: {
        microsoftLogin: '0 2px 6px rgba(0,0,0,0.2)',
        yahooLogin: '0 2px 4px 0 rgba(0,0,0,.3)',
      },
    },
  },
  plugins: [],
}
