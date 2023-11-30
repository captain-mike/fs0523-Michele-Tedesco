import { Component } from '@angular/core';
import { Pizza } from '../../Models/pizza';
import { PizzaService } from '../../pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(
    private pizzaSvc:PizzaService,
    private router:Router
    ){}

  newPizza:Partial<Pizza> = {
    active:'0'
  };

  oldPizza:Pizza|null = null;

  loading:boolean = false;

  save(){
    this.loading = true;
    this.newPizza.active = Boolean(Number(this.newPizza.active));
    this.pizzaSvc.create(this.newPizza).then(res => {
      this.loading = false
      this.oldPizza = res;

      // setTimeout(()=>{
      //   this.router.navigate(['/'])
      // },3000)
    })
  }

}
