// Hamburger menu functionality ------------------------------------------

const openSideMenuBtn = document.querySelector(".hamburger-btn");
const closeSideMenuBtn = document.querySelector(".hamburger-menu-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");

openSideMenuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("toggle-hamburger-menu");
});

// carousel functionality ------------------------------------------
const items = document.querySelectorAll(".carousel-item");

let activeItem = 0;

const resetActiveItem = () => {
  if (activeItem <= items.length - 2) {
    activeItem++;
  } else {
    activeItem = 0;
  }

  console.log(activeItem);
};

setInterval(() => {
  items.forEach((item, index) => {
    item.classList.remove("active");

    if (index === activeItem) {
      item.classList.add("active");
    }
  });
  resetActiveItem();
}, 5000);
