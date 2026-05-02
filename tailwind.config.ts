import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E4D8C',
          50: '#F0F5FB',
          100: '#D4E3F4',
          200: '#AAC8EB',
          300: '#7FAAE0',
          400: '#5590D9',
          500: '#1E4D8C',
          600: '#1A4478',
          700: '#153B63',
          800: '#10334E',
          900: '#0B2A3A',
        },
        accent: {
          DEFAULT: '#E85D26',
          50: '#FEF6F2',
          100: '#FDE8DC',
          200: '#FBD1B9',
          300: '#F9B896',
          400: '#F7A173',
          500: '#E85D26',
          600: '#D45322',
          700: '#BB491D',
          800: '#913A16',
          900: '#682811',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        slideDown: 'slideDown 0.3s ease-out',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
