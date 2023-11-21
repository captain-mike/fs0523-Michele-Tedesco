"use strict";
//lavorare con array di oggetti
let pizze = [
    {
        id: 1,
        gusto: 'Margherita',
        prezzo: 5,
        disponibile: true
    },
    {
        id: 2,
        gusto: 'Diavola',
        prezzo: 1,
        disponibile: false
    },
    {
        id: 3,
        gusto: 'Hawayana',
        prezzo: 150,
        disponibile: false
    }
];
//aggiungere ad un array
let newPizza = {
    id: 4,
    gusto: 'Capricciosa',
    prezzo: 7,
    disponibile: true
};
pizze.push(newPizza);
console.log(pizze);
//rimuovere da un array (la pizza n°3)
function eliminaDaArray() {
    //sistema per eliminare n°1
    let indexById = pizze.findIndex((p) => p.id == 3); //qui cerco l'elemento per id se voglio
    let indexByName = pizze.findIndex((p) => p.gusto == 'Hawayana'); //ma posso anche cercare per nome
    pizze.splice(indexByName, 1);
}
function eliminaDaArray2() {
    pizze = pizze.filter((p) => p.gusto != 'Hawayana');
}
//eliminaDaArray2()
//aggiornare array
function aggiornaArray() {
    let indexById = pizze.findIndex((p) => p.id == 3); //qui cerco l'elemento per id se voglio
    let pizzaSostitutiva = {
        id: 3,
        gusto: 'Hawayana',
        prezzo: 300,
        disponibile: false
    };
    pizze.splice(indexById, 1, pizzaSostitutiva);
}
function aggiornaArray2() {
    pizze = pizze.map((p) => {
        if (p.id == 2)
            p.disponibile = true;
        return p;
    });
}
aggiornaArray2();
console.log(pizze);
//# sourceMappingURL=array.js.map