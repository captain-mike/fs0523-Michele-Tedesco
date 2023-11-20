
//funzione che restituisce un dato numerico ed accetta due parametri numerici
function somma(a:number, b:number):number{
    return a + b
}


let sum:number = somma(2,4);
console.log(sum);


//con void indico che la funzione non restituisce dati
function mostraSomma(a:number, b:number = 0):void{
    console.log(a+b);


}

mostraSomma(2,7);


function sommaErrori(a:number, b:number):number|never{
    
    if(a > 100) throw new Error('Il parametro a è troppo grande');

    return a + b
}


let sommaFreccia = (a:number, b:number):number =>{
    return a + b
}