// ACTIVE NAV ON SCROLL

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 150;
    let sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

// ==========================
// DARK / LIGHT MODE

let themeToggleBtn = document.getElementById("theme-toggle-button");

// LOAD SAVED THEME

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");

  themeToggleBtn.setAttribute("aria-pressed", "true");
} else {
  document.documentElement.classList.remove("dark");

  themeToggleBtn.setAttribute("aria-pressed", "false");
}

// TOGGLE THEME

themeToggleBtn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");

  // check current mode
  let isDark = document.documentElement.classList.contains("dark");

  // save in localStorage
  if (isDark) {
    localStorage.setItem("theme", "dark");

    themeToggleBtn.setAttribute("aria-pressed", "true");
  } else {
    localStorage.setItem("theme", "light");

    themeToggleBtn.setAttribute("aria-pressed", "false");
  }
});

// ==========================
// PORTFOLIO FILTER TABS
const style = document.createElement("style");

style.innerHTML = `
  .portfolio-filter.active {
    background: #6366f1;
    color: white;
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
    transform: translateY(-2px);
  }

  .portfolio-item {
    transition: all 0.4s ease;
  }

  .portfolio-item.hide {
    opacity: 0;
    transform: scale(0.9);
    pointer-events: none;
  }
`;

document.head.appendChild(style);

const filters = document.querySelectorAll(".portfolio-filter");
const items = document.querySelectorAll(".portfolio-item");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });

    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");

    const filter = btn.dataset.filter;

    items.forEach((item) => {
      const category = item.dataset.category;

      if (filter === "all" || filter === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// ==========================
// TESTIMONIAL CAROUSEL

let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t) => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

function nextTestimonial() {
  index++;

  if (index >= testimonials.length) {
    index = 0;
  }

  showTestimonial(index);
}

setInterval(nextTestimonial, 3000);

// ==========================
// SETTINGS SIDEBAR
let gearIcon = document.querySelector(".gear-icon");
let settingsBox = document.querySelector(".settings-box");

gearIcon.addEventListener("click", function () {
  settingsBox.classList.toggle("open");
});

// ==========================
// CHANGE COLORS
let colors = document.querySelectorAll(".color-item");

colors.forEach((color) => {
  color.addEventListener("click", function () {
    let newColor = color.dataset.color;

    document.documentElement.style.setProperty("--main-color", newColor);

    localStorage.setItem("color", newColor);
  });
});

// load saved color
if (localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color"),
  );
}

// ==========================
// SCROLL TO TOP BUTTON
let topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
