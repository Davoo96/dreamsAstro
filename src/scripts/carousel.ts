const dots = document.querySelectorAll("[data-carousel-dots]");
const carouselItems = Array.from(
  document.querySelectorAll("[data-carousel-item]")
);
const carousel = document.querySelector("[data-carousel]");
const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const carouselElement = document.querySelector("[data-carousel]");
const SLIDE_WIDTH = parseFloat(
  window.getComputedStyle(carouselItems[0]).getPropertyValue("width")
);
const SLIDE_GAP = carouselElement
  ? parseFloat(window.getComputedStyle(carouselElement).getPropertyValue("gap"))
  : 0;
const SLIDE_DISTANCE = SLIDE_WIDTH + SLIDE_GAP;
const TOTAL_SLIDES = carouselItems.length;

const activeItem = carouselItems.find(
  item => (item as HTMLElement).dataset.carouselItem === "active"
);

if (!activeItem) {
  (carouselItems[0] as HTMLElement).dataset.carouselItem = "active";
}

function setActiveItem(index: number) {
  carouselItems.forEach((item, i) => {
    const htmlItem = item as HTMLElement;
    htmlItem.dataset.carouselItem = i === index ? "active" : "";
  });

  if (carousel) {
    updateDots();
    if (index === 0) {
      (carousel as HTMLElement).style.transform = `translateX(270px)`;
      (carousel as HTMLElement).style.transition = "transform 500ms";
      return;
    }
    (carousel as HTMLElement).style.transform = `translateX(-${
      -270 + index * SLIDE_DISTANCE
    }px)`;
    (carousel as HTMLElement).style.transition = "transform 500ms";
  }
}

dots.forEach((button, i) => {
  button.addEventListener("click", () => {
    setActiveItem(i);
  });
});

prevButton?.addEventListener("click", () => {
  if (!carousel) return;
  const activeIndex = carouselItems.findIndex(
    item => (item as HTMLElement).dataset.carouselItem === "active"
  );
  const prevIndex =
    (activeIndex - 1 + carouselItems.length) % carouselItems.length;
  setActiveItem(prevIndex);
});

nextButton?.addEventListener("click", () => {
  const activeIndex = carouselItems.findIndex(
    item => (item as HTMLElement).dataset.carouselItem === "active"
  );
  const nextIndex = (activeIndex + 1) % carouselItems.length;
  setActiveItem(nextIndex);
});

function updateDots() {
  const activeIndex = carouselItems.findIndex(
    item => (item as HTMLElement).dataset.carouselItem === "active"
  );
  const index = ((activeIndex % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES; // ensure we don't have a negative number
  dots.forEach(el => el.classList.remove("!bg-orange-300"));
  const currentDot = dots[index];

  currentDot.classList.add("!bg-orange-300", "scale-0");
  setTimeout(() => currentDot.classList.remove("scale-0"), 150);
}

updateDots();
