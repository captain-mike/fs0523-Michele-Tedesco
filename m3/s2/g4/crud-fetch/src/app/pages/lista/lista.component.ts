import { Component } from '@angular/core';
import { Pizza } from '../../Models/pizza';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
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
