class Veicolo{
    public vel:number = 0;
    constructor(
        public modello:string,
        public marca:string,
        public nRuote:number,
        public maxVel:number
    ){}

    accelera(){
        this.vel++;
    }
    frena(){
        this.vel--;
    }
}

class Bicicletta extends Veicolo{
    constructor(public modello:string, public marca:string){
        super(modello,marca,2,40);
    }
    montaRotelle(){
        this.nRuote = 4;
    }
    smontaRotelle(){
        this.nRuote = 2;
    }
}

let bici = new Bicicletta('qualcosa','Scott');
bici.accelera();

class Automobile extends Veicolo{
    constructor(public modello:string, public marca:string, public maxVel:number){
        super(modello,marca,4,maxVel);
    }
}

let fiat500 = new Automobile('500','Fiat',150);

