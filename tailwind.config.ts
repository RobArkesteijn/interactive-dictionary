import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'jungle-green': {
          50: '#ebfef7',
          100: '#d0fbe9',
          200: '#a4f6d8',
          300: '#6aebc5',
          400: '#2fd8ab',
          500: '#0abf95',
          600: '#00b08b',
          700: '#007c65',
          800: '#036251',
          900: '#045044',
          950: '#012d27',
        },
        bunker: {
          50: '#f4f7fb',
          100: '#e9eff5',
          200: '#cedde9',
          300: '#a2c1d7',
          400: '#709fc0',
          500: '#4e84a9',
          600: '#3c6a8d',
          700: '#315573',
          800: '#2c4960',
          900: '#293e51',
          950: '#101820',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'Poppins fallback', ...defaultTheme.fontFamily.sans],
        amatic: ['Amatic SC', 'Amatic SC fallback', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
