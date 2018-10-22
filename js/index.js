'use strict';

window.addEventListener('load', function () {//Load Page first

  //DOM LOADER/////////////////////////////////////////////
  var nav = document.getElementsByTagName('nav')[0];
  var navItems = Array.prototype.slice.call(nav.firstElementChild.children);//Convert node-list in an Array
  var navIcon = document.getElementById('nav-menu-icon');
  var navCloseIcon = document.getElementById('nav-close-icon');
  var aboutPicture = document.querySelector('#about img');
  var experience = document.getElementsByClassName('experience-boxes')[0];
  var courseArrows = document.querySelectorAll('#courses-carousel i');
  var nextCourse = courseArrows[1];
  var previousCourse = courseArrows[0];
  var courseInfo = document.querySelectorAll('#courses-carousel-card p');
  var courseTitle = courseInfo[0];
  var courseSource = courseInfo[1];
  var courseImage = document.querySelector('#courses-carousel-card img');
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

  function pictureOrientation () {// Control picture orientation

    if (innerWidth <= 750 && innerWidth > 500) {
      aboutPicture.src = 'img/me-landscape.png';
    } else if (innerWidth <= 500) {
      aboutPicture.src = 'img/me-square.png';
    } else {
      aboutPicture.src = 'img/me-portrait.png';
    }

  }

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

  function afterpageLoaded() {

    navBarBehavior();
    pictureOrientation();
    changeExperienceToMobile();

  }

  afterpageLoaded();

  //When scroll
  this.addEventListener('scroll', function () {

    navBarBehavior();

  });

  //When resize
  this.addEventListener('resize', function () {
    
    afterpageLoaded();

    if (innerWidth <= 900) {
            
      if (nav.classList.contains('nav-mobile')) {//...Close nav-bar
        
        nav.classList.remove('nav-mobile');
        navIcon.style.left = 'calc(90% - 2rem)';//...Restore Nav Icon position
        navIcon.style.opacity = '1';

      } else if (navCloseIcon.style.display === 'block') {

        navCloseIcon.style.display = 'none';
  
      } 

    }

  });

  //When Nav-icon is clicked
  navIcon.addEventListener('click', function() {

      nav.classList.add('nav-mobile');// Add visibility to the nav bar
      navCloseIcon.style.display = 'block';//Show close button on nav-bar
      this.style.left = '100%';// Hide nav-bar icon
      this.style.opacity = '0';

  });


  //When a nav-bar item is clicked
  navItems.forEach(function(item) {

    item.addEventListener('click', function() {// Hide nav-bar when click on any list item

      if (innerWidth <= 750) {

        nav.classList.remove('nav-mobile');
        navIcon.style.left = 'calc(90% - 2rem)';// Show nav-bar icon back
        navIcon.style.opacity = '1';

      }

    });

  });

  var courses = [
    {
      title: 'Build Responsive Real World Websites',
      source: 'Udemy'
    },
    {
      title: 'Responsive Website Development and Design        Specialization',
      source: 'Coursera'
    },
    {
      title: 'The Complete JavaScript Course',
      source: 'Udemy'
    },
    {
      title: 'JavaScript: Understanding the Weird Parts',
      source: 'Udemy'
    },
    {
      title: 'Web Design for Web Developers',
      source: 'Udemy'
    },
    {
      title: 'Web Design with HTML, CSS, JavaScript and jQuery',
      source: 'Jon Duckett Book Series'
    },
    {
      title: 'You Don’t Know JS',
      source: 'Kyle Simpson Book Series'
    },
    {
      title: 'Head First JavaScript Programming',
      source: 'Book'
    }
  ];

  var currentImage = 0;

  function changeCourseInfo() {
    courseImage.src = `http://127.0.0.1:5500/img/Course-${currentImage}.jpg`;
    courseTitle.textContent = courses[currentImage].title;
    courseSource.textContent = courses[currentImage].source;
    courseImage.alt = `${courses[currentImage].title} from ${courses[currentImage].source}`;
  }

  //When click right arrow to the next course 
  nextCourse.addEventListener('click', function() {

    currentImage++;

    if (currentImage === courses.length) {
      currentImage = 0;
    }

    changeCourseInfo();
    
  });

  //When click left arrow to the prevoius course 
  previousCourse.addEventListener('click', function() {

    currentImage--;

    if (currentImage === -1) {
      currentImage = courses.length - 1;
    }

    changeCourseInfo();
    
  });

});