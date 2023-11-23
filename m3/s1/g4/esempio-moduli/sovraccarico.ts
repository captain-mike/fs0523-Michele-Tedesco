function sommaConcatena(a:number, b:number):number;
function sommaConcatena(a:string, b:string):string;
function sommaConcatena(a:any, b:any){
    return a + b
}

sommaConcatena(2,2);
sommaConcatena('Hello ','World');


function sommaConcatena2<T>(a:T, b:T):T{
    return (a as any) + (b as any)
}

sommaConcatena2<number>(2,2);