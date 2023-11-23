type toDo = {
    completed:boolean,
    id:number,
    title:string,
    userId:number
}

async function call():Promise<toDo[]>{
    let res:Response = await fetch('todo.json');
    let data:toDo[] = await res.json()

    //data.forEach(todo => console.log(todo.title)  )

    return data;
}
call();

async function init(){
    let todo = await call();

    console.log(todo);
}

init()