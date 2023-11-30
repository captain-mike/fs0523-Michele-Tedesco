import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../../pizza.service';
import { Pizza } from '../../Models/pizza';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  constructor(
    private route: ActivatedRoute,//per ottenere dati sulla rotta attiva
    private pizzaSvc:PizzaService
    ){}

  pizza!:Pizza;

  ngOnInit(){
    //usa questo per leggere il parametro id nell'url
    this.route.params.subscribe((params:any) => {

      this.pizzaSvc.getById(params.id).then(res => this.pizza = res)

    })

  }

  save(){
    this.pizzaSvc.update(this.pizza).then( res => {

    })
  }
}
