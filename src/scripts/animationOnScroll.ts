const startObserver = () => {
  const targets = document.querySelectorAll("[data-animate-type]");

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const target = entry.target as HTMLElement;
      const animateType = target.dataset.animateType as string;
      if (entry.isIntersecting) {
        entry.target.classList.add(animateType);
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  targets.forEach(target => {
    if (target instanceof HTMLElement && target.dataset.animateObserved) return;

    target.classList.add("opacity-0");

    if (target instanceof HTMLElement) {
      target.dataset.animateObserved = "true";
    }

    observer.observe(target);
  });
};

const animationOnScroll = () => {
  if (document.body.classList.contains("dreams-intro-pending")) {
    document.addEventListener(
      "dreams:revealed",
      () => {
        startObserver();
      },
      { once: true }
    );
    return;
  }

  startObserver();
};

export default animationOnScroll;
