if (document.querySelector(".home-hero-slider")) {
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
}

const inputs = document.querySelectorAll(
  ".input-material input,.input-material textarea"
);

for (const input of inputs) {
  input.addEventListener("input", () => {
    input.setAttribute("value", input.value);
  });
}
