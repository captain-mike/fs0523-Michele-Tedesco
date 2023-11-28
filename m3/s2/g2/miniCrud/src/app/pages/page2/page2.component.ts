import { Component } from '@angular/core';
import { IPizza } from '../../Models/i-pizza';
import { PizzeService } from '../../pizze.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {

  pizze:IPizza[] = [];

  constructor(private pizzeSvc:PizzeService){}

  //è un metodo di engular, si avvia da solo quando viene inizializzata la classe
  ngOnInit(){
    this.pizze = this.pizzeSvc.pizze
  }

}
