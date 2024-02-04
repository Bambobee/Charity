// JavaScript for the sticky header
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

//JavaScript for the slider
const myslide = document.querySelectorAll(".myslider"),
  dot = document.querySelectorAll('.dot');

let counter = 0; // Start from 0
slidefun(counter);
let timer = setInterval(autoslide, 8000);

function autoslide() {
  counter += 1;
  slidefun(counter);
}

function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}

function currentSlide(n) {
  counter = n - 1; // Adjusted to 0-based indexing
  slidefun(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}

function slidefun(n) {
  for (let i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove('active');
  }

  if (n >= myslide.length) {
    counter = 0;
  }
  if (n < 0) {
    counter = myslide.length - 1;
  }

  myslide[counter].style.display = "block";
  dot[counter].classList.add('active');
}


//JavaScript for the next slide 
//variables
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");


buttonLeft.addEventListener("click", () => {
  slider.scrollLeft -= 125;

});
buttonRight.addEventListener("click", () => {
  slider.scrollLeft += 125;

});
const maxScrollLeft = slider.scrollWidth - slider.clientWidth;


// Autoplay slider

function autoplay() {
  if (slider.scrollLeft > (maxScrollLeft - 1)) {
    slider.scrollLeft -= maxScrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}
let play = setInterval(autoplay, 50);


//counter

var count = document.getElementsByClassName("count");
var inc = [];

function intervalFunc() {
  for (let i = 0; i < count.length; i++) {
    inc.push(1);
    if (inc[i] != count[i].getAttribute("max-data")) {
      inc[i]++;
    }
    count[i].innerHTML = inc[i];
  }
}

setInterval(intervalFunc, 100);

var main = document.getElementById("main");

window.onscroll = function () {
  var timer = setInterval(() => {
    var topElem = main.offsetTop;
    var btmElem = main.offsetTop + main.clientHeight;
    var topScreen = window.pageYOffset;  // Fix the typo here
    var btmScreen = window.pageYOffset + window.innerHeight;

    if (btmScreen > topElem && topScreen < btmElem) {
      intervalFunc();
    } else {
      clearInterval(timer);
      for (let i = 0; i < count.length; i++) {
        count[i].innerHTML = 1;
        inc = [];
      }
    }
  }, 100)

};


//Java script for the scroll button

const toTop = document.querySelector(".goto")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  }
  else {
    toTop.classList.remove("active")
  }
})

//javascript for toggle

const navBar = document.getElementById("navbar");
const iconToggle = document.getElementById("icon");

iconToggle.addEventListener("click", () => {
  navBar.classList.toggle("display");
  iconToggle.classList.toggle("fa-x");
})