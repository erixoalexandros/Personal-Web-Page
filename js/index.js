'use strict';

window.addEventListener('load', function () {//Load Page first

  //DOM LOADER/////////////////////////////////////////////
  var nav = document.getElementsByTagName('nav')[0];
  var navItems = Array.prototype.slice.call(nav.firstElementChild.children);//Convert node-list in an Array
  var navIcon = document.getElementById('nav-menu-icon');
  var navCloseIcon = document.getElementById('nav-close-icon');
  var aboutPicture = document.querySelector('#about img');
  var arrows = Array.prototype.slice.call(document.querySelectorAll('.experience-boxes i'));
  var experience = document.getElementsByClassName('experience-boxes')[0];
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

  function replaceArrows() {

    if (innerWidth < 750) {

      arrows.forEach(function(arrow) {

        if (!arrow.classList.contains('fa-angle-double-up')) {
    
          arrow.classList.remove(arrow.classList.item(1));
          arrow.classList.add('fa-angle-double-up');
    
        }
    
      });
      
    } else {

      if (arrows[0].classList.contains('fa-angle-double-up')) {

        arrows[0].classList.remove('fa-angle-double-up');
        arrows[0].classList.add('fa-angle-double-left');

      } else if (arrows[2].classList.contains('fa-angle-double-up')) {

        arrows[2].classList.remove('fa-angle-double-up');
        arrows[2].classList.add('fa-angle-double-left');

      }

    } 
    
  }

  navBarBehavior();//... when page is loaded
  pictureOrientation();
  replaceArrows();
  changeExperienceToMobile();

  this.addEventListener('scroll', function () {//When scroll

    navBarBehavior();

  });

  this.addEventListener('resize', function () {//When resize...
    
    navBarBehavior();
    pictureOrientation();
    replaceArrows();
    changeExperienceToMobile();

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

  function changeExperienceToMobile() {

    if (innerWidth <= 750) {

      experience.innerHTML = `
                <fieldset>
                    <legend>2006 - 2009</legend>
                    <p>Intranet Webmaster</p>
                    <p>Military Academy</p>
                    <p>Havana, Cuba</p>
                </fieldset>

                <i class="fas fa-angle-double-down"></i>

                <fieldset>
                    <legend>2010 - 2015</legend>
                    <p>Network Administrator</p>
                    <p>Historian's Office Of Havana</p>
                    <p>Havana, Cuba</p>
                </fieldset>

                <i class="fas fa-angle-double-down"></i>

                <fieldset>
                    <legend>2016 - Present</legend>
                    <p>IT Specialist</p>
                    <p>San Jose Clinic</p>
                    <p>Houston, TX</p>
                </fieldset>

                <i class="fas fa-angle-double-down"></i>     
                
                <div class="web-dev-animation">
                    <img class="static" src="img/web-dev-animation/web-development.svg">
                    <img class="nut" src="img/web-dev-animation/nut.svg">
                    <img class="ball yellow" src="img/web-dev-animation/yellow-ball.svg">
                    <img class="ball green" src="img/web-dev-animation/green-ball.svg">
                    <img class="ball blue" src="img/web-dev-animation/blue-ball.svg">
                    <img class="ball red" src="img/web-dev-animation/red-ball.svg">
                    <img class="light-bulb" src="img/web-dev-animation/light-bulb.svg">
                    <img class="planet" src="img/web-dev-animation/planet.svg">
                    <img class="angle-bracket" src="img/web-dev-animation/angle-bracket.svg">
                    <img class="closed-tag" src="img/web-dev-animation/closed-tag.svg">
                    <img class="rule" src="img/web-dev-animation/rule.svg">
                    <img class="pen" src="img/web-dev-animation/pen.svg">
                </div>`;

    } else {
      experience.innerHTML = `
                <div class="web-dev-animation">
                    <img class="static" src="img/web-dev-animation/web-development.svg">
                    <img class="nut" src="img/web-dev-animation/nut.svg">
                    <img class="ball yellow" src="img/web-dev-animation/yellow-ball.svg">
                    <img class="ball green" src="img/web-dev-animation/green-ball.svg">
                    <img class="ball blue" src="img/web-dev-animation/blue-ball.svg">
                    <img class="ball red" src="img/web-dev-animation/red-ball.svg">
                    <img class="light-bulb" src="img/web-dev-animation/light-bulb.svg">
                    <img class="planet" src="img/web-dev-animation/planet.svg">
                    <img class="angle-bracket" src="img/web-dev-animation/angle-bracket.svg">
                    <img class="closed-tag" src="img/web-dev-animation/closed-tag.svg">
                    <img class="rule" src="img/web-dev-animation/rule.svg">
                    <img class="pen" src="img/web-dev-animation/pen.svg">
                </div>

                <i class="fas fa-angle-double-left"></i>

                <fieldset>
                    <legend>2016 - Present</legend>
                    <p>IT Specialist</p>
                    <p>San Jose Clinic</p>
                    <p>Houston, TX</p>
                </fieldset>

                <i class="fas fa-angle-double-up"></i>

                <fieldset>
                    <legend>2006 - 2009</legend>
                    <p>Intranet Webmaster</p>
                    <p>Military Academy</p>
                    <p>Havana, Cuba</p>
                </fieldset>

                <i class="fas fa-angle-double-right"></i>

                <fieldset>
                    <legend>2010 - 2015</legend>
                    <p>Network Administrator</p>
                    <p>Historian's Office Of Havana</p>
                    <p>Havana, Cuba</p>
                </fieldset>`;
    }
      
  }

});