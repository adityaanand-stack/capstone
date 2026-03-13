export default function decorate(block) {
  const wrapper = block.querySelector(':scope > div');
  const items = [...wrapper.children];

  const left = document.createElement('div');
  left.className = 'faq-left';

  const contact = document.createElement('div');
  contact.className = 'faq-contact';

  /* first two elements -> left side */

  left.append(items[0], items[1]);

  /* third element -> contact side */

  contact.append(items[2]);

  wrapper.innerHTML = '';
  wrapper.append(left, contact);
}
