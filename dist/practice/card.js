"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(date, shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Card {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(id) {
        this.products = this.products.filter((p) => p.id !== id);
    }
    getSum() {
        return this.products.reduce((sum, product) => {
            return sum + product.price;
        }, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (!this.products.length) {
            throw new Error("Нет ни одного товара в корзине");
        }
        if (!this.delivery) {
            throw new Error("Не указан способ доставки");
        }
        return { success: true };
    }
}
