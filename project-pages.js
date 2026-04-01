const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach((carousel) => {
  const track = carousel.querySelector('[data-track]');
  const slides = Array.from(carousel.querySelectorAll('[data-slide]'));
  const prev = carousel.querySelector('[data-prev]');
  const next = carousel.querySelector('[data-next]');
  const dotsContainer = carousel.querySelector('[data-dots]');

  if (!track || slides.length === 0 || !prev || !next || !dotsContainer) {
    return;
  }

  let index = 0;

  const dots = slides.map((_, dotIndex) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'dot';
    dot.setAttribute('aria-label', `Go to slide ${dotIndex + 1}`);
    dot.addEventListener('click', () => {
      index = dotIndex;
      render();
    });
    dotsContainer.appendChild(dot);
    return dot;
  });

  const render = () => {
    const slideWidth = carousel.clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    track.style.transition = 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)';

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === index);
      dot.setAttribute('aria-current', dotIndex === index ? 'true' : 'false');
    });
  };

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    render();
  });

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    render();
  });

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prev.click();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      next.click();
    }
  });

  window.addEventListener('resize', render);

  render();
});
