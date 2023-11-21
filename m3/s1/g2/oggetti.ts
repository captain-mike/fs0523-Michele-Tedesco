let pizza:{
    id:number;
    gusto:string;
    prezzo:number;
    disponibile:boolean
} = {
    id:4,
    gusto:'Capricciosa',
    prezzo:7,
    disponibile:true
}

console.log(pizza.gusto);

type Pizza = {
    id:number;
    gusto:string;
    prezzo:number;
    disponibile:boolean
}

let pizza2:Pizza = {
    id:4,
    gusto:'Capricciosa',
    prezzo:7,
    disponibile:true
}