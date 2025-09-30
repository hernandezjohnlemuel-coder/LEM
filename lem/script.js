const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 20; // slide width + gap (20px)

function updateCarousel() {
  carouselContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  // Optional: update active class to highlight center slide
  slides.forEach((slide, i) => slide.classList.remove('active'));
  if (slides[currentIndex]) {
    slides[currentIndex].classList.add('active');
  }
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 3) { // show 3 slides at once
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Auto-slide every 5 seconds
setInterval(() => {
  if (currentIndex < slides.length - 3) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}, 5000);

// Initialize
updateCarousel();
