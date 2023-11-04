// Scrolling effect
var nav = document.querySelector(".nav");
window.onscroll = function() {
    if(window.scrollY>20) {
        nav.classList.add("navbar-scrolled");
    }else {
        nav.classList.remove("navbar-scrolled");
    }
}

// Loading More Cars
let loadBtn = document.querySelector(".load-more");
let currentBox = 3;
loadBtn.addEventListener("click", function() {
    loadBtn.innerHTML = "Load more";
    let boxes = document.querySelectorAll(".car-box");
    for(var i=currentBox; i<currentBox+3; i++) {    //It'showing (All of the 6,9,12.. boxes on one click)
        boxes[i].style.display = "flex";
    }
    currentBox = currentBox + 3;
    if(currentBox >= boxes.length) {
        loadBtn.style.display = "none";
    }
});

// Hamburger icon
let hamBurger = document.querySelector(".hamburger");
let navBar = document.querySelector(".nav");
hamBurger.addEventListener("click", function() {
    navBar.classList.toggle("active");
})

// Review slider
const boxes  = document.querySelectorAll(".review-box");
var counter = 0;
console.log(boxes)
boxes.forEach(function(box, index) {
    box.style.left = `${index * 30}%`
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });