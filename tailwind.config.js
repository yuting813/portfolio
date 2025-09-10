/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 主色：#E85EAD（粉紫玫）
        primary: {
          DEFAULT: "#E85EAD",
          50: "#f0e6c8",
          100: "#F1DAE7",
          200: "#E6BCD4",
          300: "#E28DBE",
          400: "#D864A7",
          500: "#E85EAD",
          600: "#C41C7C", //  hover
          700: "#9B1261",
          800: "#720E47",
          900: "#4D0930",
          foreground: "#ffffff", // 按鈕/徽章文字
        },

        // 漸層三色（維持左橘→中主色→右粉）
        brand: {
          start: "#f0e9a9", // 橘紅
          // mid: "#E85EAD", // 主色（中段）
          end: "  #f091b1", // 

         
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
