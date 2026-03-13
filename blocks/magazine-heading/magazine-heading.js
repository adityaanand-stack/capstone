export default function decorate(block) {

  const rows = [...block.children];

  const imageSection = rows[0];
  const breadcrumbSection = rows[1];

  imageSection.classList.add('magazine-hero');
  breadcrumbSection.classList.add('magazine-breadcrumb');

}
