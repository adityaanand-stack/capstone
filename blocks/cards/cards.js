export default function decorate(block) {

  const cards = [...block.children];

  cards.forEach((card) => {

    const imageDiv = card.children[0];
    const bodyDiv = card.children[1];

    /* add classes */

    imageDiv.classList.add('card-image');
    bodyDiv.classList.add('card-body');

  });

}
