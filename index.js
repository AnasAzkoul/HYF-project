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

// Testimonials functionality ------------------------------------------

// Testimonials data that will be used to mock an an API GET request;
const testimonialsData = [
  {
    title: "Working with Magnolia was a DREAM.",
    body: "Organic 90’s meditation a enamel pin, pink bespoke trust fund coloring. Book tbh hoodie, salad subway tile vegan a tattoo a garden thrift, tousled. Gluten-free man bun yes plz swag JOMO keytar.",
    author: "John Doe",
  },
  {
    title: "You won’t regret working with Magnolia.",
    body: "Edison bulb cronut organic art party dreamcatcher and praxis narwhal shabby chic kale chips cray chillwave cliche and organic 90’s kombucha. Gluten-free man bun yes plz swag JOMO keytar neutral milk hotel.",
    author: "Mary Doe",
  },
  {
    title: "We’ll treasure our photos for a lifetime.",
    body: "I’m baby artisan disrupt post-ironic iPhone brunch. Yes plz sriracha pink a thundercats messenger bag. Glossier succulents a authentic poutine. Gluten-free man bun yes plz swag JOMO keytar neutral milk hotel.",
    author: "Steven Doe",
  },
  {
    title: "The best experience I have ever had.",
    body: "Organic 90’s meditation a enamel pin, pink bespoke trust fund coloring. Book tbh hoodie, salad subway tile vegan a tattoo a garden thrift, tousled. Gluten-free man bun yes plz swag JOMO keytar.",
    author: "Angela Smith",
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
      return 
    } else {
      rightBtn.classList.remove("disable");
    }

    index--;
    slider.style.transform = "translateX(" + -index * width + "px)";

  });
}
