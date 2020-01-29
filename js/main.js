// Menu Toggler
const selectElement = (element) => {
  return document.querySelector(element);
}

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');

menuToggler.addEventListener('click', () => {
  body.classList.toggle('open');
});

// Close menu on link click
const navLink = document.querySelectorAll('.nav-link');

Array.from(navLink).forEach(function(element) {
  element.addEventListener('click', () => {
    body.classList.remove('open');
  })
})

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 200
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 400
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 400
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 400
});

sr.reveal('.animate-top-fast', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 200
});