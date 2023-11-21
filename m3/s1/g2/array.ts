type PizzaType = {
    id:number;
    gusto:string;
    prezzo:number;
    disponibile:boolean
}

//lavorare con array di oggetti

let pizze:PizzaType[] = [
    {
        id:1,
        gusto:'Margherita',
        prezzo:5,
        disponibile:true
    },
    {
        id:2,
        gusto:'Diavola',
        prezzo:1,
        disponibile:false
    },
    {
        id:3,
        gusto:'Hawayana',
        prezzo:150,
        disponibile:false
    }
]

//aggiungere ad un array


let newPizza:PizzaType = {
    id:4,
    gusto:'Capricciosa',
    prezzo:7,
    disponibile:true
}

pizze.push(newPizza);

console.log(pizze);

//rimuovere da un array (la pizza n°3)

function eliminaDaArray(){
    //sistema per eliminare n°1
    let indexById:number = pizze.findIndex((p:PizzaType) => p.id == 3);//qui cerco l'elemento per id se voglio
    let indexByName:number = pizze.findIndex((p:PizzaType) => p.gusto == 'Hawayana');//ma posso anche cercare per nome
    
    pizze.splice(indexByName,1)
}

function eliminaDaArray2(){
    pizze = pizze.filter((p:PizzaType) => p.gusto != 'Hawayana')
}
//eliminaDaArray2()


//aggiornare array

function aggiornaArray(){
    let indexById:number = pizze.findIndex((p:PizzaType) => p.id == 3);//qui cerco l'elemento per id se voglio
    let pizzaSostitutiva:PizzaType = {
        id:3,
        gusto:'Hawayana',
        prezzo:300,
        disponibile:false
    }
    
    pizze.splice(indexById,1,pizzaSostitutiva)
}

function aggiornaArray2(){
   pizze = pizze.map((p:PizzaType) => {

    if(p.id == 2) p.disponibile = true

    return p;
   })
}
aggiornaArray2();
console.log(pizze);

