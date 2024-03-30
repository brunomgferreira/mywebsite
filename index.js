const main = document.querySelector("main");
const menu = document.querySelector("menu");
const menuNavUl = document.querySelector("menu nav ul");
const openButton = document.getElementById("menu-icon");
const closeButton = document.getElementById("close-icon");

const quoteContainer = document.getElementsByClassName("quote-container")[0];
const mainNav = quoteContainer.nextElementSibling;

const openMenu = () => {
  openButton.classList.add("hidden");
  closeButton.classList.remove("hidden");

  quoteContainer.classList.remove("quote-appear");
  mainNav.classList.remove("main-nav-appear");

  quoteContainer.offsetWidth;
  mainNav.offsetWidth;

  quoteContainer.classList.add("quote-disappear");
  mainNav.classList.add("main-nav-disappear");

  menuNavUl.querySelectorAll("li").forEach((li) => {
    li.classList.remove("menu-nav-ul-li-disappear");
    li.offsetWidth;
    li.classList.add("menu-nav-ul-li-appear");
  });

  setTimeout(() => {
    menu.classList.remove("hidden");
    main.classList.add("hidden");
  }, 310);
};

const closeMenu = () => {
  openButton.classList.remove("hidden");
  closeButton.classList.add("hidden");

  quoteContainer.classList.remove("quote-disappear");
  mainNav.classList.remove("main-nav-disappear");

  quoteContainer.offsetWidth;
  mainNav.offsetWidth;

  quoteContainer.classList.add("quote-appear");
  mainNav.classList.add("main-nav-appear");

  menuNavUl.querySelectorAll("li").forEach((li) => {
    li.classList.remove("menu-nav-ul-li-appear");
    li.offsetWidth;
    li.classList.add("menu-nav-ul-li-disappear");
  });

  setTimeout(() => {
    menu.classList.add("hidden");
    main.classList.remove("hidden");
  }, 410);
};
