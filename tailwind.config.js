/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['PoppinsRegular'],
        bold: ['PoppinsBold',],
        thin: ['PoppinThin'],
        extraLight: ['PoppinsExtraLight'],
        light: ['PoppinsLight'],
        medium: ['PoppinsMedium'],
        semiBold: ['PoppinsSemiBold'],
        extraBold: ['PoppinsExtraBold'],
        black: ['PoppinBlack']
      },
      fontSize: {
      }
    },
  },
  plugins: [],
}

