const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('animate__animated', 'animate__flipOutX');
    setTimeout(() => {
      card.style.display = 'none';
    }, 1000);
  });
});
