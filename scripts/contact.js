import {
  openButton,
  closeButton,
  openMenu as openMenuFunction,
  closeMenu as closeMenuFunction,
} from "./menu.js";

const mainTitle = document.querySelector("main > header > div > h1");
const mainQuote = document.querySelector(
  "main > header > div > p:nth-of-type(1)"
);

const contactInfo = document.querySelectorAll(".info h2");
const contactLinks = document.querySelectorAll(".info a");

const headerAppear = () => {
  mainTitle.classList.remove("opacity-disappear");
  mainQuote.classList.remove("side-slide-disappear");

  mainTitle.offsetWidth;
  mainQuote.offsetWidth;

  mainTitle.classList.add("opacity-appear");
  mainQuote.classList.add("side-slide-appear");
};

const headerDisappear = () => {
  mainTitle.classList.remove("opacity-appear");
  mainQuote.classList.remove("side-slide-appear");

  mainTitle.offsetWidth;
  mainQuote.offsetWidth;

  mainTitle.classList.add("opacity-disappear");
  mainQuote.classList.add("side-slide-disappear");
};

const contactsAppear = () => {
  contactInfo.forEach((h2) => {
    h2.style.setProperty("--animation-delay", `${0.2}s`);
    h2.classList.remove("opacity-disappear");
    h2.offsetWidth;
    h2.classList.add("opacity-appear");
  });

  contactLinks.forEach((a) => {
    a.style.setProperty("--animation-delay", `${0.25}s`);
    a.classList.remove("slide-disappear");
    a.offsetWidth;
    a.classList.add("slide-appear");
  });
};

const contactsDisappear = () => {
  contactInfo.forEach((h2) => {
    h2.style.setProperty("--animation-delay", `${0.1}s`);
    h2.classList.remove("opacity-appear");
    h2.offsetWidth;
    h2.classList.add("opacity-disappear");
  });

  contactLinks.forEach((a) => {
    a.style.setProperty("--animation-delay", `${0.15}s`);
    a.classList.remove("slide-appear");
    a.offsetWidth;
    a.classList.add("slide-disappear");
  });
};

const openMain = () => {
  headerAppear();
  contactsAppear();
};

const closeMain = () => {
  contactsDisappear();

  setTimeout(() => {
    headerDisappear();
  }, 200);
};

const openMenu = () => {
  closeMain();

  openMenuFunction();
};

const closeMenu = () => {
  openMain();

  closeMenuFunction();
};

openButton.addEventListener("click", () => {
  openMenu();
});

closeButton.addEventListener("click", () => {
  closeMenu();
});

const headerName = document.getElementById("header-name");

headerName.addEventListener("click", () => {
  closeMenu();
  closeMain();
  setTimeout(() => {
    window.location.href = "/index";
  }, 310);
});

document.addEventListener("DOMContentLoaded", () => {
  openMain();
});
