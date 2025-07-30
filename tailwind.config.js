/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Akatab', 'Helvetica', 'Arial', 'sans-serif'],
        akatab: ['Akatab', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'absolutewhite': '#ffffff',
        'brown-60': '#9c7a61',
        'brown-70': '#7f5e42',
        'dark-06': '#1f1f1f',
        'dark-12': '#1a1a1a',
        'dark-15': '#141414',
        'dark-20': '#0f0f0f',
        'dark-30': '#0b0b0b',
        'grey-40': '#b3b3b3',
        'grey-50': '#999999',
        'grey-70': '#4d4d4d',
      },
    },
  },
  plugins: [],
} 