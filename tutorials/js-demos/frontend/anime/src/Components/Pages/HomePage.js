import anime from 'animejs/lib/anime.es';

import { renderHeaderTitle } from '../../utils/render';

const HomePage = () => {
  renderHeaderTitle('Animation with anime.js');

  const propeller = document.getElementById('propeller');

  // start with aligning the lift & propeller in the center of the page content
  const animation = anime({
    // here you specify your targeted element through CSS selector syntax
    targets: '#propeller',
    rotate: '360', // duration in ms to make one iteration
    duration: 1000, // number of iterations or true for indefinitely
    loop: true, // don't start automatically the animation
    autoplay: false,
    easing: 'linear',
  });

  /* mouseenter event is more convenient than mouseover in order not to restart
  the animation spuriously after a click */
  propeller.addEventListener('mouseenter', () => {
    console.log('mouseenter:', anime.running.length);
    animation.play();
  });

  propeller.addEventListener('click', () => {
    animation.pause();
    // inflate our propeller

    anime({
      // here you specify your targeted element through CSS selector syntax
      targets: '#propeller',
      duration: 1000, // duration in ms to make one iteration
      scale: 2, // to go from scale x2
      autoplay: true, // start automatically the animation
      direction: 'alternate', // back and forth
      loop: true, // number of iterations or true for indefinitely
      easing: 'linear',
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp') {
      /* The animation to go up has to be inside the click event in order to start from
      a relative correct position.
      If the animation was declared globally, it will always start to translate from
      the same position.
      Don't start the animation if no other animation is running. */
      if (anime.running.length !== 0) {
        anime({
          targets: '#lift',
          translateY: '-=50',
          duration: 1000,
          autoplay: true,
          easing: 'linear',
        });
      }
    }

    if (e.code === 'ArrowDown') {
      if (anime.running.length !== 0) {
        anime({
          targets: '#lift',
          translateY: '+=50',
          duration: 1000,
          autoplay: true,
          easing: 'linear',
        });
      }
    }
  });
};

export default HomePage;
