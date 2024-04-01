import {
  openButton,
  closeButton,
  openMenu as openMenuFunction,
  closeMenu as closeMenuFunction,
} from "./menu.js";

const titleContainer = document.querySelector(".title-container");
const projectSkills = document.getElementById("project-skills");
const pojectImageContainer = document.getElementById("poject-image-container");
const textContainer = document.querySelector(".text-container");

const openMain = () => {
  titleContainer.classList.remove("slide-disappear");
  projectSkills.classList.remove("big-slide-disappear");
  pojectImageContainer.classList.remove("opacity-disappear");
  textContainer.classList.remove("big-slide-disappear");

  titleContainer.offsetWidth;
  projectSkills.offsetWidth;
  pojectImageContainer.offsetWidth;
  textContainer.offsetWidth;

  titleContainer.classList.add("slide-appear");
  projectSkills.classList.add("big-slide-appear");
  pojectImageContainer.classList.add("opacity-appear");
  textContainer.classList.add("big-slide-appear");
};

const closeMain = () => {
  titleContainer.classList.remove("slide-appear");
  projectSkills.classList.remove("big-slide-appear");
  pojectImageContainer.classList.remove("opacity-appear");
  textContainer.classList.remove("big-slide-appear");

  titleContainer.offsetWidth;
  projectSkills.offsetWidth;
  pojectImageContainer.offsetWidth;
  textContainer.offsetWidth;

  titleContainer.classList.add("slide-disappear");
  projectSkills.classList.add("big-slide-disappear");
  pojectImageContainer.classList.add("opacity-disappear");
  textContainer.classList.add("big-slide-disappear");
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
    window.location.href = "/index.html";
  }, 310);
});

document.addEventListener("DOMContentLoaded", () => {
  openMain();
});
