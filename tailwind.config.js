module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#00bcd4',
          200: '#00a9bf',
          300: '#0096aa',
          400: '#008494',
          500: '#00717f',
          600: '#005e6a',
          700: '#004b55',
          800: '#003840',
          900: '#00262a'
        }
      },
      borderRadius: {
        md: '4px'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
