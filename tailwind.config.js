/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        body: ['Proxima Nova', 'system-ui', 'sans-serif']
      },
      colors: {
        primaryRubeus: {
          green: "#0DA6A6",
          red: "#FF0031",
          gray: "#4D4D4D",
          system: "#D4D4D4",
          strong: "#1A1A1A"
        }
      }
    },
  },
  plugins: [],
}
