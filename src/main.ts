import './style.scss';
import { productTile } from './components/product-tile';

const data = {
  title:
    'make europe great again cap (MEGA eu/acc official) hat blue - 100% cotton',
  price: '$25,00',
  href: '/products/make-europe-great-again-eu-acc-official-hat-blue-100-cotton',
  img: {
    src: 'https://res.cloudinary.com/dta9vptzh/image/upload/c_fill,h_500,w_400/v1553072538/vite/gkcrjgywnswkmawzeqc4.jpg',
    alt: 'MAKE: The Indie Maker Handbook product image (1)',
  },
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="row">
      <div class="col-6 col-md-4">
        <div class="grid-item">${productTile(data)}</div>
      </div>
      <div class="col-6 col-md-4">
        <div class="grid-item">${productTile(data)}</div>
      </div>
      <div class="col-6 col-md-4">
        <div class="grid-item">${productTile(data)}</div>
      </div>
      <div class="col-6 col-md-4">
        <div class="grid-item">${productTile(data)}</div>
      </div>
      <div class="col-6 col-md-4">
        <div class="grid-item">${productTile(data)}</div>
      </div>
      <div class="col-6 col-md-4">
        <div class="grid-item">${productTile(data)}</div>
      </div>
    </div>
  </div>
`;
