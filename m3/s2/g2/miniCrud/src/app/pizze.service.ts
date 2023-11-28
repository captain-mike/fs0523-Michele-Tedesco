import { Injectable } from '@angular/core';
import { IPizza } from './Models/i-pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

  pizze:IPizza[] = [
      {
        "id":0,
        "gusto":"Margherita",
        "prezzo":5,
        "disponibile":true
      },
      {
        "id":1,
        "gusto":"Diavola",
        "prezzo":1,
        "disponibile":true
      },
      {
        "id":2,
        "gusto":"Hawaiana",
        "prezzo":500,
        "disponibile":false
      }
  ];

  getActivePizza(){
    return this.pizze.filter(p => p.disponibile)
  }
  getInactivePizza(){
    return this.pizze.filter(p => !p.disponibile)
  }

}
