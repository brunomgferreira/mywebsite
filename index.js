import {
  openButton,
  closeButton,
  openMenu as openMenuFunction,
  closeMenu as closeMenuFunction,
} from "./menu.js";

const landingPage = (() => {
  const quoteContainer = document.getElementsByClassName("quote-container")[0];
  const mainNav = quoteContainer.nextElementSibling;

  const openMenu = () => {
    quoteContainer.classList.remove("quote-appear");
    mainNav.classList.remove("main-nav-appear");

    quoteContainer.offsetWidth;
    mainNav.offsetWidth;

    quoteContainer.classList.add("quote-disappear");
    mainNav.classList.add("main-nav-disappear");

    openMenuFunction();
  };

  const closeMenu = () => {
    quoteContainer.classList.remove("quote-disappear");
    mainNav.classList.remove("main-nav-disappear");

    quoteContainer.offsetWidth;
    mainNav.offsetWidth;

    quoteContainer.classList.add("quote-appear");
    mainNav.classList.add("main-nav-appear");

    closeMenuFunction();
  };

  return {
    openMenu,
    closeMenu,
  };
})();

openButton.addEventListener("click", () => {
  landingPage.openMenu();
});

closeButton.addEventListener("click", () => {
  landingPage.closeMenu();
});

const headerName = document.getElementById("header-name");

headerName.addEventListener("click", () => {
  landingPage.closeMenu();
});
