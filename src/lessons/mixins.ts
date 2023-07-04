type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) {}
}

class Accordeon {
  isOpened: boolean;
}

type TListType = GConstructor<List>;
type TAccordeonType = GConstructor<Accordeon>;

class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}

//mixin
function ExtendedList<TBase extends TListType & TAccordeonType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      console.log(this.isOpened); // from TAccordeonType
      return this.items[0]; // from TListType
    }
  };
}

class AccordeonList {
  isOpened: boolean;
  items: string[];
}
const list = ExtendedList(AccordeonList);