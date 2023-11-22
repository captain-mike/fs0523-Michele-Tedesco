"use strict";
class Test {
    constructor(price) {
        this.price = price;
    }
    get getPrice() {
        return this.price + '€';
    }
    set setPrice(newPrice) {
        this.price = newPrice;
    }
}
let test = new Test(10);
test.setPrice = 20;
console.log(test.getPrice);
//test.getPrice = '5' non posso farlo
