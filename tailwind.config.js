/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-gray': '#F9FAFB'
    },
    extend: {
      backgroundImage: theme => ({
        'brand-gradient': 'linear-gradient(94.64deg, #FE9B25 3.75%, #FF5922 95.77%)',
      }),
    },
  },
  plugins: [],
  important: true,
}