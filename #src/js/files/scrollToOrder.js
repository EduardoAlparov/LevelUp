document.querySelectorAll('.scroll-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    let topYCoord = document.querySelector('.order__section').getBoundingClientRect().top;
    window.scrollBy({
      top: topYCoord,
      behavior: "smooth"
    });
  })
});