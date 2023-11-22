"use strict";
{
    let test = {
        key: "",
        value: 0
    };
    let test2 = {
        key: ['a', 'b', 'c'],
        value: true
    };
    //utilizzo su class
    class Prova {
    }
    let istanzaProva = new Prova(); //la prop x è diventata di tipo string
    //utilizzo su function
    function sommaConcatena(a, b) {
        return a + b;
    }
    sommaConcatena('Hello ', 'World!'); //concatenamento
    sommaConcatena(5, 5); //somma
}
