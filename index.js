import { openButton, closeButton, openMenu, closeMenu } from "./menu.js";

const landingPage = (() => {
  const quoteContainer = document.getElementsByClassName("quote-container")[0];
  const mainNav = quoteContainer.nextElementSibling;

  const openMenuLandingPage = () => {
    quoteContainer.classList.remove("quote-appear");
    mainNav.classList.remove("main-nav-appear");

    quoteContainer.offsetWidth;
    mainNav.offsetWidth;

    quoteContainer.classList.add("quote-disappear");
    mainNav.classList.add("main-nav-disappear");

    openMenu();
  };

  const closeMenuLandingPage = () => {
    quoteContainer.classList.remove("quote-disappear");
    mainNav.classList.remove("main-nav-disappear");

    quoteContainer.offsetWidth;
    mainNav.offsetWidth;

    quoteContainer.classList.add("quote-appear");
    mainNav.classList.add("main-nav-appear");

    closeMenu();
  };

  return {
    openMenuLandingPage,
    closeMenuLandingPage,
  };
})();

openButton.addEventListener("click", () => {
  landingPage.openMenuLandingPage();
});

closeButton.addEventListener("click", () => {
  landingPage.closeMenuLandingPage();
});

const headerName = document.getElementById("header-name");

headerName.addEventListener("click", () => {
  landingPage.closeMenuLandingPage();
});
