import animationOnScroll from "./animationOnScroll";

animationOnScroll();

document.addEventListener("astro:after-swap", animationOnScroll);
