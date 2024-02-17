// Сворачивание элементов
let slides = document.querySelectorAll(".slider__item");
let showItem = document.querySelector(".slider__show");
let itemCondition = false;

function hideItems() {
  if (
    767 < document.documentElement.clientWidth &&
    1119 > document.documentElement.clientWidth
  ) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slider__item--hide");
    }
    for (let i = 6; i < slides.length; i++) {
      slides[i].classList.add("slider__item--hide");
    }
  } else if (1119 < document.documentElement.clientWidth) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slider__item--hide");
    }
    for (let i = 8; i < slides.length; i++) {
      slides[i].classList.add("slider__item--hide");
    }
  }
}

hideItems();

window.addEventListener("resize", function () {
  hideItems();
});

showItem.addEventListener("click", function () {
  if (
    767 < document.documentElement.clientWidth &&
    1119 > document.documentElement.clientWidth
  ) {
    for (let i = 6; i < slides.length; i++) {
      slides[i].classList.toggle("slider__item--hide");
    }
    itemCondition = !itemCondition;
  } else if (1119 < document.documentElement.clientWidth) {
    for (let i = 8; i < slides.length; i++) {
      slides[i].classList.toggle("slider__item--hide");
    }
    itemCondition = !itemCondition;
  }

  if (itemCondition) {
    showItem.textContent = "Скрыть";
    showItem.classList.add("btn-hide");
  } else {
    showItem.textContent = "Показать все";
    showItem.classList.remove("btn-hide");
  }
});
