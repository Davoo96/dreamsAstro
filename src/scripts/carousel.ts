function carousel() {
  const dots = document.querySelectorAll("[data-carousel-dots]");
  const carouselItems = Array.from(
    document.querySelectorAll("[data-carousel-item]")
  );

  if (!carouselItems.length) return;

  const carousel = document.querySelector("[data-carousel]");
  const prevButton = document.querySelector("[data-carousel-prev]");
  const nextButton = document.querySelector("[data-carousel-next]");
  const carouselElement = document.querySelector("[data-carousel]");
  const TOTAL_SLIDES = carouselItems.length;

  const activeItem = carouselItems.find(
    item => (item as HTMLElement).dataset.carouselItem === "active"
  );

  if (!activeItem) {
    (carouselItems[0] as HTMLElement).dataset.carouselItem = "active";
  }

  function calculateTranslateX(index: number) {
    if (!carouselElement) return 0;
    const containerWidth = carouselElement.clientWidth;
    const itemWidth = (carouselItems[0] as HTMLElement).offsetWidth;
    const gap = parseFloat(
      window.getComputedStyle(carouselElement).getPropertyValue("gap")
    );
    const slideDistance = itemWidth + gap;
    const centerOffset = (containerWidth - itemWidth) / 2;

    return -(index * slideDistance - centerOffset);
  }

  function setActiveItem(index: number) {
    carouselItems.forEach((item, i) => {
      const htmlItem = item as HTMLElement;
      htmlItem.dataset.carouselItem = i === index ? "active" : "";
    });

    if (carousel) {
      updateDots();
      (
        carousel as HTMLElement
      ).style.transform = `translateX(${calculateTranslateX(index)}px)`;
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

  setActiveItem(0);
  updateDots();
}

export default carousel;
