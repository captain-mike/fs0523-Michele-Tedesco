class Veicolo{

    //nRuote!:number; la sintassi ! spegne gli errori, quindi il dato mancante è permesso, ma abbiamo la responsabilità di assicurarci la sua esistenza
    public nRuote:number;
    public maxVel:number;
    public tipo:string;
    protected vel:number = 0;

    private test:number = 0;

    static tipiVeicolo:string[] = ['Bicicletta','Auto','Moto'];

    constructor(_nRuote:number, _maxVel:number, readonly _tipo:string){
        this.nRuote = _nRuote;
        this.maxVel = _maxVel;
        this.tipo = _tipo;

        console.log('Istanziata')
    }

    public accelera(n:number = 1):void{
        this.vel += n 
    }
    
    public frena():void{
        if(this.vel > 0)    this.vel--
    }

    public getSpeed():number{
        return this.vel
    }

}

console.log(Veicolo.tipiVeicolo)


let veicolo:Veicolo = new Veicolo(4,120,'Auto');

veicolo.accelera()
veicolo.accelera(5)

console.log(veicolo.getSpeed());


class Automobile extends Veicolo{
    nPorte:number;
    tipoCambio:string;
    protected ariaCondizionata!:boolean;

    constructor(_maxVel:number, _nPorte:number, _tipoCambio:string){
        super(4,_maxVel,'Auto');
        this.nPorte = _nPorte;
        this.tipoCambio = _tipoCambio
    }

    setAriaCondizionata(){
        this.ariaCondizionata = !this.ariaCondizionata
    }

    public accelera(n:number = 20):void{
        this.vel += n 
    }
}

let auto = new Automobile(180,3,'Manuale');

auto.accelera(30)
console.log(auto);
