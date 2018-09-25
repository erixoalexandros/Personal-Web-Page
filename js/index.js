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

      if (!nav.classList.contains('nav-fixed')) {//Fix the nav bar to the right
        nav.classList.add('nav-fixed');
      }

    } else {

      if (nav.classList.contains('nav-fixed')) {//Unfix nav bar
        nav.classList.remove('nav-fixed');   
      }
      
    }
  }

});