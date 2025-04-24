const track = document.querySelector(".carrossel-track");
const btnLeft = document.querySelector(".carrossel-btn.left");
const btnRight = document.querySelector(".carrossel-btn.right");

let scrollAmount = 0;
const cardWidth = track.querySelector(".card-parceiros").offsetWidth + 16;
const maxScroll = track.scrollWidth - track.offsetWidth;

function updateScroll() {
  track.style.transform = `translateX(-${scrollAmount}px)`;
}

btnLeft.addEventListener("click", () => {
  scrollAmount = Math.max(scrollAmount - cardWidth, 0);
  updateScroll();
});

btnRight.addEventListener("click", () => {
  scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
  updateScroll();
});

