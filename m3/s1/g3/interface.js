"use strict";
class Utente {
    constructor(nome, cognome, anni) {
        this.nome = nome;
        this.cognome = cognome;
        this.anni = anni;
    }
    presentazione() {
        return `Ciao sono ${this.nome} ${this.cognome} ed ho ${this.anni}`;
    }
}
class Studente {
    constructor(nome, cognome, anni) {
        this.nome = nome;
        this.cognome = cognome;
        this.anni = anni;
        this.materie = [];
    }
    presentazione() {
        throw new Error("Method not implemented.");
    }
}
let user; //le interfacce si possono usare per tipizzare
