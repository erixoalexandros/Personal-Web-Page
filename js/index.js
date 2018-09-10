window.addEventListener('load', () => {

  const nav = document.getElementsByTagName('nav')[0];
  const navListItems = nav.firstElementChild.children;
  const about = document.getElementById('about');
  const skills = document.getElementById('skills');
  const experience = document.getElementById('experience');
  const education = document.getElementById('education');
  const skillsContainer = Array.from(document.getElementById('skills-container').children);

  this.addEventListener('scroll', () => {

    if (window.scrollY > 67) {
      if (!nav.classList.contains('nav-fixed')) {
        nav.classList.add('nav-fixed');
      }
    } else {
      if (nav.classList.contains('nav-fixed')) {
        nav.classList.remove('nav-fixed');
      }
    }

    if (window.scrollY >= (about.offsetTop - 74) && window.scrollY < (skills.offsetTop - 200)) {

      if (!navListItems[0].classList.contains('current-section')) {
        navListItems[0].classList.add('current-section');
      }
    } else {
      if (navListItems[0].classList.contains('current-section')) {
        navListItems[0].classList.remove('current-section');
      }
    }

    if (window.scrollY >= (skills.offsetTop - 200) && window.scrollY < (experience.offsetTop - 200)) {

      if (!navListItems[1].classList.contains('current-section')) {
        navListItems[1].classList.add('current-section');
      }
    } else {
      if (navListItems[1].classList.contains('current-section')) {
        navListItems[1].classList.remove('current-section');
      }
    }

    if (window.scrollY >= (experience.offsetTop - 200) && window.scrollY < (education.offsetTop - 74)) {

      if (!navListItems[2].classList.contains('current-section')) {
        navListItems[2].classList.add('current-section');
      }
    } else {
      if (navListItems[2].classList.contains('current-section')) {
        navListItems[2].classList.remove('current-section');
      }
    }

  });

  skillsContainer.forEach(cardContainer => {

    const card = cardContainer.firstElementChild;

    card.addEventListener('click', function() {
      if (!card.classList.contains('flipped-card')) {
        card.classList.add('flipped-card');
      } else {
        card.classList.remove('flipped-card');
      }
    });

  });

});