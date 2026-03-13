export default function decorate(block) {
  const cols = [...block.firstElementChild.children];

  block.classList.add(`featured-${cols.length}-cols`);

  [...block.children].forEach((row) => {
    const columns = [...row.children];

    if (columns[0]) {
      columns[0].classList.add('featured-image');
    }

    if (columns[1]) {
      columns[1].classList.add('featured-content');
    }

    columns.forEach((col) => {
      const button = col.querySelector('a');
      if (button) {
        button.classList.add('featured-button');
      }
    });
  });
}
