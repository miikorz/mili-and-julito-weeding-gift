(() => {
  const parallaxSections = document.querySelectorAll('.hero, .parallax');

  const updateParallax = () => {
    const scrollY = window.scrollY;
    parallaxSections.forEach((section, index) => {
      const speed = index === 0 ? 0.35 : 0.2;
      section.style.backgroundPositionY = `${-(scrollY * speed)}px`;
    });
  };

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
})();
