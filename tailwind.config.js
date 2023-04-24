/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "Nunito, sans-serif",
      },
      colors: {
        "brand-primary": "#65b884",
        "brand-darker": "#5CB17B",
        "brand-secondary": "#8BA0FF",
        "brand-danger": "#D65151",
        "neutral-100": "#F7F9FC",
        "neutral-200": "#EDF0F7",
        "neutral-300": "#E2E7F0",
        "neutral-400": "#CBD2E0",
        "neutral-500": "#A0ABC0",
        "neutral-600": "#717D96",
        "neutral-700": "#4A5468",
        "neutral-900": "#1A202C",
      },
    },
  },
  plugins: [],
}
