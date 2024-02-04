
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
  
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