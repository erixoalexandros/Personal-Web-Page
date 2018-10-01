'use strict';

window.addEventListener('load', function () {//Load Page first

  //DOM LOADER/////////////////////////////////////////////
  var nav = document.getElementsByTagName('nav')[0];
  var navItems = Array.prototype.slice.call(nav.firstElementChild.children);
  var navBarExpander = document.getElementById('nav-menu-icon');
  //DOM LOADER/////////////////////////////////////////////

  this.addEventListener('scroll', function () {//When scroll

    navBarBehavior();

  });

  function navBarBehavior() {

    if (pageYOffset > 100 && innerWidth > 750) {//When nav bar is not visible at the top

      if (!nav.classList.contains('nav-fixed')) {//Fix the nav bar to the right
        nav.classList.add('nav-fixed');
      }

    } else {

      if (nav.classList.contains('nav-fixed')) {//Unfix nav bar
        nav.classList.remove('nav-fixed');   
      }
      
    }
  }

  navBarExpander.addEventListener('click', function() {

    if (nav.style.left !== '80%') {
      nav.style.left = '80%';
      this.style.display = "none";
    }
    
  });

  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      nav.style.left = '100%';
      navBarExpander.style.display = 'block';
    });
  });
    



});