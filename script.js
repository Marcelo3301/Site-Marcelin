/* =========================
   SLIDER / CARROSSEL
========================= */
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;

if (slides && images.length > 0) {
  setInterval(() => {
    index++;

    if (index >= images.length) {
      index = 0;
    }

    slides.style.transform = `translateX(${-index * 100}%)`;
  }, 3500);
}

/* =========================
   EFEITO DE LUZ NOS CARDS
========================= */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});

/* =========================
   LUZ SEGUINDO O MOUSE
========================= */
const light = document.querySelector('.mouse-light');

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

if (light) {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    light.style.left = currentX + 'px';
    light.style.top = currentY + 'px';

    requestAnimationFrame(animate);
  }

  animate();
}
