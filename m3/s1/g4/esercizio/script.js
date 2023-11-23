"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'menu.json';
class PizzaC {
    constructor(gusto, prezzo, disponibile) {
        this.gusto = gusto;
        this.prezzo = prezzo;
        this.disponibile = disponibile;
    }
    getData(pizza) {
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
    .then((data) => {
    data.forEach(element => {
    });
});
function call() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch(url);
        let data = yield res.json();
    });
}
