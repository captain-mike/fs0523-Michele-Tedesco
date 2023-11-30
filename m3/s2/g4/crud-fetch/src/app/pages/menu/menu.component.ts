import { Component } from '@angular/core';
import { Pizza } from '../../Models/pizza';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  pizze:Pizza[] = [];

  constructor(private pizzaSvc:PizzaService){}

  ngOnInit(){
    this.pizzaSvc.getAll().then(pizze => this.pizze = pizze)
  }

  delete(id:string|undefined){
    if(!id) return //blocca la funzione

    this.pizzaSvc.delete(id).then(res => {

      this.pizze =  this.pizze.filter(p => p.id != id);

       alert(`Pizza con id ${id} eliminata`)
    })
  }

}
