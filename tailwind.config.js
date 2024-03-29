/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "fern-50": "#f5f9f4",
        "fern-200": "#e7f3e5",
        "fern-300": "#a8d3a2",
        "fern-400": "#6daf64",
        "fern-800": "#2f502b",
        "fern-900": "#112310"
      },
      animation: {
        "ping-slow": "ping 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

