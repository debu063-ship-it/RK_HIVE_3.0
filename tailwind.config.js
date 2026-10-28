/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: {
          950: '#050507',
          900: '#0A0C10',
          850: '#10131A',
          800: '#171B24',
          700: '#222836',
        },
        obsidian: {
          950: '#050507',
          900: '#0A0C10',
          850: '#10131A',
          800: '#171B24',
          700: '#222836',
        },
        cerulean: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        neonrose: {
          50: '#FFF1F4',
          100: '#FFE4E8',
          200: '#FECDD6',
          300: '#FDA4B4',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
          neon: '#FF1376',
        },
        champagne: {
          100: '#FAF4E8',
          200: '#F3E5CA',
          300: '#E4CC9C',
          400: '#D6B472',
          500: '#CBB079',
          600: '#B8985B',
          700: '#8F733E',
        },
        lounge: {
          rose: '#FF1376',
          deep: '#E11D48',
          blush: '#FDA4B4',
          surface: '#120B0F',
        },
        auto: {
          cerulean: '#0EA5E9',
          deep: '#0284C7',
          sky: '#38BDF8',
          surface: '#0B1017',
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Urbanist', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        serif: ['Outfit', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      }
    },
  },
  plugins: [],
}
