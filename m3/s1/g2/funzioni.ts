function somma(a:number = 0, b:number = 0):number{ 
    return a + b;
}

function concatena(a:string, b:string):string{ 
    return a + b;
}

function dividi(parola:string):string[]{
    return parola.split('');
}

dividi('Ciao');//['C','i','a','o']