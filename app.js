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

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;

    // Close others
    document.querySelectorAll(".faq-item").forEach((el) => {
      if (el !== parent) {
        el.classList.remove("active");
        el.querySelector(".faq-toggle").innerText = "+";
      }
    });

    // Toggle current
    parent.classList.toggle("active");

    const toggle = item.querySelector(".faq-toggle");
    toggle.innerText = parent.classList.contains("active") ? "−" : "+";
  });
});