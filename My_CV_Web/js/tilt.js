/* ============ 3D TILT EFFECTS ============
   Adds a 3D perspective tilt to project cards and the hero image
   based on mouse position within each element.
*/

// --- Project Cards Tilt ---
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect    = card.getBoundingClientRect();
    const x       = e.clientX - rect.left;
    const y       = e.clientY - rect.top;
    const centerX = rect.width  / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) *  8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
  });
});

// --- Hero Image Tilt ---
const heroImage = document.getElementById("heroImage");
if (heroImage) {
  heroImage.addEventListener("mousemove", (e) => {
    const rect    = heroImage.getBoundingClientRect();
    const x       = e.clientX - rect.left;
    const y       = e.clientY - rect.top;
    const centerX = rect.width  / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) *  12;
    heroImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  heroImage.addEventListener("mouseleave", () => {
    heroImage.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
}
