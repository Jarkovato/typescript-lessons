// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)

// implements
// interface IProduct {
//   id: number;
//   name: string;
//   price: number;
// }

// interface IDelivery {
//   date: Date;
//   address?: string;
//   shopId?: number;
// }

// enum ICheckoutStatus {
//   succsess = "succsess",
//   fail = "fail",
// }

// interface ICard {
//   products: IProduct[];
//   delivery: IDelivery;
//   add: (product: IProduct) => void;
//   remove: (id: number) => void;
//   amount: () => number;
//   setDelivery: (delivery: IDelivery) => void;
//   checkout: () => ICheckoutStatus;
// }

// class Card implements ICard {
//   products: IProduct[];
//   delivery: IDelivery;

//   add(product: IProduct) {
//     this.products.push(product);
//   }

//   remove(id: number) {
//     this.products = this.products.filter((p) => p.id !== id);
//   }

//   amount() {
//     return this.products.reduce((sum, product) => {
//       return sum + product.price;
//     }, 0);
//   }

//   setDelivery(delivery: IDelivery): void {
//     this.delivery = delivery;
//   }

//   checkout(): ICheckoutStatus {
//     if (
//       this.products.length &&
//       this.delivery.date &&
//       (this.delivery.address || this.delivery.shopId)
//     ) {
//       return ICheckoutStatus.succsess;
//     } else return ICheckoutStatus.fail;
//   }
// }

class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(date: Date, public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Card {
  private products: Product[] = [];
  private delivery: DeliveryOptions;

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public removeProduct(id: number): void {
    this.products = this.products.filter((p: Product) => p.id !== id);
  }

  public getSum() {
    return this.products.reduce((sum: number, product: Product) => {
      return sum + product.price;
    }, 0);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  public checkout() {
    if (!this.products.length) {
      throw new Error("Нет ни одного товара в корзине");
    }

    if (!this.delivery) {
      throw new Error("Не указан способ доставки");
    }

    return { success: true };
  }
}
