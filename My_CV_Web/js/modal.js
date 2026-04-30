/* ============ PROJECT DATA ============
   All project information used by the modal popup.
*/

const projectsData = {
  movie: {
    title: "Movie Web App",
    description:
      "A feature-rich movie browsing application that lets users search, discover, and explore movies. The app integrates with a movie database to display trending films, detailed movie information, ratings, and trailers. Built with a focus on responsive design and smooth user experience.",
    tech: ["JavaScript", "HTML5", "CSS3", "REST API"],
    challenges:
      "Handling asynchronous API calls efficiently, implementing infinite scroll for movie listings, and creating a responsive grid layout that works across all devices were the main challenges tackled in this project.",
    github: "https://github.com/thomas-774/movieWeb",
    demo: null,
  },
  gpa: {
    title: "GPA Calculator",
    description:
      "An interactive GPA calculator designed for university students. Features include adding multiple semesters, courses with different credit hours, automatic GPA calculation, and a clean dashboard to track academic progress over time. Built using MVC architecture for clean code separation.",
    tech: ["JavaScript", "HTML5", "CSS3", "MVC Pattern"],
    challenges:
      "Implementing the MVC architecture in vanilla JavaScript, handling complex state management for multiple semesters, and ensuring accurate GPA calculations with different grading scales.",
    github: "https://github.com/thomas-774/GPA-CAL-V2",
    demo: "https://precious-bonbon-e4dec0.netlify.app/",
  },
  ecommerce: {
    title: "E-Commerce System (C++)",
    description:
      "A comprehensive console-based e-commerce system built in C++ that simulates a real online shopping experience. Features include user authentication, product catalog management, shopping cart functionality, order processing, and inventory management using object-oriented principles.",
    tech: ["C++", "OOP", "File I/O", "Data Structures"],
    challenges:
      "Designing a scalable class hierarchy for products and users, implementing persistent storage using file I/O, and managing complex relationships between orders, products, and user accounts.",
    github: "https://github.com/thomas-774",
    demo: null,
  },
  music: {
    title: "Music Management System",
    description:
      "A music library management system that allows users to organize their music collections efficiently. Features include creating and managing playlists, searching by artist or genre, sorting tracks, and maintaining a structured database of songs with metadata.",
    tech: ["C++", "OOP", "Data Structures", "Algorithms"],
    challenges:
      "Implementing efficient search and sort algorithms for large music collections, designing an intuitive menu-driven interface, and handling file-based data persistence for the music library.",
    github: "https://github.com/thomas-774",
    demo: null,
  },
};

/* ============ MODAL ============
   Opens/closes the project detail popup.
*/

const modalOverlay = document.getElementById("modalOverlay");

function openModal(projectKey) {
  const data = projectsData[projectKey];
  if (!data) return;

  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDesc").textContent = data.description;
  document.getElementById("modalChallenges").textContent = data.challenges;

  // Build tech tags
  const techContainer = document.getElementById("modalTech");
  techContainer.innerHTML = data.tech
    .map(t => `<span class="tech-tag">${t}</span>`)
    .join("");

  // Build action links
  const linksContainer = document.getElementById("modalLinks");
  let linksHTML = `<a href="${data.github}" target="_blank" class="link-github"><i class="fab fa-github"></i> GitHub Repo</a>`;
  if (data.demo) {
    linksHTML += `<a href="${data.demo}" target="_blank" class="btn-outline" style="border-color:var(--accent);color:var(--accent);"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
  }
  linksContainer.innerHTML = linksHTML;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Close when clicking the dark overlay background
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Close with the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
