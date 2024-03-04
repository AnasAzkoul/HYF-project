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

const testimonials = [
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

function getTestimonials(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testimonials);
    }, delay);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const testimonials = await getTestimonials();
  console.log(testimonials);
});
