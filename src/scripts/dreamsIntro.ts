const CONFIG = {
  layerDelay: 430,
  drawDur: 780,
  holdAfter: 2600,
  morphDur: 1050,
  crossfadeDur: 280,
  centerRatio: 0.28,
  centerMax: 175,
  headerScaleRatio: 0.82,
  subWidthRatio: 0.94,
  once: true
} as const;

const SESSION_KEY = "dreamsIntroSeen";
const SLOT_TIMEOUT_MS = 10000;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const shouldForceReplay = () =>
  new URLSearchParams(window.location.search).has("replayIntro");

const shouldSkipIntro = () =>
  CONFIG.once &&
  !shouldForceReplay() &&
  sessionStorage.getItem(SESSION_KEY) === "1";

const slotHasSize = (slot: HTMLElement) => {
  const rect = slot.getBoundingClientRect();
  return (
    (rect.width > 0 && rect.height > 0) ||
    (slot.offsetWidth > 0 && slot.offsetHeight > 0)
  );
};

const waitForSlot = (): Promise<HTMLElement> =>
  new Promise((resolve, reject) => {
    const started = performance.now();

    const poll = () => {
      const slot = document.getElementById("dr-logo-slot");

      if (slot && slotHasSize(slot)) {
        resolve(slot);
        return;
      }

      if (performance.now() - started >= SLOT_TIMEOUT_MS) {
        reject(new Error("Dreams intro: #dr-logo-slot not found in time"));
        return;
      }

      requestAnimationFrame(poll);
    };

    requestAnimationFrame(poll);
  });

const loadIntroFonts = async () => {
  if (!document.fonts?.load) return;

  await Promise.all([
    document.fonts.load('400 1em "Aspire Font"'),
    document.fonts.load('200 1em "Poppins"')
  ]);
};

const alignSubToWord = () => {
  const word = document.getElementById("dr-word");
  const sub = document.getElementById("dr-sub");

  if (!word || !sub) return;

  sub.style.transform = "";
  sub.style.letterSpacing = "0";

  const wordWidth = word.offsetWidth;
  const text = sub.textContent ?? "";
  const charCount = text.length;

  if (wordWidth <= 0 || charCount <= 1) return;

  const naturalWidth = sub.offsetWidth;
  const targetWidth = wordWidth * CONFIG.subWidthRatio;

  if (naturalWidth <= 0 || naturalWidth >= targetWidth) return;

  const spacing = (targetWidth - naturalWidth) / (charCount - 1);
  sub.style.letterSpacing = `${Math.max(0, spacing)}px`;
};

const centerScale = (lock: HTMLElement) => {
  const lockHeight = lock.offsetHeight || 1;
  const scale =
    Math.min(window.innerHeight * CONFIG.centerRatio, CONFIG.centerMax) /
    lockHeight;
  return Math.max(scale, 1);
};

const placeCenter = (lock: HTMLElement) => {
  const scale = centerScale(lock);
  const tx = (window.innerWidth - lock.offsetWidth * scale) / 2;
  const ty = (window.innerHeight - lock.offsetHeight * scale) / 2;

  lock.style.transition = "none";
  lock.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
};

const placeHeader = (
  lock: HTMLElement,
  slot: HTMLElement,
  animate: boolean
) => {
  const rect = slot.getBoundingClientRect();
  const lockHeight = lock.offsetHeight || 1;
  const scale = (rect.height * CONFIG.headerScaleRatio) / lockHeight;
  const scaledWidth = lock.offsetWidth * scale;
  const scaledHeight = lock.offsetHeight * scale;
  const tx = rect.left + (rect.width - scaledWidth) / 2;
  const ty = rect.top + (rect.height - scaledHeight) / 2;

  lock.style.transition = animate
    ? `transform ${CONFIG.morphDur}ms cubic-bezier(0.4, 0, 0.2, 1)`
    : "none";
  lock.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
};

const setupStrokes = (svg: SVGSVGElement) => {
  svg.querySelectorAll("polyline").forEach(line => {
    const length = (line as SVGGeometryElement).getTotalLength();
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;
  });
};

const animateStrokes = (svg: SVGSVGElement) =>
  new Promise<void>(resolve => {
    const polylines = [...svg.querySelectorAll("polyline")];

    if (polylines.length === 0) {
      resolve();
      return;
    }

    const maxLayer = polylines.reduce(
      (max, line) =>
        Math.max(max, Number(line.getAttribute("data-b") ?? 0)),
      0
    );
    const totalDuration = maxLayer * CONFIG.layerDelay + CONFIG.drawDur;

    polylines.forEach(line => {
      const layer = Number(line.getAttribute("data-b"));
      const delay = layer * CONFIG.layerDelay;

      window.setTimeout(() => {
        line.style.transition = `stroke-dashoffset ${CONFIG.drawDur}ms ease-in-out`;
        line.style.strokeDashoffset = "0";
      }, delay);
    });

    window.setTimeout(() => resolve(), totalDuration);
  });

