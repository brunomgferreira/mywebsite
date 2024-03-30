import {
  openButton,
  closeButton,
  openMenu as openMenuFunction,
  closeMenu as closeMenuFunction,
} from "./menu.js";

const projectsPage = (() => {
  const projectsHeader = document.querySelector(
    "main div:last-child div:first-child"
  );

  const projectsTitle = document.getElementById("projects-title");
  const projectsNumber = document.getElementById("projects-number");

  const projects = document.getElementById("projects");
  const projectList = projects.querySelectorAll("li");

  const projectDisplay = document.getElementById("project-display");

  const projectsHeaderAppear = () => {
    projectsHeader.classList.remove("border-slide-disappear");
    projectsTitle.classList.remove("slide-disappear");
    projectsNumber.classList.remove("slide-disappear");

    projectsHeader.offsetWidth;
    projectsTitle.offsetWidth;
    projectsNumber.offsetWidth;

    projectsHeader.classList.add("border-slide-appear");
    projectsTitle.classList.add("slide-appear");
    projectsNumber.classList.add("slide-appear");
  };

  const projectsHeaderDisappear = () => {
    projectsHeader.classList.remove("border-slide-appear");
    projectsTitle.classList.remove("slide-appear");
    projectsNumber.classList.remove("slide-appear");

    projectsHeader.offsetWidth;
    projectsTitle.offsetWidth;
    projectsNumber.offsetWidth;

    projectsHeader.classList.add("border-slide-disappear");
    projectsTitle.classList.add("slide-disappear");
    projectsNumber.classList.add("slide-disappear");
  };

  const projectListAppear = () => {
    projectList.forEach((li, index) => {
      li.style.animationDelay = `${0.1 * (index + 1)}s`;
      li.classList.remove("slide-disappear");
      li.offsetWidth;
      li.classList.add("slide-appear");
    });
  };

  const projectListDisappear = () => {
    projectList.forEach((li, index) => {
      li.style.animationDelay = `${0.05 * (projectList.length - index - 1)}s`;
      li.classList.remove("slide-appear");
      li.offsetWidth;
      li.classList.add("slide-disappear");
    });
  };

  const projectDisplayAppear = () => {
    projectDisplay.classList.remove("opacity-disappear");

    projectDisplay.offsetWidth;

    projectDisplay.classList.add("opacity-appear");
  };

  const projectDisplayDisappear = () => {
    projectDisplay.classList.remove("opacity-appear");

    projectDisplay.offsetWidth;

    projectDisplay.classList.add("opacity-disappear");
  };

  const openMain = () => {
    projectsHeaderAppear();

    projectDisplayAppear();

    projectListAppear();
  };

  const closeMain = () => {
    projectListDisappear();

    projectDisplayDisappear();

    setTimeout(() => {
      projectsHeaderDisappear();
    }, 100);
  };

  const openMenu = () => {
    closeMain();

    openMenuFunction();
  };

  const closeMenu = () => {
    openMain();

    closeMenuFunction();
  };

  return {
    openMenu,
    closeMenu,
    openMain,
    closeMain,
  };
})();

openButton.addEventListener("click", () => {
  projectsPage.openMenu();
});

closeButton.addEventListener("click", () => {
  projectsPage.closeMenu();
});

const headerName = document.getElementById("header-name");

headerName.addEventListener("click", () => {
  projectsPage.closeMenu();
  projectsPage.closeMain();
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 310);
});

document.addEventListener("DOMContentLoaded", () => {
  projectsPage.openMain();
});
