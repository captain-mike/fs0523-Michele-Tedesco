enum TipoLibro{
    Romanzo = 'Romanzo',
    Saggio = 'Saggio',
    Fantasy = 'Fantasy',
    Biografia = 'Biografia'
}

//in mancanza di valori vengono assegnati valori numerici

console.log(TipoLibro);
console.log(TipoLibro.Romanzo);

enum Color{
    Red,
    Blue,
    Yellow
}
console.log(Color);//in questo caso ai colori viene assegnato un valore numerico, che si incrementa come quello degli array
console.log(Color.Blue);//La lettura di un membro restituirà il suo indice
console.log(Color['0']);//vengono creati anche indici numerici per ogni membro, da cui è possibile accedere alla rispettiva chiave

