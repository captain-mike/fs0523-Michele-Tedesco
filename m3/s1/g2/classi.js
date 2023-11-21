"use strict";
class Veicolo {
    constructor(_nRuote, _maxVel, _tipo) {
        this._tipo = _tipo;
        this.vel = 0;
        this.test = 0;
        this.nRuote = _nRuote;
        this.maxVel = _maxVel;
        this.tipo = _tipo;
        console.log('Istanziata');
    }
    accelera(n = 1) {
        this.vel += n;
    }
    frena() {
        if (this.vel > 0)
            this.vel--;
    }
    getSpeed() {
        return this.vel;
    }
}
Veicolo.tipiVeicolo = ['Bicicletta', 'Auto', 'Moto'];
console.log(Veicolo.tipiVeicolo);
let veicolo = new Veicolo(4, 120, 'Auto');
veicolo.accelera();
veicolo.accelera(5);
console.log(veicolo.getSpeed());
class Automobile extends Veicolo {
    constructor(_maxVel, _nPorte, _tipoCambio) {
        super(4, _maxVel, 'Auto');
        this.nPorte = _nPorte;
        this.tipoCambio = _tipoCambio;
    }
    setAriaCondizionata() {
        this.ariaCondizionata = !this.ariaCondizionata;
    }
    accelera(n = 20) {
        this.vel += n;
    }
}
let auto = new Automobile(180, 3, 'Manuale');
auto.accelera(30);
console.log(auto);
//# sourceMappingURL=classi.js.map