const revealWordmark = () => {
  document.getElementById("dr-word")?.classList.add("is-visible");
  document.getElementById("dr-sub")?.classList.add("is-visible");
};

const showStaticLogo = () => {
  const staticLogo = document.getElementById("nav-logo-static");

  if (staticLogo) {
    staticLogo.classList.remove("opacity-0", "invisible", "pointer-events-none");
  }
};

const crossfadeToStaticLogo = (): Promise<void> =>
  new Promise(resolve => {
    const lock = document.getElementById("dr-lock");
    const staticLogo = document.getElementById("nav-logo-static");
    const fadeMs = CONFIG.crossfadeDur;

    showStaticLogo();

    if (staticLogo) {
      staticLogo.style.transition = `opacity ${fadeMs}ms ease`;
      staticLogo.style.opacity = "1";
    }

    if (!lock) {
      window.setTimeout(resolve, fadeMs);
      return;
    }

    lock.style.transition = `opacity ${fadeMs}ms ease`;
    lock.style.opacity = "0";

    window.setTimeout(() => {
      lock.style.display = "none";
      resolve();
    }, fadeMs);
  });

const finishReveal = (markSeen = false, showLogo = true) => {
  if (showLogo) showStaticLogo();
  document.body.classList.remove("dreams-intro-active", "dreams-intro-pending");
  document.body.classList.add("dreams-intro-revealed");
  document.dispatchEvent(new Event("dreams:revealed"));

  if (markSeen && CONFIG.once) {
    sessionStorage.setItem(SESSION_KEY, "1");
  }
};

const reveal = async () => {
  const pre = document.getElementById("dr-pre");

  await crossfadeToStaticLogo();

  const complete = () => {
    if (pre) pre.style.display = "none";
    finishReveal(true, false);
    document.documentElement.classList.remove("dreams-intro-skip");
  };

  if (pre) {
    pre.style.opacity = "0";
    window.setTimeout(complete, 500);
  } else {
    complete();
  }
};

const finishInstant = () => {
  const pre = document.getElementById("dr-pre");
  const lock = document.getElementById("dr-lock");

  if (pre) pre.style.display = "none";
  if (lock) lock.style.display = "none";

  document.documentElement.classList.add("dreams-intro-skip");
  finishReveal(false);
};

const hideIntroOverlays = () => {
  const pre = document.getElementById("dr-pre");
  const lock = document.getElementById("dr-lock");
  const wasPending = document.body.classList.contains("dreams-intro-pending");

  if (pre) {
    pre.style.opacity = "0";
    pre.style.display = "none";
  }

  if (lock) {
    lock.style.opacity = "0";
    lock.style.display = "none";
  }

  showStaticLogo();
  document.body.classList.remove(
    "dreams-intro-active",
    "dreams-intro-pending"
  );
  document.body.classList.add("dreams-intro-revealed");

  if (wasPending) {
    document.dispatchEvent(new Event("dreams:revealed"));
  }
};

const run = async (slot: HTMLElement, onMorphStart?: () => void) => {
  const lock = document.getElementById("dr-lock");
  const pre = document.getElementById("dr-pre");
  const svg = document.getElementById("dr-mark") as SVGSVGElement | null;

  if (!lock || !pre || !svg) {
    finishInstant();
    return;
  }

  document.body.classList.add("dreams-intro-pending");

  await loadIntroFonts();
  alignSubToWord();
  setupStrokes(svg);
  placeCenter(lock);
  document.body.classList.add("dreams-intro-active");

  await animateStrokes(svg);
  revealWordmark();

  await new Promise<void>(resolve =>
    window.setTimeout(resolve, CONFIG.holdAfter)
  );

  onMorphStart?.();
  placeHeader(lock, slot, true);

  await new Promise<void>(resolve =>
    window.setTimeout(resolve, CONFIG.morphDur)
  );

  await reveal();
};

const initDreamsIntro = () => {
  if (shouldForceReplay()) {
    sessionStorage.removeItem(SESSION_KEY);
    document.documentElement.classList.remove("dreams-intro-skip");
  }

  const start = async () => {
    try {
      if (prefersReducedMotion() || shouldSkipIntro()) {
        finishInstant();
        return;
      }

      const slot = await waitForSlot();

      let introAtHeader = false;

      const onResize = () => {
        const lock = document.getElementById("dr-lock");
        if (!lock || lock.style.display === "none") return;
        alignSubToWord();
        if (introAtHeader) {
          placeHeader(lock, slot, false);
        } else {
          placeCenter(lock);
        }
      };

      window.addEventListener("resize", onResize);

      await run(slot, () => {
        introAtHeader = true;
      });
    } catch (error) {
      console.warn("[dreams-intro]", error);
      hideIntroOverlays();
      document.dispatchEvent(new Event("dreams:revealed"));
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }

  document.addEventListener("astro:after-swap", hideIntroOverlays);
};

export default initDreamsIntro;
