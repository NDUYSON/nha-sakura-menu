const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {

  button.addEventListener('click', () => {

    document
      .querySelector('.filter-btn.active')
      .classList.remove('active');

    button.classList.add('active');

    const filter = button.dataset.filter;

    menuCards.forEach(card => {

      if (filter === 'all') {
        card.style.display = 'block';
      }
      else {

        if (card.classList.contains(filter)) {
          card.style.display = 'block';
        }
        else {
          card.style.display = 'none';
        }

      }

    });

  });

});
}