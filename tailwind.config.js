/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          head: "#FFE664",
          body: "#F6C90E",
        },
        grey: {
          textdark: "#E3E3E3",
          textlight: "#EDEDED",
          hr: "#D9D9D9",
        },
        red: {
          del_btn: "#F14D4D",
        },
        brown : {
          home : '#515050'
        }
      },
    },
  },
  plugins: [],
};
