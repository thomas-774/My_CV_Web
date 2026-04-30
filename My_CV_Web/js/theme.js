/* ============ THEME TOGGLE ============
   Switches between dark and light mode.
   Persists the user's preference in localStorage.
*/

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);
themeToggle.textContent = savedTheme === "dark" ? "🌙" : "☀️";

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeToggle.textContent = next === "dark" ? "🌙" : "☀️";
});
