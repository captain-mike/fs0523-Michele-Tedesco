interface IUtente{
    //è assolutamente vietato l'assegnamento
    nome:string;
    cognome:string;
    anni:number;

    //è assolutamente vietata l'implementazione del metodo
    presentazione():string
}




class Utente implements IUtente{
    constructor(
       public nome: string,
       public cognome: string,
       public anni: number
    ){}
    presentazione(): string {
        return `Ciao sono ${this.nome} ${this.cognome} ed ho ${this.anni}`
    }

}

interface IStudente{
    materie:string[];
}

class Studente implements IUtente, IStudente{
    constructor(
        public nome: string,
        public cognome: string,
        public anni: number
     ){}
    
    materie: string[] = [];

    presentazione(): string {
        throw new Error("Method not implemented.");
    }

}