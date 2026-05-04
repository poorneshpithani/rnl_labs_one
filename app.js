AOS.init({
  duration: 900,
  once: true,
  offset: 80
});

new Swiper(".reviewSwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  speed: 700,

  autoplay: {
    delay: 2600,
    disableOnInteraction: false
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});