function input_display() {
  if (document.getElementById("input_search").style.visibility == "hidden") {
    document.getElementById("input_search").style.visibility = "visible";
  } else {
    document.getElementById("input_search").style.visibility = "hidden";
  }
}

const navSlide = () => {
  const slide = document.querySelector(".nav-shortcut");
  const navmobi = document.querySelector(".nav-mobi");
  const header = document.querySelector(".header");
  const overlay = document.querySelector("#overlay");

  slide.addEventListener("click", () => {
    header.classList.add("header-remove");
    header.classList.remove("header-add");
    setTimeout(function () {
      overlay.classList.remove("overlay-out");
      overlay.classList.add("overlay-in");
    }, 500);
    setTimeout(function () {
      navmobi.classList.remove("nav-deactive");
      navmobi.classList.add("nav-active");
    }, 1000);
  });
};

const navClose = () => {
  const close = document.querySelector(".nav-close-icon");
  const navmobi = document.querySelector(".nav-mobi");
  const header = document.querySelector(".header");
  const overlay = document.querySelector("#overlay");

  close.addEventListener("click", () => {
    navmobi.classList.remove("nav-active");
    navmobi.classList.add("nav-deactive");
    setTimeout(function () {
      overlay.classList.remove("overlay-in");
      overlay.classList.add("overlay-out");
    }, 500);
    setTimeout(function () {
      header.classList.remove("header-remove");
      header.classList.add("header-add");
    }, 800);
  });
};
const overlayDefault = () => {
    const overlay = document.querySelector("#overlay");

    overlay.classList.add("overlay-out");
}
overlayDefault();
navSlide();
navClose();