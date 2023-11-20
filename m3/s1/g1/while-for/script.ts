let i:number = 0;
while(i < 10){

    console.log(i);    
    i++;
}

console.error('============================')

for(let x:number = 0;x < 10;x++){
    if(x == 5) continue;//salto all'iterazione successiva se la condizione è vera

    console.log(x);    
}


let pizze:string[] = ['Margherita','Diavola','Capricciosa'];//length = 3

console.log('lettura di una sola pizza:' + pizze[0]);//margherita


for(let y = 0;y < pizze.length;y++){
   if(pizze[y] == 'Diavola') continue;

    console.log(pizze[y]);    
}
console.error('============================ risultato del for of')
//per ciclare un array abbiamo cicli più adatti
for(let pizza of pizze){
    console.log(pizza);    
}

console.error('============================ risultato del forEach')

pizze.forEach((pizza:string) => console.log(pizza));




