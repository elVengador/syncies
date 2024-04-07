import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/outher/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/ev-component-library/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        //<-- define the colors to use on ev-component-library
        'ev-primary': {
          DEFAULT: '#499AAC',
          hard: colors.cyan[600],
          harder: colors.cyan[700],
        },
        'ev-secondary': {
          DEFAULT: '#DE7A4F',
          hard: colors.orange[600],
          harder: colors.orange[700],
        },
        'ev-dark': {
          DEFAULT: '#1C1C1C',
          hard: colors.neutral[700],
          harder: colors.neutral[600],
        },
        'ev-light': {
          DEFAULT: '#F8F1E5',
          hard: colors.neutral[200],
          harder: colors.neutral[300],
        },
        'ev-destructive': {
          DEFAULT: '#d63e3e',
          hard: colors.red[600],
          harder: colors.red[700],
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
