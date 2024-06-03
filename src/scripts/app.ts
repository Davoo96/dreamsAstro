import carousel from "./carousel";
import animationOnScroll from "./animationOnScroll";

animationOnScroll();
carousel();

document.addEventListener("astro:after-swap", () => {
  carousel();
});
