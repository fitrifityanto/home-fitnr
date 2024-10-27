/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html",
           "./assets/js/**/*.js"],
  theme: {
    fontFamily: {
      'body': ['Comfortaa', 'sans-serif'],
    },
    extend: {
        colors: {
        'yellow-fit': '#f4f7be',
      },
        keyframes: {
            fade: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
        }
        },
        animation: {
            'fade': 'fade 1s ease backwards',
        }
    },
  },
  plugins: [],
}

