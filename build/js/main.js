window.addEventListener('load', init);

function init() {

  function toggleClasses() {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.header__menu nav').classList.toggle('open');
  }

  document.querySelector('.burger').addEventListener('click', function(){
    toggleClasses();
  })

  const anchors = document.querySelectorAll('.scroll-to');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      const getActiveMobileMenu = document.querySelector('.header__menu nav.open');
      if (getActiveMobileMenu) {
        toggleClasses();
      }
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    })
  }
}