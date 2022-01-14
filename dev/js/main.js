const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.btn-nxt',
    prevEl: '.btn-prev',
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 2500,
  },
});