class User{
    private account!:Conto;
    constructor(private id:number, private nome:string, private cognome:string){}
    getUserInfo(){
        return `${this.nome} ${this.cognome}`
    }

    addAccount(account:Conto):void{
        this.account = account;
    }

    getAccountBalance(){
        return this.account.getBalance
    }
}

class Conto{
    public id!:number;
    private balance:number = 0;
    constructor(private owner:User){
        console.log(this.owner.getUserInfo())
    }
    get getBalance(){
        return this.balance
    }
}

let utente = new User(1,'Mario','Rossi');

let c = new Conto(utente);

utente.addAccount(c)

console.log(c, utente);

class Banca{
    private users:User[] = []
}
