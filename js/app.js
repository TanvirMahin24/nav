const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-group");


hamburger.addEventListener('click',()=>{
   navLinks.classList.toggle("open");
});