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
document.querySelectorAll('.scroll-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    let topYCoord = document.querySelector('.order__section').getBoundingClientRect().top;
    window.scrollBy({
      top: topYCoord,
      behavior: "smooth"
    });
  })
});
function startTimer() {
  const my_timer = document.getElementById("my_timer");
  const time = my_timer.innerHTML;
  const arr = time.split(":");

  let h = arr[0];
  let m = arr[1];
  let s = arr[2];

  if (s == 0) {
    if (m == 0) {
      if (h == 0) {
        alert("Время вышло");
        window.location.reload();
        return;
      }
      h--;
      m = 60;
      if (h < 10) h = "0" + h;
    }
    m--;
    if (m < 10) m = "0" + m;
    s = 59;
  }
  else s--;
  if (s < 10) s = "0" + s;
  
  document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
  setTimeout(startTimer, 1000);
}













// 30:00  29:59 - sec = 29:58     min:sec