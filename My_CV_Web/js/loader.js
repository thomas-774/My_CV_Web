/* ============ LOADER ============
   Hides the loading screen once the page is fully loaded.
*/

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 800);
});
