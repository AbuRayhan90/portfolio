module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-area': "url('/src/assets/img/heroarea.jpg')",
        'skills-area': "url('/src/assets/img/heroarea1.jpg')",
        'testimonial-area': "url('/src/assets/img/testimonial.jpg')",
        'contact-area': "url('/src/assets/img/contact-bg.jpg')",
      },
    },
  },
  plugins: [],
};
