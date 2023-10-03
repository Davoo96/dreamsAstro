const animationOnScroll = () => {
  const targets = document.querySelectorAll(".js-animation-on-scroll");

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
    target.classList.add("opacity-0");

    observer.observe(target);
  });
};

export default animationOnScroll;
