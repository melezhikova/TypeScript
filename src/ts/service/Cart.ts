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
        // let sum: number = 0;
        // this._items.forEach((item) => {
        //     sum += item.price;
        // })
        // return sum;
        return this._items.reduce((acc: number, item: Buyable) => {
            acc + item.price, 0
        })

        // const sum = this._items.reduce((acc: Buyable, item: Buyable, idx: number, arr: Buyable[]) => {
        //     acc.price += item.price;
        //     if (idx === arr.length - 1) {
        //       return acc.price;
        //     } else {
        //       return acc;
        //     }
        // })
        // return sum;
    }

    totalWithDiscont(discont: number): number {
        const sum = this.totalSum();
        return sum - sum * discont;
    }

    remove(id: number): void {
        this._items = this._items.filter((item) => {
            return item.id !== id;
        });
    }
}
