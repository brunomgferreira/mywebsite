import {
  openButton,
  closeButton,
  openMenu as openMenuFunction,
  closeMenu as closeMenuFunction,
} from "./menu.js";

const aboutTitle = document.getElementById("about-title");
const aboutText = document.getElementById("about-text");
const imageContainer = document.getElementById("image-container");
const image = imageContainer.querySelector("img");

const openMain = () => {
  aboutTitle.classList.remove("opacity-disappear");
  aboutText.classList.remove("slide-disappear");
  imageContainer.classList.remove("opacity-disappear");

  aboutTitle.offsetWidth;
  aboutText.offsetWidth;
  imageContainer.offsetWidth;

  aboutTitle.classList.add("opacity-appear");
  aboutText.classList.add("slide-appear");
  imageContainer.classList.add("opacity-appear");
};

const closeMain = () => {
  aboutTitle.classList.remove("opacity-appear");
  aboutText.classList.remove("slide-appear");
  imageContainer.classList.remove("opacity-appear");

  aboutTitle.offsetWidth;
  aboutText.offsetWidth;
  imageContainer.offsetWidth;

  aboutTitle.classList.add("opacity-disappear");
  aboutText.classList.add("slide-disappear");
  imageContainer.classList.add("opacity-disappear");
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
    window.location.href = "/mywebsite/index";
  }, 310);
});

document.addEventListener("DOMContentLoaded", () => {
  openMain();
});
