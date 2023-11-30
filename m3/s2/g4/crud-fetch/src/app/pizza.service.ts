import { Injectable } from '@angular/core';
import { Pizza } from './Models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  apiUrl:string = 'http://localhost:3000/pizze';

  getAll():Promise<Pizza[]>{
    return fetch(this.apiUrl).then(res => res.json())
  }

  getById(id:string):Promise<Pizza>{
    return fetch(this.apiUrl+`/${id}`).then(res => res.json())
  }

  create(pizza:Partial<Pizza>):Promise<Pizza>{
    pizza = this.toBoolean(pizza);
    return fetch(this.apiUrl,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(pizza)
    }).then(res => res.json())
  }

  update(pizza:Pizza):Promise<Pizza>{
    pizza = this.toBoolean(pizza);
    return fetch(this.apiUrl+`/${pizza.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(pizza)
    }).then(res => res.json())
  }

  delete(id:string):Promise<Pizza>{
    return fetch(this.apiUrl+`/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
  }

  toBoolean<T>(pizza:Partial<Pizza>){
    pizza.active = Boolean(Number(pizza.active));
    return pizza as T
  }

}
