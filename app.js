const section_OneEl = document.querySelector(".one");
const navbarEL = document.querySelector(".navbar");
const wrappperDivEl = document.querySelectorAll(".wrapper_div");
const image_divEl = document.querySelectorAll(".image_div");

const logoEl = document.querySelector(".logo");
const menuDropEl = document.querySelector(".drop_down");
const signUpDivEl = document.querySelector(".sign_up");
const bodyEl = document.querySelector("body");
const cancleBtnEl = document.querySelectorAll(".fa-xmark");
const createACCEl = document.querySelector(".create_account");
const creatAccDIvEl = document.querySelectorAll(".create_account_div");
const signUpCallEl = document.querySelector(".sign_in_call");

const menuDLogoEls = document.querySelectorAll(".menu_logo");
const menuDIvEl = document.querySelector(".minus_one");
const lensEl = document.querySelector(".fa-magnifying-glass");
const searchDivEl = document.querySelector(".search_div");
const loginEl = document.querySelector(".to_logIN");
const movieBtnEl = document.querySelector(".genre");

function scroll_naavbar() {
  window.onscroll = function () {
    if (window.pageYOffset >= navbarEL.offsetTop) {
      section_OneEl.classList.add("sticky");
    } else {
      section_OneEl.classList.remove("sticky");
    }
  };
}

function observeDivs() {
  // create observer//
  const callback_Func = function (entries, observer) {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        // console.log(entry);
        entry.target.classList.add("scroll");
        entry.target.classList.add("fadeinTop");
      } else {
        // entry.target.classList.add("scroll");
      }
    });
  };
  const observer = new IntersectionObserver(callback_Func, {
    threshold: 0.6,
    rootMargin: "60px",
  });

  // loop over enties//
  wrappperDivEl.forEach((div) => {
    observer.observe(div);
  });
}

function toggelMenu() {
  cancleBtnEl.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      signUpDivEl.classList.toggle("hidden");
      bodyEl.style.overflow = "scroll";
    });
  });

  createACCEl.addEventListener("click", function () {
    creatAccDIvEl.forEach((el) => {
      el.classList.toggle("hidden");
    });
  });

  signUpCallEl.addEventListener("click", function () {
    creatAccDIvEl.forEach((el) => {
      el.classList.toggle("hidden");
    });
  });

  loginEl.addEventListener("click", function () {
    signUpDivEl.classList.toggle("hidden");
    creatAccDIvEl.forEach((el) => {
      el.classList.remove("hidden");
    });
    creatAccDIvEl[0].classList.add("hidden");
    bodyEl.style.overflow = "hidden";
  });

  lensEl.addEventListener("click", () => {
    searchDivEl.classList.toggle("active_search");
  });
  logoEl.addEventListener("click", function () {
    menuDropEl.classList.toggle("show_menu");

    menuDIvEl.addEventListener("click", function () {
      if (menuDropEl.classList.contains("show_menu")) {
      }
    });
  });

  logoEl.addEventListener("mouseover", function () {
    menuDLogoEls.forEach((el) => {
      el.classList.toggle("aqua_backg");
    });
  });

  window.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");
  });
}

// movie hover//
wrappperDivEl.forEach((el) => {
  el.addEventListener("mouseover", function (event) {
    // console.log(el.childNodes[5]);
    el.childNodes[1].childNodes[1].classList.toggle("show_image");
    el.childNodes[3].childNodes[3].classList.toggle("color_aqua_border");
    el.childNodes[5].classList.toggle("color_aqua");
  });
  el.addEventListener("mouseout", function (event) {
    el.childNodes[1].childNodes[1].classList.toggle("show_image");
    el.childNodes[3].childNodes[3].classList.toggle("color_aqua_border");
    el.childNodes[5].classList.toggle("color_aqua");
  });
});

// Event Listiner//
toggelMenu();
scroll_naavbar();
observeDivs();
