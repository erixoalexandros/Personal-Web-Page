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
      if (innerWidth <= 1500 && !wrapper.lastElementChild.classList.contains('right-arrow')) {

        wrapper.insertAdjacentHTML('beforeend', '<i class="fas fa-bars right-arrow"></i>');

      }

      if (!nav.classList.contains('nav-fixed')) {//Fix the nav bar to the right

        nav.classList.add('nav-fixed');

      }

    } else {

      if (wrapper.lastElementChild.classList.contains('right-arrow')) {//Remove Right Arrow Image

        wrapper.removeChild(wrapper.lastElementChild);
        
      }

      if (nav.classList.contains('nav-fixed')) {//Unfix nav bar

        nav.classList.remove('nav-fixed');
        
      }
    }
  }

});