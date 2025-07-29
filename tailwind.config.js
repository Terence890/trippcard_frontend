/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#123B68',
          dark: '#1B3A57',
          light: '#4AB3F4'
        },
        accent: {
          DEFAULT: '#F4B400',
          light: '#FFE082'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#D0D0D0'
        }
      },
      fontFamily: {
        'heading': ['Poppins', 'Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'Roboto', 'sans-serif'],
        'tagline': ['Raleway', 'Lato', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
} 