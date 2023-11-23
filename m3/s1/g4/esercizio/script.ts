const url = 'menu.json';
type Pizza = {
    id:number,
    gusto:string,
    prezzo:number,
    disponibile:boolean
}

class PizzaC{

    id!:number;
    constructor(
        public gusto:string,
        public prezzo:number,
        public disponibile:boolean,
    ){}

    getData(pizza:PizzaC){
        //metodo che destruttura ed assegna i dati
        ({
            id: this.id, 
            gusto: this.gusto, 
            prezzo: this.prezzo, 
            disponibile: this.disponibile,
        } = pizza);
    }
}




fetch(url).then(res => res.json())
.then((data:Pizza[]) => {

    data.forEach(element => {
        
    });
    
})

async function call(){
    let res = await fetch(url)
    let data:Pizza[] = await res.json();
}