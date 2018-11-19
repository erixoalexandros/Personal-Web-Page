'use strict';

window.addEventListener('load', function () { //Load Page first
  //DOM LOADER/////////////////////////////////////////////
  var nav = document.getElementsByTagName('nav')[0];
  var navItems = Array.prototype.slice.call(nav.firstElementChild.children); //Convert node-list in an Array
  var navIcon = document.getElementById('nav-menu-icon');
  var navCloseIcon = document.getElementById('nav-close-icon');
  var aboutPicture = document.querySelector('#about img');
  var experiencesArrows = Array.prototype.slice.call(document.querySelectorAll('.experience-boxes i'));
  var courseArrows = document.querySelectorAll('#courses-carousel i');
  var nextCourse = courseArrows[1];
  var previousCourse = courseArrows[0];
  var courseInfo = document.querySelectorAll('#courses-carousel-card p');
  var courseTitle = courseInfo[0];
  var courseSource = courseInfo[1];
  var courseImage = document.querySelector('#courses-carousel-card img');
  //DOM LOADER/////////////////////////////////////////////

  function navBarBehavior() {

    if (pageYOffset > 100 && innerWidth > 750) { //When nav bar is not visible at the top

      if (!nav.classList.contains('nav-fixed')) { //Fix the nav bar to the right
        nav.classList.add('nav-fixed');
      }

    } else {

      if (nav.classList.contains('nav-fixed')) { //Unfix nav bar
        nav.classList.remove('nav-fixed');
      }

    }

  }

  function pictureOrientation() { // Control picture orientation

    if (innerWidth <= 750 && innerWidth > 500) {
      aboutPicture.src = 'img/me-landscape.png';
    } else if (innerWidth <= 500) {
      aboutPicture.src = 'img/me-square.png';
    } else {
      aboutPicture.src = 'img/me-portrait.png';
    }

  }

  var arrow = [];

  function changeExperienceToMobile() {

    var counter = 0;

    if (innerWidth <= 750) {

      experiencesArrows.forEach(function (element) {

        arrow.push(element.classList.item(1));

        if (element.classList.contains('fa-angle-double-left')) {
          element.classList.remove('fa-angle-double-left');
          element.classList.add('fa-angle-double-down');
        } else if (element.classList.contains('fa-angle-double-right')) {
          element.classList.remove('fa-angle-double-right');
          element.classList.add('fa-angle-double-down');
        } else if (element.classList.contains('fa-angle-double-up')) {
          element.classList.remove('fa-angle-double-up');
          element.classList.add('fa-angle-double-down');
        }

      });

      arrow = arrow.slice(0, 3);

    } else {

      experiencesArrows.forEach(function (element) {

        if (element.classList.contains('fa-angle-double-down')) {
          element.classList.remove('fa-angle-double-down');
          element.classList.add(arrow[counter]);
        }

        counter++;

      });

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

      if (nav.classList.contains('nav-mobile')) { //...Close nav-bar

        nav.classList.remove('nav-mobile');
        navIcon.style.left = 'calc(90% - 2rem)'; //...Restore Nav Icon position
        navIcon.style.opacity = '1';

      } else if (navCloseIcon.style.display === 'block') {

        navCloseIcon.style.display = 'none';

      }

    }

  });

  //When Nav-icon is clicked
  navIcon.addEventListener('click', function () {

    nav.classList.add('nav-mobile'); // Add visibility to the nav bar
    navCloseIcon.style.display = 'block'; //Show close button on nav-bar
    this.style.left = '100%'; // Hide nav-bar icon
    this.style.opacity = '0';

  });


  //When a nav-bar item is clicked
  navItems.forEach(function (item) {

    item.addEventListener('click', function () { // Hide nav-bar when click on any list item

      if (innerWidth <= 750) {

        nav.classList.remove('nav-mobile');
        navIcon.style.left = 'calc(90% - 2rem)'; // Show nav-bar icon back
        navIcon.style.opacity = '1';

      }

    });

  });

  var courses = [{
      title: 'Build Responsive Real World Websites',
      source: 'Udemy'
    },
    {
      title: 'Responsive Website Development and Design Specialization',
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

    courseImage.src = 'img/Course-' + currentImage + '.jpg';

    courseImage.style.animation = 'fadeIn .5s';

    setTimeout(function () {

      courseImage.style.animation = 'none';

    }, 500);

    courseTitle.textContent = courses[currentImage].title;
    courseSource.textContent = courses[currentImage].source;
    courseImage.alt = courses[currentImage].title + ' from ' + courses[currentImage].source;
  }

  //When click right arrow to the next course 
  nextCourse.addEventListener('click', function () {

    currentImage++;

    if (currentImage === courses.length) {
      currentImage = 0;
    }

    changeCourseInfo();

  });

  //When click left arrow to the prevoius course 
  previousCourse.addEventListener('click', function () {

    currentImage--;

    if (currentImage === -1) {
      currentImage = courses.length - 1;
    }

    changeCourseInfo();

  });

  // Run elements effect when scroll down the page
  AOS.init();

  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

});