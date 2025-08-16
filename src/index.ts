import './css/style.css';

// eslint-disable-next-line
import './ts/app';

// TODO: write your code in app.ts

import Cart from './ts/service/Cart';
import Movie from './ts/domain/Movie';

const cart = new Cart();

const avengers = new Movie({
  id: 101,
  name: 'Мстители',
  originalTitle: 'The Avengers',
  year: 2012,
  country: ['США'],
  slogan: 'Avengers Assemble!',
  genres: ['фантастика', 'боевик', 'приключения'],
  duration: 143,
  price: 299,
});

cart.add(avengers);
cart.add(avengers); 

console.log(cart.items);
console.log('Итого:', cart.total());

