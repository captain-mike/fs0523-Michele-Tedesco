"use strict";
var TipoLibro;
(function (TipoLibro) {
    TipoLibro["Romanzo"] = "Romanzo";
    TipoLibro["Saggio"] = "Saggio";
    TipoLibro["Fantasy"] = "Fantasy";
    TipoLibro["Biografia"] = "Biografia";
})(TipoLibro || (TipoLibro = {}));
//in mancanza di valori vengono assegnati valori numerici
console.log(TipoLibro);
console.log(TipoLibro.Romanzo);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
console.log(Color); //in questo caso ai colori viene assegnato un valore numerico, che si incrementa come quello degli array
console.log(Color.Blue); //La lettura di un membro restituirà il suo indice
console.log(Color['0']); //vengono creati anche indici numerici per ogni membro, da cui è possibile accedere alla rispettiva chiave
