{

    let user:{name:string, lastName:string} = {
        name:'Mario',
        lastName:'Rossi'
    }

    type User = {
        name:string, 
        lastName:string
    }
    type Student = {
        materie:string[]
    }
    let user2:User = {
        name: "",
        lastName: ""
    }

    //combinable
    type numberOrString = number|string|boolean

    let n:numberOrString = 0;
    let x:numberOrString = 'Prova';

    //intercection type
    type UserStudent = User & Student;

    let studente:UserStudent = {
        name:'Mario',
        lastName:'Rossi',
        materie:[]
    }

}