export default function decorate(block) {
  const cards = block.querySelectorAll(':scope > div');

  cards.forEach((card) => {
    const image = card.children[0];
    const name = card.children[1];
    const role = card.children[2];
    const social = card.children[3];

    if (image) image.classList.add('author-image');
    if (name) name.classList.add('author-name');
    if (role) role.classList.add('author-role');
    if (social) social.classList.add('author-social');
  });
}
