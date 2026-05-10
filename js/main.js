(() => {
  const HERO_SPEED = 0.35;
  const SECTION_SPEED = 0.2;
  const parallaxSections = document.querySelectorAll('.hero, .parallax');

  const updateParallax = () => {
    const scrollY = window.scrollY;
    parallaxSections.forEach((section, sectionIndex) => {
      const isFirstSection = sectionIndex === 0;
      const speed = isFirstSection ? HERO_SPEED : SECTION_SPEED;
      section.style.backgroundPositionY = `${-(scrollY * speed)}px`;
    });
  };

  let isTicking = false;

  const onScroll = () => {
    if (isTicking) {
      return;
    }

    isTicking = true;
    window.requestAnimationFrame(() => {
      updateParallax();
      isTicking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  updateParallax();
})();
