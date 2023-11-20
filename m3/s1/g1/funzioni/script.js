"use strict";
//funzione che restituisce un dato numerico ed accetta due parametri numerici
function somma(a, b) {
    return a + b;
}
let sum = somma(2, 4);
console.log(sum);
//con void indico che la funzione non restituisce dati
function mostraSomma(a, b = 0) {
    console.log(a + b);
}
mostraSomma(2, 7);
function sommaErrori(a, b) {
    if (a > 100)
        throw new Error('Il parametro a è troppo grande');
    return a + b;
}
let sommaFreccia = (a, b) => {
    return a + b;
};
