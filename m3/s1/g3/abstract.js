"use strict";
class Veicolo {
    constructor(modello, marca, nRuote, maxVel) {
        this.modello = modello;
        this.marca = marca;
        this.nRuote = nRuote;
        this.maxVel = maxVel;
        this.vel = 0;
    }
    accelera() {
        this.vel++;
    }
    frena() {
        this.vel--;
    }
}
class Bicicletta extends Veicolo {
    constructor(modello, marca) {
        super(modello, marca, 2, 40);
        this.modello = modello;
        this.marca = marca;
    }
    montaRotelle() {
        this.nRuote = 4;
    }
    smontaRotelle() {
        this.nRuote = 2;
    }
}
let bici = new Bicicletta('qualcosa', 'Scott');
bici.accelera();
class Automobile extends Veicolo {
    constructor(modello, marca, maxVel, nPorte) {
        super(modello, marca, 4, maxVel);
        this.modello = modello;
        this.marca = marca;
        this.maxVel = maxVel;
        this.nPorte = nPorte;
    }
}
let fiat500 = new Automobile('500', 'Fiat', 150, 3);
