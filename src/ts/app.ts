import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Buyable from './domain/Buyable';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble', 'fantastic', '137', 500));

console.log(cart.items);

const sum: number = cart.totalSum();
console.log(sum);

const sumDiscont: number = cart.totalWithDiscont(0.2);
console.log(sumDiscont);

cart.remove(1001);
console.log(cart.items);