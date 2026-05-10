(() => {
  // ============================================
  // PARALLAX EFFECT
  // ============================================
  const parallaxSections = document.querySelectorAll(".parallax-section");

  const updateParallax = () => {
    const scrollY = window.scrollY;
    parallaxSections.forEach((section) => {
      const speed = section.classList.contains("hero") ? 0.3 : 0.15;
      section.style.backgroundPositionY = `${-(scrollY * speed)}px`;
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  updateParallax();

  // ============================================
  // SCROLL ANIMATIONS (Intersection Observer)
  // ============================================
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
  );

  fadeElements.forEach((el) => fadeObserver.observe(el));

  // ============================================
  // GIFT REVEAL ANIMATION
  // ============================================
  const rewardEl = document.getElementById("reward");

  if (rewardEl) {
    const rewardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              rewardEl.classList.add("revealed");
            }, 500);
            rewardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    rewardObserver.observe(rewardEl);
  }

  // ============================================
  // ACCEPT BUTTON INTERACTION
  // ============================================
  const acceptBtn = document.getElementById("accept-quest");

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      acceptBtn.classList.add("accepted");
      acceptBtn.textContent = "✅ ¡Recompensa aceptada!";
      createCelebration();
    });
  }

  // ============================================
  // CELEBRATION PARTICLES
  // ============================================
  function createCelebration() {
    const colors = ["#ffd700", "#c9a13b", "#ff6b35", "#8c1616", "#ffc107"];
    const container = document.querySelector(".gift-section");
    if (!container) return;

    container.style.position = "relative";
    container.style.overflow = "hidden";

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10;
        animation: particleFade ${Math.random() * 2 + 1}s ease-out forwards;
      `;
      container.appendChild(particle);
      setTimeout(() => particle.remove(), 3000);
    }
  }
})();
