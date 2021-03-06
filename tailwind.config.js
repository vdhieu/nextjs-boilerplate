module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-transitions'),
    require('tailwindcss-transform'),
  ],
};
