let currentSlide = 0;
const totalCards = document.querySelectorAll(".product-card").length;
const cardsPerView = 3;
const maxSlides = totalCards - cardsPerView;

function changeSlide(direction) {
  const track = document.getElementById("productTrack");

  currentSlide += direction;

  if (currentSlide > maxSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = maxSlides;
  }

  const translateX = -(currentSlide * (100 / cardsPerView));
  track.style.transform = `translateX(${translateX}%)`;
}
