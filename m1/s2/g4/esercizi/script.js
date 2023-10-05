/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2){
    return l1 * l2;
}

console.log( area(2,5) );
console.log( area(4,5) );

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1,n2){
    let sum = n1 + n2;

    return n1 === n2 ? sum * 3 : sum;
}

// function crezySum(n1,n2){
//     if(n1 === n2){
//         return (n1 + n2) * 3;
//     }
//     return n1 + n2;
    
// }

console.log(crazySum(4,4));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
let boundary = n => (n > 20 && n <= 100) || n === 400;


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa){
    if(stringa.startsWith('EPICODE')){
        return stringa;
    }else{
        return 'EPICODE' + stringa;
    }
}

console.log(epify('EPICODEKLDJFHGSJDKHF'));
console.log(epify('KLDJFHGSJDKHF'));

