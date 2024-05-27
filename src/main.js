const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  autoplay: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

AOS.init();


document.addEventListener("DOMContentLoaded", function () {
  // Select the menu element
  var menu = document.querySelector("#menu");

  // Clone the menu
  var clonedMenu = menu.cloneNode(true);

  // Select the div where you want to append the cloned menu
  var targetDiv = document.querySelector("#mbl_menu");

  // Append the cloned menu to the target div
  targetDiv.appendChild(clonedMenu);
});

$(document).ready(function () {
  $("#mbl_menu #menu").mmenu({
    slidingSubmenus: false,
    navbar: { add: false },
  });
});


window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 50);
  let btn = document.querySelector(".scroll_to_top");

  if (window.scrollY > 300) {
    btn.style.display = "flex"; // Show the button
  } else {
    btn.style.display = "none"; // Hide the button
  }
});
