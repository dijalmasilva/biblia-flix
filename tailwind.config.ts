import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // colors similar to netflix
      colors: {
          netflix: {
            light: {
              red: '#e50914',
              bg: '#f5f5f1',
              gray: '#757575',
              text: '#141414',
            },
            red: '#e50914',
            black: '#141414',
            gray: '#757575',
            white: '#f5f5f1',
          },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'screen-without-menu-bar': 'calc(100vh - 72px)',
      },
      keyframes: {
        'beat': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
      animation: {
        'beat': 'beat 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
