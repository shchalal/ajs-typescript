import Buyable from '../domain/Buyable';


export default class Cart {
  private readonly _items: Buyable[] = [];

  add(item: Buyable): void {
    if (this._items.find(x => x.id === item.id)) return;
    this._items.push(item);
  }

  get items(): ReadonlyArray<Buyable> {
    return this._items;
  }

  total(): number {
    return this._items.reduce((sum, it) => sum + it.price, 0);
  }
}
