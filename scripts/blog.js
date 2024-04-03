import {
  openButton,
  closeButton,
  openMenu as openMenuFunction,
  closeMenu as closeMenuFunction,
} from "./menu.js";

const main = document.querySelector("body > main");
const mainTitle = document.querySelector("main > header > div > h1");
const mainQuote = document.querySelector(
  "main > header > div > p:nth-of-type(1)"
);

let articles = document.querySelectorAll("article");
let articlesText = document.querySelectorAll("article > div > p");

const posts = [
  {
    title: "FastAI - Chapter 1 & 2",
    date: "01/04/2024",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure delectus eum, nihil deleniti dolorum, a reiciendis asperiores sint omnis ipsa ad necessitatibus facere? Magnam architecto cupiditate id vero totam eum!",
  },
  {
    title: "FastAI - Chapter 1 & 2",
    date: "01/04/2024",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure delectus eum, nihil deleniti dolorum, a reiciendis asperiores sint omnis ipsa ad necessitatibus facere? Magnam architecto cupiditate id vero totam eum!",
  },
];

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

const articlesAppear = () => {
  articles.forEach((article) => {
    article.style.setProperty("--animation-delay", `${0.2}s`);
    article.classList.remove("opacity-disappear");
    article.offsetWidth;
    article.classList.add("opacity-appear");
  });

  articlesText.forEach((p) => {
    p.style.setProperty("--animation-delay", `${0.2}s`);
    p.classList.remove("slide-disappear");
    p.offsetWidth;
    p.classList.add("slide-appear");
  });
};

const articlesDisappear = () => {
  articles.forEach((article) => {
    article.style.setProperty("--animation-delay", `${0.1}s`);
    article.classList.remove("opacity-appear");
    article.offsetWidth;
    article.classList.add("opacity-disappear");
  });

  articlesText.forEach((p) => {
    p.style.setProperty("--animation-delay", `${0}s`);
    p.classList.remove("slide-appear");
    p.offsetWidth;
    p.classList.add("slide-disappear");
  });
};

const openMain = () => {
  headerAppear();
  articlesAppear();
};

const closeMain = () => {
  articlesDisappear();

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

const createPostElement = (post) => {
  const article = document.createElement("article");
  article.innerHTML = `
    <header>
        <h2>${post.title}</h2>
        <p>${post.date}</p>
    </header>
    <div>
        <p>${post.info}</p>
    </div>
  `;
  return article;
};

const renderPosts = () => {
  posts.forEach((post) => {
    const postElement = createPostElement(post);
    main.appendChild(postElement);
  });

  articles = document.querySelectorAll("article");
  articlesText = document.querySelectorAll("article > div > p");
};

const headerName = document.getElementById("header-name");

headerName.addEventListener("click", () => {
  closeMenu();
  closeMain();
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 310);
});

document.addEventListener("DOMContentLoaded", () => {
  renderPosts();
  openMain();
});
