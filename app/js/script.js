// const { Container } = require("postcss");

console.log("Hello");
const slides = document.querySelectorAll(".slide-container");
const nexBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slidesText = document.querySelectorAll(".text");

slides.forEach(function (slideContainer, index) {
  slideContainer.style.left = `${index * 100}%`;
});
slidesText.forEach(function (slideText, index) {
  slideText.style.left = `${index * 100}%`;
});

let counter = 0;
nexBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  //working with slides
  if (counter === slides.length && counter === slidesText.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
  slidesText.forEach(function (textSlide) {
    textSlide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
