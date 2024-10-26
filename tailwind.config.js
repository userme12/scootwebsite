/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens:{
          DEFAULT:'310px',
          xl:'1110px',
          md: '688px'
        },
      },
      colors: {
        yellow: {
          DEFAULT: '#FCB72B',
          1: '#FFF4DF'
        },
        yellow: {
          DEFAULT: '#FCB72B',
          1: '#FFF4DF'
        },
        grey: {
          DEFAULT: '#495567',
          1: '#939CAA',
          2: '#E5ECF4',
          3: '#F2F5F9'
        }
      },
      fontFamily: {
        'space-mono':'Space Mono',
        lexend:'lexend',
      }
    },
  },
  plugins: [],
}

