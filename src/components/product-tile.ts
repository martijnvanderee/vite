interface Tile {
  title: string;
  price: string;
  href: string;
  img: {
    src: string;
    alt: string;
  };
}

export const productTile = ({ title, price, img, href }: Tile) => `
  <div class="product-tile">
    <a
      href="${href}"
    >
      <div class="tile__image">
        <div class="image">
          <div class="image__object">
            <img
              src="${img.src}"
              alt="${img.alt}"
              class="tile__item"
            />
          </div>
        </div>
      </div>
      <div class="tile__description">
        <div class="tile__heading">
        ${title}
        </div>
        <div class="tile__prices">${price}</div>
      </div>
    </a>
  </div>
`;
