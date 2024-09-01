/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'snk_wallpaper': "url('./assets/snk_wallpaper.jpg)",
      }
    }
  },
  plugins: []
}
