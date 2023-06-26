document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".navbar");
  var stateNormal = false;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 92) {
      if (stateNormal === false) {
        stateNormal = true;
        menu.classList.add("changeBg");
      }
    }
    if (window.pageYOffset < 92) {
      if (stateNormal === true) {
        stateNormal = false;        
        menu.classList.remove("changeBg");
      }
    }
  });
});
