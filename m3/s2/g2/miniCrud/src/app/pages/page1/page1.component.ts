import { Component, OnInit } from '@angular/core';
import { IPizza } from '../../Models/i-pizza';
import { PizzeService } from '../../pizze.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component implements OnInit {

  pizze:IPizza[] = [];

  constructor(private pizzeSvc:PizzeService){}

  //è un metodo di engular, si avvia da solo quando viene inizializzata la classe
  ngOnInit(){
    this.pizze = this.pizzeSvc.pizze
  }


}
