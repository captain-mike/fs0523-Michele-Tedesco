console.log('script 1 funziona');

//commento ad una sola riga
/**
 * commento su
 * tante righe
 */


//tipizzazione FORTE
let numero:number = 0;
let stringa:string = 'Hello World!';
let booleano:boolean = false;
let arrayStringhe:string[] = ['sdsd'];
let arrayNumeri:number[] = [0,1,2,3];
let oggetto:{} = {};
let nonDefinita:undefined;
let nullo:null = null;


let test:number|undefined;
if(true){
    test = 0;
}else{
    test = 1;
}
console.log(test);

//tipizzazione basata su classi

let now:Date = new Date();

//ATTENZIONE A NON ABUSARNE
let variabile:any = 0;

variabile = [];
variabile = 'ciao';
variabile = true;
variabile = new Date();


