const btnStart = document.querySelector(".cat-change__btn--start");
const btnEnd = document.querySelector(".cat-change__btn--end");
const containerBefore = document.querySelector(".slider__container--before");
const handle = document.querySelector(".cat-change__controller-handle");
const mapFrame = document.querySelector(".location__map-frame");
const mapPic = document.querySelector(".location__map-pic-wrapper");

const menuList = document.querySelector(".main-navigation__list");
const toggler = document.querySelector(".main-navigation__toggler");

const showAll = document.querySelector(".product-card-last__order");

mapFrame.classList.remove("visually-hidden");
mapPic.classList.add("visually-hidden");

toggler.classList.add("main-navigation__toggler--open");
toggler.classList.remove("no-toggler");
menuList.classList.add("main-navigation__list--hide");

toggler.addEventListener("click", function () {
  menuList.classList.toggle("main-navigation__list--hide");
  menuList.classList.toggle("main-navigation__list--show");
  toggler.classList.toggle("main-navigation__toggler--open");
  toggler.classList.toggle("main-navigation__toggler--close");
});

if (btnStart) {
  btnStart.addEventListener("click", function () {
    containerBefore.classList.add("slider__container--state-before");
    containerBefore.classList.remove("slider__container--state-after");
    handle.classList.add("cat-change__controller-handle--before");
    handle.classList.remove("cat-change__controller-handle--after");

    containerBefore.classList.remove("cat-change__controller-handle--middle");
    containerBefore.classList.remove("slider__container--state-middle");
  });

  btnEnd.addEventListener("click", function () {
    containerBefore.classList.remove("slider__container--state-before");
    containerBefore.classList.add("slider__container--state-after");
    handle.classList.remove("cat-change__controller-handle--before");
    handle.classList.add("cat-change__controller-handle--after");

    containerBefore.classList.remove("cat-change__controller-handle--middle");
    containerBefore.classList.remove("slider__container--state-middle");
  });
}
