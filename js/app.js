const navbarEl = document.querySelector('#mainNav');
const getBodyScrollTop = function() {
  const el = document.scrollingElement.scrollTop || document.documentElement.scrollTop
  return el
}

window.addEventListener('scroll', () => {
  if (getBodyScrollTop() >= 100) {
    navbarEl.classList.add("navbar-shrink");
  } else {
    navbarEl.classList.remove("navbar-shrink");
  }
});