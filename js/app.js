const homeHeroSlider = new Swiper(".home-hero-slider", {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".hero-slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-slider-button-next",
    prevEl: ".hero-slider-button-prev",
  },
});
