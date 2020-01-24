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