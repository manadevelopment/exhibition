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

// * select city and state in form

if (
  document.querySelectorAll(".input-material input,.input-material textarea")
) {
  const inputs = document.querySelectorAll(
    ".input-material input,.input-material textarea"
  );

  for (const input of inputs) {
    input.addEventListener("input", () => {
      input.setAttribute("value", input.value);
    });
  }
}

// * mobile menu

const toggleBtn = document.querySelector(".toggle-menu");
const menuHeader = document.querySelector(".header-menu ");

toggleBtn.addEventListener("click", () => {
  menuHeader.classList.toggle("open");
});

// * collapsible

const collapsibles = document.querySelectorAll(".collapsible");

for (const collapsible of collapsibles) {
  collapsible
    .querySelector(".collapsible__button")
    .addEventListener("click", () => {
      collapsible.classList.toggle("open");
    });
}
