var controls = document.querySelectorAll(".controlButton");
var indicator = document.querySelector(".slider-indicator");
var images = document.querySelectorAll(".cat-slider__image picture");

for (var i = 0; i < controls.length; i++) {
  controls[i].addEventListener("click", function (evt) {
    if (evt.target.id == "slideAfter") {
      indicator.classList.remove("slider-indicator--before");
      indicator.classList.add("slider-indicator--after");
      for (var j = 0; j < images.length; j++) {
        images[0].hidden = true;
        images[1].hidden = false;
      }
    } else {
      indicator.classList.remove("slider-indicator--after");
      indicator.classList.add("slider-indicator--before");
      for (var j = 0; j < images.length; j++) {
        images[0].hidden = false;
        images[1].hidden = true;
      }
    }
  });
}
