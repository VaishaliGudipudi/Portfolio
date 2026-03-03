/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15, 23, 42, 0.22)"
      },
      fontFamily: {
        sans: ["Sora", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
