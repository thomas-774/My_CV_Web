/* ============ NAVBAR ============
   Handles:
   - Shrink-on-scroll visual effect
   - Hamburger mobile menu toggle
   - Active nav link highlighting based on scroll position
*/

const navbar   = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

// Shrink navbar on scroll
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  updateActiveLink();
});

// Mobile hamburger toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Close mobile menu when a nav link is clicked
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

// Highlight the active section link
function updateActiveLink() {
  const sections = document.querySelectorAll("section");
  const links    = navLinks.querySelectorAll("a");
  let current    = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}
