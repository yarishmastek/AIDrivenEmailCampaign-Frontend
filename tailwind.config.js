/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "",
        primaryBackgroundColor: "",
        secondaryBackgroundColor: "#1E90FF",
      },
    },
  },
  plugins: [],
};
