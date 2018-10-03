'use strict';

window.addEventListener('load', function () {//Load Page first

  //DOM LOADER/////////////////////////////////////////////
  var wrapper = document.getElementById('wrapper');
  var nav = document.getElementsByTagName('nav')[0];
  var navItems = Array.prototype.slice.call(nav.firstElementChild.children);//Convert node-list in an Array
  var navIcon = document.getElementById('nav-menu-icon');
  var navCloseIcon = document.getElementById('nav-close-icon');
  var aboutPicture = document.querySelector('#about img');
  //DOM LOADER/////////////////////////////////////////////

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

  function pictureOrientation () {// Control the orientation of the picture

    if (innerWidth < 750) {
      aboutPicture.src = 'img/me-landscape.png';
    } else {
      aboutPicture.src = 'img/me-portrait.png';
    }

  }

  navBarBehavior();//... when page is loaded
  pictureOrientation();//... when page is loaded

  this.addEventListener('scroll', function () {//When scroll

    navBarBehavior();

  });

  this.addEventListener('resize', function () {//When resize...
    
    navBarBehavior();
    pictureOrientation();

    if (innerWidth <= 900) {
      
      nav.style.transition = 'none';//...Avoid flying effect of the nav-bar accross the page
      
      if (nav.classList.contains('nav-mobile')) {//...Close nav-bar
        
        nav.classList.remove('nav-mobile');
        navIcon.style.left = 'calc(90% - 2rem)';//...Restore Nav Icon position
        navIcon.style.opacity = '1';

      }

    } else {

      nav.style.transition = 'left 0.5s'; //Keep the transition effect

    }

  });

  navIcon.addEventListener('click', function() {//When click on the Nav-icon

      nav.classList.add('nav-mobile');// Add visibility to the nav bar
      this.style.left = '100%';// Hide nav-bar icon
      this.style.opacity = '0';

  });

  navItems.forEach(function(item) {

    item.addEventListener('click', function() {// Hide nav-bar when click on any list item

      if (innerWidth <= 750) {

        nav.classList.remove('nav-mobile');
        navIcon.style.left = 'calc(90% - 2rem)';// Show nav-bar icon back
        navIcon.style.opacity = '1';

      }

    });

  });

});