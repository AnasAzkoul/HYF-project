// Navbar background functionality ---------------------------------------
const header = document.querySelector("header");

function handleScroll() {
  const scrollTop = window.scrollY;

  if (scrollTop === 0) {
    header.classList.remove("header-scroll");
  }

  if (scrollTop > 0) {
    header.classList.add("header-scroll");
  }
}

document.addEventListener("scroll", handleScroll);
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

// carousel functionality for recent work ------------------------------------------

const carousel = document.querySelector(".recent-work-carousel");
const btnLeft = document.getElementById("left"); 

let isDragStart = false;

const dragStart = (e) => {
  e.preventDefault();
  isDragStart = true; 
};

const dragging = (e) => {
  // if (!isDragStart) return;
  // e.preventDefault();
  // carousel.scrollLeft = e.pageX;
  // console.log(typeof carousel.scrollLeft)
};

carousel.addEventListener("mousemove", dragging);
btnLeft.addEventListener("click", (e) => {
  carousel.scrollLeft = e.pageX; 
  console.log('click'); 
})