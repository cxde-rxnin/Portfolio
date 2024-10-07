module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sen: ['Sen', 'sans-serif'],
        vt323: ['VT323', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
