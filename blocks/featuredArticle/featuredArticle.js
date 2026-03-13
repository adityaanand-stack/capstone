export default function decorate(block) {
  const row = block.querySelector(':scope > div');

  if (!row) return;

  const image = row.children[0];
  const content = row.children[1];

  image.classList.add('featured-image');
  content.classList.add('featured-content');

  const button = content.querySelector('a');
  if (button) {
    button.classList.add('featured-button');
  }
}
