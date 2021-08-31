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

    totalWithDiscont(discont: number): number {
        let sum: number = this.totalSum();
        return sum - ( sum * discont );
    }

    remove(id: number): void {
        let index: number = -1;
        for (let i = 0; i < this._items.length; i += 1) {
            let item = this._items[i];
            if (item.id === id) {
                index = i;  
            }
        };
        delete this._items[index];
        let newArray: any = [];
        this._items.forEach((item) => {
            newArray.push(item);
        })
        this._items = newArray;
    }
}
