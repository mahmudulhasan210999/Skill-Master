module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#1A4067',
      'secondary': '#FFB71C',
      'alternate1': '#D82731',
      'alternate2': '#3896C9',
      'gray-100': '#f3f4f6',
      'gray-200': '#e5e7eb',
      'gray-400': '#9ca3af',
      'gray-500': '#6b7280',
      'gray-600': '#4b5563',
      'gray-700': '#374151',
      'green-50': '#f0fdf4',
      'green-100': '#dcfce7',
      'green-500': '#22c55e',
      'yellow-100': '#fef9c3',
      'yellow-500': '#eab308',
      'red-100': '#fee2e2',
      'red-500': '#ef4444',
      'purple-100': '#f3e8ff',
      'purple-500': '#a855f7',
      'blue-100': '#dbeafe',
      'blue-500': '#3b82f6',
      'white': '#FFFFFF',
      'black': '#000000',
      'rose-100': '#ffe4e6',
      'sky-50': '#f0f9ff'
    }
  },
  plugins: [],
}
