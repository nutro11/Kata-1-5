// Слайдер Swiper
const swiper = new Swiper(".slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 16,

  slidesPerView: "auto",

  on: {
    afterInit: function enableOnlyMobile(swiper) {
      if (document.documentElement.clientWidth > 767) {
        swiper.disable();
        swiper.el.classList.add("-non-slider");
      } else {
        swiper.enable();
        swiper.el.classList.remove("-non-slider");
      }
    },
    resize: function enableOnlyMobile(swiper) {
      if (document.documentElement.clientWidth > 767) {
        swiper.disable();
        swiper.el.classList.add("-non-slider");
      } else {
        swiper.enable();
        swiper.el.classList.remove("-non-slider");
      }
    },
  },
});
