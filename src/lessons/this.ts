class Example {
  private date: Date = new Date();

  // context for ts, not compiling
  getDate(this: Example) {
    return this.date;
  }

  getDateArrow = () => {
    return this.date;
  }

  // dont return class type for this
  // its bad for extends
  // getContext(): Example {
  //   return this;
  // }

  getContext(): this {
    return this;
  }

  // type guard
  // for the type guard to work correctly, it is important that the objects differ
  isExample(): this is Example  {
    return this instanceof Example;
  }
}

const ex = new Example();

const exUser = {
  exDate: ex.getDate(), // undefined (this - exUser)
  bindedDate: ex.getDate.bind(ex), // ok (this - ex)
  arrowDate: ex.getDateArrow // ok here (this - ex)
}

//but arrow functions have problem with

class ExtExample extends Example {
  getExtDate() {
    return super.getDate(); // its ok
    return super.getDateArrow(); // its ERROR (getDateArrow is not a function) 
    // arrow functions are not added to the prototype
    return this.getDateArrow(); // its OK 
  }
}