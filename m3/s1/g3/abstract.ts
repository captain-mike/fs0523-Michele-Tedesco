abstract class Veicolo{
    public vel:number = 0;
    constructor(
        public modello:string,
        public marca:string,
        public nRuote:number,
        public maxVel:number
    ){}

    abstract accelera():void
    
    frena(){
        this.vel--;
    }
}


class Bicicletta extends Veicolo{

    constructor(public modello:string, public marca:string){
        super(modello,marca,2,40);
    }

    accelera(){
        this.vel++;
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
    constructor(public modello:string, public marca:string, public maxVel:number, public nPorte:number){
        super(modello,marca,4,maxVel);
    }
    accelera(){
        this.vel += 10;
    }
}

let fiat500 = new Automobile('500','Fiat',150, 3);


