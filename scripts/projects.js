import {
  openButton,
  closeButton,
  openMenu as openMenuFunction,
  closeMenu as closeMenuFunction,
} from "./menu.js";

const projectsHeader = document.querySelector(
  "main > div:last-child > div:first-child"
);

const projectsTitle = document.getElementById("projects-title");
const projectsNumber = document.getElementById("projects-number");

const projects = document.getElementById("projects");
const projectList = projects.querySelectorAll("li");

const projectDisplay = document.querySelector(
  "#project-display-container > div"
);
const projectContentContainer = document.getElementById(
  "project-content-container"
);

let selectedProjectLi = null;
let selectedIndex = -1;

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

const openProjectDisplay = (index = -1) => {
  if (index != -1) {
    projectDisplay.classList.remove("opacity-disappear");
    projectContentContainer.classList.remove("project-skills-disappear");

    projectDisplay.offsetWidth;
    projectContentContainer.offsetWidth;

    projectDisplay.classList.add("opacity-appear");
    projectContentContainer.classList.add("project-skills-appear");

    setTimeout(() => {
      projectDisplay.style.display = "flex";
    }, 10);
  }
};

const selectProject = (li, index) => {
  if (index == selectedIndex) return;
  else {
    if (selectedProjectLi != null)
      selectedProjectLi.textContent =
        selectedProjectLi.textContent.substring(1);
    selectedProjectLi = li;
    selectedIndex = index;
    if (selectedProjectLi != null)
      selectedProjectLi.textContent = `.${li.textContent}`;
  }
};

const closeProjectDisplay = () => {
  projectDisplay.classList.remove("opacity-appear");
  projectContentContainer.classList.remove("project-skills-appear");

  projectDisplay.offsetWidth;
  projectContentContainer.offsetWidth;

  projectDisplay.classList.add("opacity-disappear");
  projectContentContainer.classList.add("project-skills-disappear");

  setTimeout(() => {
    projectDisplay.style.display = "none";
  }, 310);
};

const openMain = () => {
  projectsHeaderAppear();

  openProjectDisplay(selectedIndex);

  projectListAppear();
};

const closeMain = () => {
  projectListDisappear();

  closeProjectDisplay();

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

const projectsHref = [
  "done.html",
  "battleship.html",
  "mywebsite.html",
  "universityProjects.hmtl",
  "carRestoration.html",
];

projectList.forEach((li, index) => {
  li.addEventListener("click", () => {
    closeMain();
    setTimeout(() => {
      window.location.href = `./projectList/${projectsHref[index]}`;
    }, 300);
  });
  li.addEventListener("mouseover", () => {
    closeProjectDisplay();
    selectProject(li, index);
    setTimeout(() => {
      openProjectDisplay(index);
    }, 300);
  });
  li.addEventListener("mouseout", () => {
    selectProject(null, -1);
    closeProjectDisplay();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  openMain();
});
