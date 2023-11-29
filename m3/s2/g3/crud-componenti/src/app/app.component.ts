import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  visibile:boolean = true

  toggleVisibility(evento:string){
    console.log(evento);

    this.visibile = !this.visibile;
  }

}
