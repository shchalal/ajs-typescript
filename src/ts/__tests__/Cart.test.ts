import Cart from '../service/Cart';

import Movie from '../domain/Movie';

describe('Cart with Movie', () => {
  test('adds movie once and calculates total', () => {
    const cart = new Cart();
    const movie = new Movie({
      id: 77,
      name: 'Интерстеллар',
      originalTitle: 'Interstellar',
      year: 2014,
      country: 'США',
      slogan: 'Mankind was born on Earth. It was never meant to die here.',
      genres: ['фантастика', 'драма', 'приключения'],
      duration: 169,
      price: 350,
    });

    cart.add(movie);
    cart.add(movie); 

    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(movie);
    expect(cart.total()).toBe(350);
  });
});

