const btnStart = document.querySelector(".cat-change__btn--start");
const btnEnd = document.querySelector(".cat-change__btn--end");
const containerBefore = document.querySelector(".slider__container--before");
const handle = document.querySelector(".cat-change__controller-handle");
const mapFrame = document.querySelector(".location__map-frame");
const mapPic = document.querySelector(".location__map-pic-wrapper");

const menuList = document.querySelector(".main-navigation__list");
const toggler = document.querySelector(".main-navigation__toggler");

mapFrame.classList.remove("visually-hidden");
mapPic.classList.add("visually-hidden");


if (window.innerWidth < 768) {
  toggler.classList.add("main-navigation__toggler--open");
  toggler.classList.remove("visually-hidden");
  menuList.classList.add("visually-hidden");

  toggler.addEventListener("click", function () {
    menuList.classList.toggle("visually-hidden");
    menuList.classList.toggle("main-navigation__list--show");
    toggler.classList.toggle("main-navigation__toggler--open");
    toggler.classList.toggle("main-navigation__toggler--close");
  });
}
else {
  if (!containerBefore.classList.contains("cat-change__controller-handle--middle")) {
    containerBefore.classList.add("cat-change__controller-handle--middle");
  }

  if (!containerBefore.classList.contains("slider__container--state-middle")) {
    containerBefore.classList.add("slider__container--state-middle");
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  window.onresize = function () {
    if (window.innerWidth >= 768) {
      toggler.classList.remove("main-navigation__toggler--open");
      toggler.classList.remove("main-navigation__toggler--close");
      toggler.classList.add("visually-hidden");
      menuList.classList.remove("visually-hidden");
      menuList.classList.remove("main-navigation__list--show");

      if (!containerBefore.classList.contains("cat-change__controller-handle--middle")) {
        containerBefore.classList.add("cat-change__controller-handle--middle");
      }

      if (!containerBefore.classList.contains("slider__container--state-middle")) {
        containerBefore.classList.add("slider__container--state-middle");
      }
    }
    else {
      toggler.classList.add("main-navigation__toggler--open");
      toggler.classList.remove("visually-hidden");
      menuList.classList.add("visually-hidden");

      toggler.addEventListener("click", function () {
        menuList.classList.toggle("visually-hidden");
        menuList.classList.toggle("main-navigation__list--show");
        toggler.classList.toggle("main-navigation__toggler--open");
        toggler.classList.toggle("main-navigation__toggler--close");
      });

      if (containerBefore.classList.contains("cat-change__controller-handle--middle")) {
        containerBefore.classList.remove("cat-change__controller-handle--middle");
      }

      if (containerBefore.classList.contains("slider__container--state-middle")) {
        containerBefore.classList.remove("slider__container--state-middle");
      }
    }
  };
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
