// Navbar background functionality ---------------------------------------
const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".desktop-nav-link");

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

// header.addEventListener("click", (event) => {
//   console.log(navLinks);
//   navLinks.forEach(link => link.classList.remove('active-nav-link'));

//   event.target.classList.add('active-nav-link');
// })

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

// Testimonials functionality ------------------------------------------

// Testimonials data that will be used to mock an an API GET request;
const testimonialsData = [
  {
    title: "A DREAM!",
    body: "Working with Martina was such an easy and fun experience. She has this unique ability to make her clients feel at ease and comfortable. On top of that, her photos just speak for themselves. Thank you! ",
    author: "Sue Linden",
  },
  {
    title: "No regrets.",
    body: "Wow wow! I can’t express in words how incredible the three day celebration was all thanks to you and your teams hard work! Thank you sooooo much! ",
    author: "Jake & Marta Smith",
  },
  {
    title: "We’ll treasure our photos for a lifetime.",
    body: "Thank you team for giving me the best day of my life. Not only did I marry the love of my life but I also got to do it in an unforgettable setting & beautiful venue. The pictures are priceless. Thank you for capturing our story. ",
    author: "Fran & Zak Kennings",
  },
  {
    title: "The best experience! No Regrets.",
    body: "My wife and I were fortunate enough to have Martina and her team as our photographers for our wedding. They took great photos of the entire day and made us feel very comfortable. Can’t recommend them enough, one of the best decisions we made for our wedding!",
    author: "Angela Hemsworth",
  },
];

const slider = document.querySelector(".slider");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
let index = 1;

// Function that mocks the API GET request
function getTestimonials(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testimonialsData);
    }, delay);
  });
}

// calling the function on page mount;
document.addEventListener("DOMContentLoaded", async () => {
  const testimonials = await getTestimonials(1000);
  appendTestimonialsToParent(testimonials);
  buildCarousel();
});

// the testimonial card component
function createTestimonialsCard(testimonial) {
  return `
      <article class="slide">
        <h3>${testimonial.title}</h3>
        <p class="slide-body">
          ${testimonial.body}
        </p>
        <p class="slide-author">${testimonial.author}</p>
    </article>
  `;
}

// add each card to the parent with className slider
function appendTestimonialsToParent(testimonials) {
  testimonials.forEach((testimonial) => {
    const testimonialCard = createTestimonialsCard(testimonial);
    slider.innerHTML += testimonialCard;
  });
}

function buildCarousel() {
  const slides = document.querySelectorAll(".slide");
  const width = slides[0].clientWidth;

  rightBtn.addEventListener("click", () => {
    index++;
    slider.style.transform = "translateX(" + -index * width + "px)";
    if (index === slides.length - 1) {
      rightBtn.classList.add("disable");
    } else {
      leftBtn.classList.remove("disable");
    }
  });

  leftBtn.addEventListener("click", () => {
    if (index === 0) {
      leftBtn.classList.add("disable");
      return;
    } else {
      rightBtn.classList.remove("disable");
    }

    index--;
    slider.style.transform = "translateX(" + -index * width + "px)";
  });
}

// Scroll up functionality ------------------------------------------

const scrollUpBtn = document.querySelector(".scroll-up");

document.addEventListener("scroll", handleScrollBtn);

function handleScrollBtn() {
  let scrollableHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let goldenRatio = 0.3;

  if (document.documentElement.scrollTop / scrollableHeight > goldenRatio) {
    scrollUpBtn.style.display = "grid";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form functionality ------------------------------------------

const form = document.querySelector("form");
const firstNameInput = document.getElementById("firstName");
const emailInput = document.getElementById("email");
const dialog = document.querySelector("dialog");
const backdrop = document.getElementById("backdrop");

let firstName = "";
let email = "";

firstNameInput.addEventListener("change", () => {
  firstName = firstNameInput.value;
});

emailInput.addEventListener("change", () => {
  email = emailInput.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  dialog.style.display = "flex";
  backdrop.style.display = "block";
  const message = `
    <span>Hi ${firstName}</span>
    <span>Thank you so much for trying out the functionality,</span>
    <span>and for checking out my website</span>
  `;
  // append message
  dialog.innerHTML += message;
  dialog.classList.add("open-dialog");
  backdrop.classList.add("open-backdrop");
  // Clear the input fields;
  firstNameInput.value = "";
  emailInput.value = "";

  setTimeout(() => {
    dialog.style.display = "none";
    backdrop.style.display = "none";
  }, 3000);
});
