abstract class CalcoloTasse{

    tasseIrpef: number = 15;
    tasseInps: number = 24;

    constructor(
        protected reddAnnuo:number = 0,
        protected codRedd:number
        ){};
    
    abstract getUtileTasse():number
    abstract getTasseInps():number
    abstract getTasseIrpef():number
    abstract getReddAnnuoNetto():number

}

class WebDeveloper extends CalcoloTasse{


    constructor(protected reddAnnuo:number = 0){
        super(reddAnnuo,78);
    }

    getUtileTasse(): number {
        throw new Error("Method not implemented.");
    }
    getTasseInps(): number {
        throw new Error("Method not implemented.");
    }
    getTasseIrpef(): number {
        throw new Error("Method not implemented.");
    }
    getReddAnnuoNetto(): number {
        return this.reddAnnuo * this.codRedd / 100
    }
}

let mario = new WebDeveloper(55000);

console.log(mario.getReddAnnuoNetto());
