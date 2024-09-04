/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sidebar: "url('./src/assets/developer.svg')",
      },
      keyframes: {
        bounceRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        bounceRight: "bounceRight 1s ease-out infinite",
      },
    },
  },
  plugins: [],
};
