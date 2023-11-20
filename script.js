const navbar = document.querySelector(".navbar");
const navbar__logo = document.querySelector(".navbar__logo");

window.addEventListener("scroll", () => {
  let isScrolled = window.scrollY > 75;
  setTimeout(() => {
    navbar.classList.toggle("scrolled", isScrolled);
    navbar__logo.classList.toggle("scrolled", isScrolled);
  }, 50);
});

const hero__image = document.querySelector(".hero__background--image");
setTimeout(() => {
  hero__image.classList.add("loadDelay");
}, 250);

const memberships__left_bg = document.querySelector(".memberships__left--bg");
const memberships__left = document.querySelector(".memberships__left");
const memberships__left_text = document.querySelector(
  ".memberships__left--text_container"
);

setTimeout(() => {
  memberships__left.addEventListener("mouseenter", () => {
    memberships__left_bg.classList.add("mouseover");
    memberships__left_text.classList.add("mouseover");
  });
}, 200);

memberships__left.addEventListener("mouseleave", () => {
  memberships__left_bg.classList.remove("mouseover");
  memberships__left_text.classList.remove("mouseover");
});

const memberships__right_bg = document.querySelector(".memberships__right--bg");
const memberships__right = document.querySelector(".memberships__right");
const memberships__right_text = document.querySelector(
  ".memberships__right--text_container"
);

setTimeout(() => {
  memberships__right.addEventListener("mouseenter", () => {
    memberships__right_bg.classList.add("mouseover");
    memberships__right_text.classList.add("mouseover");
  });
}, 200);

memberships__right.addEventListener("mouseleave", () => {
  memberships__right_bg.classList.remove("mouseover");
  memberships__right_text.classList.remove("mouseover");
});
