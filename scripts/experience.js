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
const mainQuoteAuthor = document.querySelector(
  "main > header > div > p:nth-of-type(2)"
);

const times = document.querySelectorAll(".time > h2");
const timeStamps = document.querySelectorAll(".time-stamp");
const timeStampsTitle = document.querySelectorAll(".time-stamp > h2");
const timeStampsInfo = document.querySelectorAll(".time-stamp > p");

const headerAppear = () => {
  mainTitle.classList.remove("slide-disappear");
  mainQuote.classList.remove("side-slide-disappear");
  mainQuoteAuthor.classList.remove("big-slide-disappear");

  mainTitle.offsetWidth;
  mainQuote.offsetWidth;
  mainQuoteAuthor.offsetWidth;

  mainTitle.classList.add("slide-appear");
  mainQuote.classList.add("side-slide-appear");
  mainQuoteAuthor.classList.add("big-slide-appear");
};

const headerDisappear = () => {
  mainTitle.classList.remove("slide-appear");
  mainQuote.classList.remove("side-slide-appear");
  mainQuoteAuthor.classList.remove("big-slide-appear");

  mainTitle.offsetWidth;
  mainQuote.offsetWidth;
  mainQuoteAuthor.offsetWidth;

  mainTitle.classList.add("slide-disappear");
  mainQuote.classList.add("side-slide-disappear");
  mainQuoteAuthor.classList.add("big-slide-disappear");
};

const timelineAppear = () => {
  times.forEach((h2, index) => {
    h2.style.setProperty("--opacity-animation-delay", `${0.3 * (index + 1)}s`);
    h2.classList.remove("opacity-disappear");
    h2.offsetWidth;
    h2.classList.add("opacity-appear");
  });

  timeStamps.forEach((div, index) => {
    div.style.setProperty("--border-animation-delay", `${0.3 * (index + 1)}s`);
    div.classList.remove("opacity-disappear");
    div.offsetWidth;
    div.classList.add("line-slide-appear");
  });

  timeStampsTitle.forEach((h2, index) => {
    h2.style.setProperty("--animation-delay", `${0.3 * (index + 1)}s`);
    h2.classList.remove("side-slide-disappear");
    h2.offsetWidth;
    h2.classList.add("side-slide-appear");
  });

  timeStampsInfo.forEach((p, index) => {
    p.style.setProperty("--animation-delay", `${0.3 * (index + 1) + 0.2}s`);
    p.classList.remove("big-slide-disappear");
    p.offsetWidth;
    p.classList.add("big-slide-appear");
  });
};

const timelineDisappear = () => {
  times.forEach((h2, index) => {
    h2.style.setProperty(
      "--opacity-animation-delay",
      `${0.05 * (times.length - index - 1)}s`
    );
    h2.classList.remove("opacity-appear");
    h2.offsetWidth;
    h2.classList.add("opacity-disappear");
  });

  timeStamps.forEach((div, index) => {
    div.style.setProperty(
      "--animation-delay",
      `${0.1 * (timeStamps.length - index)}s`
    );
    div.classList.remove("line-slide-appear");
    div.offsetWidth;
    div.classList.add("opacity-disappear");
  });

  timeStampsTitle.forEach((h2, index) => {
    h2.style.setProperty(
      "--animation-delay",
      `${0.1 * (timeStampsTitle - index - 1) + 0.1}s`
    );
    h2.classList.remove("side-slide-appear");
    h2.offsetWidth;
    h2.classList.add("side-slide-disappear");
  });

  timeStampsInfo.forEach((p, index) => {
    p.style.setProperty(
      "--animation-delay",
      `${0.1 * (timeStampsInfo.length - index - 1)}s`
    );
    p.classList.remove("big-slide-appear");
    p.offsetWidth;
    p.classList.add("big-slide-disappear");
  });
};

const openMain = () => {
  headerAppear();
  timelineAppear();
};

const closeMain = () => {
  timelineDisappear();
  headerDisappear();
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
