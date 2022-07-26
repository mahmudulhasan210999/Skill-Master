module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary':'#1A4067',
      'secondary':'#FFB71C',
      'alternate1':'#D82731',
      'gray-100': '#f3f4f6',
      'gray-200':'#e5e7eb',
      'gray-500': '#6b7280',
      'gray-600': '#4b5563',
      'green-50':'#f0fdf4',
      'green-100': '#dcfce7',
      'white':'#FFFFFF',
      'black': '#000000',
      'rose-100': '#ffe4e6',
    }
  },
  plugins: [],
}
