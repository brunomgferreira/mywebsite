const main = document.querySelector("main");
const menu = document.querySelector("menu");

const menuNavUl = document.querySelector("menu nav ul");
const liItems = menuNavUl.querySelectorAll("li");

export const openButton = document.getElementById("menu-icon");
export const closeButton = document.getElementById("close-icon");

export const openMenu = () => {
  openButton.classList.remove("scale-appear");
  closeButton.classList.remove("scale-disappear");

  openButton.offsetWidth;
  closeButton.offsetWidth;

  openButton.classList.add("scale-disappear");
  closeButton.classList.add("scale-appear");

  liItems.forEach((li, index) => {
    li.style.animationDelay = `${0.15 * (index + 1)}s`;
    li.classList.remove("menu-nav-ul-li-disappear");
    li.offsetWidth;
    li.classList.add("menu-nav-ul-li-appear");
  });

  setTimeout(() => {
    menu.classList.remove("hidden");
    main.classList.add("hidden");

    openButton.classList.add("hidden");
    closeButton.classList.remove("hidden");
  }, 310);
};

export const closeMenu = () => {
  openButton.classList.remove("scale-disappear");
  closeButton.classList.remove("scale-appear");

  openButton.offsetWidth;
  closeButton.offsetWidth;

  openButton.classList.add("scale-appear");
  closeButton.classList.add("scale-disappear");

  liItems.forEach((li, index) => {
    li.style.animationDelay = `${0.05 * (liItems.length - index)}s`;
    li.classList.remove("menu-nav-ul-li-appear");
    li.offsetWidth;
    li.classList.add("menu-nav-ul-li-disappear");
  });

  setTimeout(() => {
    menu.classList.add("hidden");
    main.classList.remove("hidden");

    openButton.classList.remove("hidden");
    closeButton.classList.add("hidden");
  }, 410);
};
