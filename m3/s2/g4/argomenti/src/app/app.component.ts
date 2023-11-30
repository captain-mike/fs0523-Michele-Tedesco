import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'argomenti';

  arr:any[] = [
    {
      nome:'Mario',
      cognome:'Rossi'
    },
    {
      nome:'Maria',
      cognome:'Bianchi'
    }
  ]

  prezzo:number = 5;


  oggi:Date = new Date();

  testo:string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos distinctio nihil provident. Magnam fugit accusantium iusto sed placeat iure totam, consectetur corrupti ipsum aspernatur id cum inventore quasi unde neque?';

}
