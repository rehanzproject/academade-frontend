/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-10": "#6EA8FE",
        "primary-30": "#3D8BFD",
        "primary-50": "#0D6EFD",
        "primary-70": "#0A58CA",
        "primary-90": "#084298",
        "secondary-10": "#A7ACB1",
        "secondary-30": "#899197",
        "secondary-50": "#6C757D",
        "secondary-70": "#565E64",
        "secondary-90": "#41464B",
        "success-10": "#75B798",
        "success-30": "#479F76",
        "success-50": "#198754",
        "success-70": "#146C43",
        "success-90": "#0F5132",
        "danger-10": "#EA868F",
        "danger-30": "#E35D6A",
        "danger-50": "#DC3545",
        "danger-70": "#B02A37",
        "danger-90": "#842029",
        "warning-10": "#FFDA6A",
        "warning-30": "#FFCD39",
        "warning-50": "#FFC107",
        "warning-70": "#CC9A06",
        "warning-90": "#997404",
        "light-10": "#FBFBFC",
        "light-30": "#F9FAFB",
        "light-50": "#F8F9FA",
        "light-70": "#C6C7C8",
        "light-90": "#959596",
        "dark-10": "#7A7C7F",
        "dark-30": "#4D5154",
        "dark-50": "#212529",
        "dark-70": "#1A1E21",
        "dark-90": "#141619",
        "light-blue": "#9BC7F6",
        "light-blue-10": "#EBF4FD",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
}

