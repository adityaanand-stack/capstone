export default function decorate(block) {
  const row = block.querySelector(':scope > div');

  if (!row) return;

  const image = row.children[0];
  const content = row.children[1];

  if (image) image.classList.add('featured-image');
  if (content) content.classList.add('featured-content');

  const button = block.querySelector('a');

  if (button) {
    button.classList.add('featured-button');
  }
}
