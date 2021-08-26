const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  speed: 1000,
  autoHeight: true,
  slidesPerView: 1,
  // setWrapperSize: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

	breakpoints: {
    // when window width is >= 320px

    319: {
      slidesPerView: 1
		},
		
    768: {
      slidesPerView: 1
    }
	}
});