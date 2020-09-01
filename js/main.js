const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
let menuOpen = false;

hamburger.addEventListener("click", () => {

  if(!menuOpen) {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    menuOpen = true;
  } else {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    menuOpen = false;
  }
  
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

window.onscroll = function (e) {  
  if(navLinks.classList.contains('open'))
      {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
  } 

