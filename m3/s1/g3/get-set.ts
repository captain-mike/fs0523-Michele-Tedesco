class Test{
    constructor(private price:number){}

    get getPrice():string{
        return this.price + '€'
    }

    set setPrice(newPrice:number){
        this.price = newPrice
    }

}

let test = new Test(10);

test.setPrice = 20;

console.log( test.getPrice );
//test.getPrice = '5' non posso farlo
