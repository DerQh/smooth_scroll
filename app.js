const section_OneEl = document.querySelector(".one");
const navbarEL = document.querySelector(".navbar");
const wrappperDivEl = document.querySelectorAll(".wrapper_div");

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
      console.log(entry);
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

scroll_naavbar();
observeDivs();
