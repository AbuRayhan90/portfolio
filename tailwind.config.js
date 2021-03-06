module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          600: '#E6425E ',
        },
      },
      backgroundImage: {
        'hero-area': "url('/src/assets/img/heroarea.jpg')",
        'skill-area': "url('/src/assets/img/skills.png')",
        'testimonial-area': "url('/src/assets/img/testimonial.jpg')",
        'contact-area': "url('/src/assets/img/contact-bg.jpg')",
      },
    },
  },
  plugins: [],
};
