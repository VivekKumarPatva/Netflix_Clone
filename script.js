function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: direction * 220, behavior: 'smooth' });
  }