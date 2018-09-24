'use strict';

window.addEventListener('load', function () {//Load Page first

  //DOM LOADER/////////////////////////////////////////////
  var wrapper = document.getElementById('wrapper');
  var nav = document.getElementsByTagName('nav')[0];
  //DOM LOADER/////////////////////////////////////////////

  this.addEventListener('scroll', function () {//When scroll

    navBarBehavior();

  });

  function navBarBehavior() {

    if (pageYOffset > 100) {//When nav bar is not visible at the top

      // Add Right Arrow if screen -1500px wide
      if (innerWidth <= 1500 && wrapper.lastElementChild.id !== 'right-arrow') {

        wrapper.insertAdjacentHTML('beforeend', '<img id="right-arrow" src="img/right-arrow.svg" alt="Right Arrow">');

      }

      if (!nav.classList.contains('nav-fixed')) {//Fix the nav bar to the right

        nav.classList.add('nav-fixed');

      }

    } else {

      if (wrapper.lastElementChild.id === 'right-arrow') {//Remove Right Arrow Image

        wrapper.removeChild(wrapper.lastElementChild);
      }

      if (nav.classList.contains('nav-fixed')) {//Unfix nav bar

        nav.classList.remove('nav-fixed');
        
      }
    }
  }
});