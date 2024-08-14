/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "alert-success": "#d4edda",
        "alert-error": "#f8d7da",
        "alert-warning": "#fff3cd",
        "alert-info": "#d1ecf1",
      },
    },
  },
  plugins: [],
};
