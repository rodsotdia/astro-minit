document.addEventListener("astro:page-load", () => {
  console.log("Astro: page load");
});
document.addEventListener("astro:after-preparation", () => {
  console.log("Astro: after preparation");
});
document.addEventListener("astro:after-swap", () => {
  console.log("Astro: after swap");
});
document.addEventListener("astro:before-preparation", () => {
  console.log("Astro: before preparation");
});
document.addEventListener("astro:before-swap", () => {
  console.log("Astro: before swap");
});
