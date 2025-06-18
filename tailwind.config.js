/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        description: '#000000B2',
        placeholder: '#0000004D',
        placeholderDark: '#00000080',
        linebreak: '#0000001A'
      },
      fontSize: {
        headings: '27px',
        cards: '19px',
        subHeadings: '15px',
        normal: '14px'
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.5px',
        tighter: '-0.25px',
      }
    },
  },
  plugins: [],
}

