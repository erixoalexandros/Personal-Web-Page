window.addEventListener('load', () => {

  const nav = document.getElementsByTagName('nav')[0];
  const navListItems = nav.firstElementChild.children;
  const about = document.getElementById('about');
  const skills = document.getElementById('skills');
  const education = document.getElementById('education-experience');
  const experience = document.getElementById('experience');
  const contact = document.getElementById('contact');

  this.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
      if (!nav.classList.contains('nav-fixed')) {
        nav.classList.add('nav-fixed');
      }
    } else {
      if (nav.classList.contains('nav-fixed')) {
        nav.classList.remove('nav-fixed');
      }
    }

    if (window.scrollY >= (about.offsetTop) && window.scrollY < (skills.offsetTop - 200)) {

      if (!navListItems[0].classList.contains('current-section')) {
        navListItems[0].classList.add('current-section');
      }
    } else {
      if (navListItems[0].classList.contains('current-section')) {
        navListItems[0].classList.remove('current-section');
      }
    }

    if (window.scrollY >= (skills.offsetTop - 200) && window.scrollY < (education.offsetTop)) {

      if (!navListItems[1].classList.contains('current-section')) {
        navListItems[1].classList.add('current-section');
      }
    } else {
      if (navListItems[1].classList.contains('current-section')) {
        navListItems[1].classList.remove('current-section');
      }
    }

    if (window.scrollY >= (education.offsetTop) && window.scrollY < (experience.offsetTop - 100)) {

      if (!navListItems[2].classList.contains('current-section')) {
        navListItems[2].classList.add('current-section');
      }
    } else {
      if (navListItems[2].classList.contains('current-section')) {
        navListItems[2].classList.remove('current-section');
      }
    }

    if (window.scrollY >= (experience.offsetTop - 100) && window.scrollY < (contact.offsetTop)) {

      if (!navListItems[3].classList.contains('current-section')) {
        navListItems[3].classList.add('current-section');
      }
    } else {
      if (navListItems[3].classList.contains('current-section')) {
        navListItems[3].classList.remove('current-section');
      }
    }

  });

});