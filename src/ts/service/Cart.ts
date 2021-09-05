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
        return this._items.reduce((acc: number, item: Buyable) => {
            return acc + item.price}, 0
        )
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
