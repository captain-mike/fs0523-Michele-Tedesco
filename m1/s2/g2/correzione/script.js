/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
{
    let x = 5;
    let y = 15;

    if(x > y){
        console.log(x);
    }else if(y > x){
        console.log(y);
    }else{
        console.log('Numeri uguali');
    }
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
{

    let x = 8;

    if(x !== 5){
        console.log('not equal');
    }

}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{

    let x = 10;

    if(x % 5 === 0){//se x diviso 5 mi da un resto pari a zero
        console.log("divisibile per 5");
    }

}