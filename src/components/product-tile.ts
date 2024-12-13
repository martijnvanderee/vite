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
              sizes="((min-width: 50em) and (max-width: 60em)) 5em,
              ((min-width: 30em) and (max-width: 50em)) 10em,
              (max-width: 30em) 15em"
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
