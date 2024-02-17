// Слайдер Swiper
const swiper = new Swiper(".slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 16,

  slidesPerView: "auto",

  on: {
    resize: function enableOnlyMobile(swiper) {
      if (767 < document.documentElement.clientWidth) {
        swiper.disable();
        swiper.el.classList.add("-non-slider");
      } else {
        swiper.enable();
        swiper.el.classList.remove("-non-slider");
      }
    },
  },
});
