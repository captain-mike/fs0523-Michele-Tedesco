function Logger(constructor:Function){
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class Person{
    
    name = 'Mario';

    constructor(){
        console.log('Persona creata');
    }
}

const persona = new Person();
console.log(persona);
