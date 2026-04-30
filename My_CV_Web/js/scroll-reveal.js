/* ============ SCROLL REVEAL ============
   Animates elements with the .reveal class every time they
   enter the viewport — not just the first time.

   HOW IT WORKS:
   - When an element scrolls INTO view  → add "visible" (fade/slide in)
   - When an element scrolls OUT of view → remove "visible" (reset)
   - Next time it scrolls in again       → re-animates
*/

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element has entered the viewport → animate it in
      entry.target.classList.add("visible");
    } else {
      // Element has left the viewport → reset so it can re-animate
      entry.target.classList.remove("visible");
    }
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px"
});

// Observe every element marked for reveal
document.querySelectorAll(".reveal").forEach(el => {
  revealObserver.observe(el);
});
