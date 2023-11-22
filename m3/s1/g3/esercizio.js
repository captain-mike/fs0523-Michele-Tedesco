"use strict";
class CalcoloTasse {
    constructor(reddAnnuo = 0, codRedd) {
        this.reddAnnuo = reddAnnuo;
        this.codRedd = codRedd;
        this.tasseIrpef = 15;
        this.tasseInps = 24;
    }
    ;
}
class WebDeveloper extends CalcoloTasse {
    constructor(reddAnnuo = 0) {
        super(reddAnnuo, 78);
        this.reddAnnuo = reddAnnuo;
    }
    getUtileTasse() {
        throw new Error("Method not implemented.");
    }
    getTasseInps() {
        throw new Error("Method not implemented.");
    }
    getTasseIrpef() {
        throw new Error("Method not implemented.");
    }
    getReddAnnuoNetto() {
        return this.reddAnnuo * this.codRedd / 100;
    }
}
let mario = new WebDeveloper(55000);
console.log(mario.getReddAnnuoNetto());
