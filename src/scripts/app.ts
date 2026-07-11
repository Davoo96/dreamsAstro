import initDreamsIntro from "./dreamsIntro";
import animationOnScroll from "./animationOnScroll";

const boot = () => {
  initDreamsIntro();
  animationOnScroll();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}

document.addEventListener("astro:after-swap", animationOnScroll);
