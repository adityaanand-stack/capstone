export default function decorate(block) {
  const row = block.querySelector(':scope > div');
  const image = row.children[0];
  const content = row.children[1];
  image.classList.add('advanture-image');
  content.classList.add('advanture-content');

}
