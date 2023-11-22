"use strict";
class User {
    constructor(id, nome, cognome) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
    }
    getUserInfo() {
        return `${this.nome} ${this.cognome}`;
    }
    addAccount(account) {
        this.account = account;
    }
    getAccountBalance() {
        return this.account.getBalance;
    }
}
class Conto {
    constructor(owner) {
        this.owner = owner;
        this.balance = 0;
        console.log(this.owner.getUserInfo());
    }
    get getBalance() {
        return this.balance;
    }
}
let utente = new User(1, 'Mario', 'Rossi');
let c = new Conto(utente);
utente.addAccount(c);
console.log(c, utente);
class Banca {
    constructor() {
        this.users = [];
    }
}
