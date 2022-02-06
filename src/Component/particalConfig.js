const particles = {
  particles: {
    number: {
      value: 85,
      density: {
        enable: true,
        value_area: 710.2328774690454,
      },
    },
    color: {
      value: '#fafafa',
    },
    shape: {
      type: 'star',
      stroke: {
        width: 0,
        color: '#613c3c',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.4489553770423464,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.017060304327615,
      random: true,
      anim: {
        enable: true,
        speed: 0,
        size_min: 0.8120772123013452,
        sync: true,
      },
    },
    line_linked: {
      enable: false,
      distance: 64.13648243462092,
      color: '#ffffff',
      opacity: 0.15232414578222467,
      width: 0.9620472365193136,
    },
    move: {
      enable: true,
      speed: 1.603412060865523,
      direction: 'top',
      random: true,
      straight: true,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default particles;