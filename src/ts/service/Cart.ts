import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalSum(): number {
        let sum: number = 0;
        this._items.forEach((item) => {
            sum += item.price;
        })
        return sum;
    }

    totalWithDiscont(discont: number): Buyable {
        const result = this._items.reduce((acc: Buyable, item: Buyable, idx: number, arr: Buyable[]) => {
            acc.price + item.price;
            if (idx === arr.length - 1) {
                return acc.price - acc.price * discont;
              } else {
                return acc;
              }
        })
        return result;
    }

    remove(id: number): void {
        const newArray: Buyable[] = this._items.filter((item) => {
            return item.id !== id;
        });

        this._items = newArray;
    }
}
