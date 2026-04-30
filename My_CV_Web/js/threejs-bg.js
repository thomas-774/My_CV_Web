/* ============ THREE.JS 3D BACKGROUND ============
   Creates an animated particle field using Three.js.
   Particles respond subtly to mouse movement and react
   to the dark/light theme toggle.
*/

function initThreeJS() {
  const container = document.getElementById("canvas-container");
  if (!container || typeof THREE === "undefined") return;

  // --- Scene Setup ---
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // --- Particle Geometry ---
  const particlesCount = 800;
  const posArray       = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15;
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );

  // --- Particle Material ---
  const material = new THREE.PointsMaterial({
    size:       0.02,
    color:      0x6c63ff,
    transparent: true,
    opacity:    0.8,
    blending:   THREE.AdditiveBlending,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, material);
  scene.add(particlesMesh);
  camera.position.z = 3;

  // --- Mouse Interaction ---
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX / window.innerWidth  - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
  });

  // --- Responsive Resize ---
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // --- Animation Loop ---
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Slow continuous rotation
    particlesMesh.rotation.y = elapsed * 0.05;
    particlesMesh.rotation.x = elapsed * 0.02;

    // Subtle mouse parallax
    particlesMesh.rotation.y += mouseX * 0.05;
    particlesMesh.rotation.x += mouseY * 0.05;

    renderer.render(scene, camera);
  }

  animate();

  // --- Update particle color on theme change ---
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const theme = document.documentElement.getAttribute("data-theme");
      material.color.setHex(theme === "light" ? 0x5a52e0 : 0x6c63ff);
    });
  }
}

// Start after DOM is ready
document.addEventListener("DOMContentLoaded", initThreeJS);
