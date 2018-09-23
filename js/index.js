//Load Page
window.addEventListener('load', () => {

  //DOM LOADER/////////////////////////////////////////////
  const wrapper = document.getElementById('wrapper');
  const nav = document.getElementsByTagName('nav')[0];
  const navListItems = nav.firstElementChild.children;//Navigation bar items
  const about = document.getElementById('about');
  const skills = document.getElementById('skills');
  const experience = document.getElementById('experience');
  const education = document.getElementById('education');
  //////////////////////////////////////////////////////////

  this.addEventListener('scroll', () => {//When scroll

    if (scrollY > 100) {//When nav bar is not visible at the top

      // Add Right Arrow if screen -1500px wide and doesn't exist
      if (innerWidth <= 1500 && wrapper.lastElementChild.id !== 'right-arrow') {
        console.log();
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



    if (window.scrollY >= (about.offsetTop) && window.scrollY < (skills.offsetTop - 200)) {

      if (!navListItems[0].classList.contains('current-section')) {
        navListItems[0].classList.add('current-section');
      }
    } else {
      if (navListItems[0].classList.contains('current-section')) {
        navListItems[0].classList.remove('current-section');
      }
    }

    if (window.scrollY >= (skills.offsetTop - 200) && window.scrollY < (experience.offsetTop)) {

      if (!navListItems[1].classList.contains('current-section')) {
        navListItems[1].classList.add('current-section');
      }
    } else {
      if (navListItems[1].classList.contains('current-section')) {
        navListItems[1].classList.remove('current-section');
      }
    }

    if (window.scrollY >= (experience.offsetTop) && window.scrollY < (education.offsetTop)) {

      if (!navListItems[2].classList.contains('current-section')) {
        navListItems[2].classList.add('current-section');
      }
    } else {
      if (navListItems[2].classList.contains('current-section')) {
        navListItems[2].classList.remove('current-section');
      }
    }

  });

});