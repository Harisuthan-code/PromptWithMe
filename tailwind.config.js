/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Roboto Slab"', 'serif'], // Replace with any font you want
      },

      screens: {
        'ssm': '375px',  // Custom screen size for 375px
        'sm': '640px',   // Small screens (default Tailwind)
        'md': '768px',   // Medium screens (default Tailwind)
        'lg': '1024px',  // Large screens (default Tailwind)
        'xl': '1280px',  // Extra large screens (default Tailwind)
        '2xl': '1536px', // Extra extra large screens (default Tailwind)
      },

      animation: {
        'text-slide': 'textSlide 1s ease-out forwards',
      },
      keyframes: {
        textSlide: {
          '0%': { opacity: 0, transform: 'translateX(-10px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },

    },
    
  },
  plugins: [],
}

