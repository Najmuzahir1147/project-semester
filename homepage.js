//StickyNavbar
window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("navbod");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//TransparentNavbar
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbod");
    var text = document.querySelectorAll(".mycontent");
    text.forEach(function(text) {
      
    });
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "white";
      text.style.color = "white";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });
});