(() => {
  const HERO_SPEED = 0.35;
  const SECTION_SPEED = 0.2;
  const parallaxSections = document.querySelectorAll('.hero, .parallax');

  const updateParallax = () => {
    const scrollY = window.scrollY;
    parallaxSections.forEach((section, index) => {
      const speed = index === 0 ? HERO_SPEED : SECTION_SPEED;
      section.style.backgroundPositionY = `${-(scrollY * speed)}px`;
    });
  };

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
})();
