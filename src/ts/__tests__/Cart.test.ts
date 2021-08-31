import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('card should keep goods', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  const expected = [
    {
      id: 1001, 
      name: "War and Piece", 
      author: "Leo Tolstoy", 
      price: 2000, 
      pages: 1225
    },
    {
      id: 1008, 
      name: "Meteora", 
      author: "Linkin Park", 
      price: 900
    }
  ];
  expect(cart.items).toEqual(expected);
});

test('calculate sum with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  const recieved = cart.totalWithDiscont(0.2);
  
  expect(recieved).toBe(2320);
});

test('card should remove goods', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble', 'fantastic', '137', 500));
  cart.remove(1010);

  const expected = [
    {
      id: 1001, 
      name: "War and Piece", 
      author: "Leo Tolstoy", 
      price: 2000, 
      pages: 1225
    },
    {
      id: 1008, 
      name: "Meteora", 
      author: "Linkin Park", 
      price: 900
    }
  ];
  expect(cart.items).toEqual(expected);
});
