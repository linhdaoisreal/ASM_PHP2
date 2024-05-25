const slideshow = document.getElementById('slideshow');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');
const pagination = document.getElementById('pagination');

let currentSlide = 0;
const totalSlides = slideshow.children.length;

// Create pagination dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('w-3', 'h-3', 'bg-white', 'rounded-full', 'mx-1', 'cursor-pointer');
  dot.addEventListener('click', () => {
    currentSlide = i;
    updateSlide();
  });
  pagination.appendChild(dot);
}

// Update slide
function updateSlide() {
  slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
  pagination.children[currentSlide].classList.add('bg-gray-500');
  for (let i = 0; i < pagination.children.length; i++) {
    if (i !== currentSlide) {
      pagination.children[i].classList.remove('bg-gray-500');
    }
  }
}

// // Previous slide
// prevBtn.addEventListener('click', () => {
//   currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//   updateSlide();
// });

// // Next slide
// nextBtn.addEventListener('click', () => {
//   currentSlide = (currentSlide + 1) % totalSlides;
//   updateSlide();
// });

// Autoplay
let autoplayInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}, 5000);