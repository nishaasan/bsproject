document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;

  function showSlide(n) {
    index = (n + images.length) % images.length; // loop around
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  // Buttons
  prevBtn.addEventListener('click', () => showSlide(index - 1));
  nextBtn.addEventListener('click', () => showSlide(index + 1));

  // Auto-slide every 5 seconds
  setInterval(() => showSlide(index + 1), 5000);
});