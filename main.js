// Loader hide on page load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 1500);
  }
});

// Elements
const hamburguerMenu = document.querySelector("#hamburguer__menu");
const responsiveNav = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__link")

// Show Menu (Tablet and Mobile)
hamburguerMenu.addEventListener('click', () => {

  responsiveNav.classList.toggle('active')

})

// Remove class .active from CSS once the user click any link
links.forEach(link => {
  link.addEventListener("click", () => {

    if (responsiveNav.classList.contains("active")) {
      responsiveNav.classList.remove("active")
    }

  })
})