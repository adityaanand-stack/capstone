export default function decorate(block) {
  const items = [...block.children];

  items.forEach((item) => {
    const question = item.querySelector('h3');

    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}
