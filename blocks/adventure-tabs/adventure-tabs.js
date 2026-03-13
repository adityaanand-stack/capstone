export default function decorate(block) {
  const tabs = [...block.querySelectorAll('p')];

  const cards = [...document.querySelectorAll('.adventure-cards > div')];

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      /* activate tab */

      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const selected = tab.textContent.trim().toLowerCase();

      cards.forEach((card) => {
        const category = card
          .querySelector(':scope > div:last-child p')
          .textContent
          .trim()
          .toLowerCase();

        if (selected === 'all' || selected === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
