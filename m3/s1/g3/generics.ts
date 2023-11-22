{
//utilizzo su interface
interface KeyPair<T,U>{
    key:T;
    value:U;
}


let test:KeyPair<string, number> = {
    key: "",
    value: 0
}

let test2:KeyPair<string[],boolean> = {
    key:['a','b','c'],
    value:true
}

//utilizzo su class
class Prova<T>{
    x!:T;
}

let istanzaProva = new Prova<string>();//la prop x è diventata di tipo string

//utilizzo su function

function sommaConcatena<T>(a:T, b:T):T{
    return (a as any) + (b as any);
}

sommaConcatena<string>('Hello ','World!');//concatenamento
sommaConcatena<number>(5,5);//somma


}