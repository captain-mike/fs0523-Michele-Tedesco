import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';

  pizze:any = [
    {
      gusto:'Margherita',
      prezzo:5
    },
    {
      gusto:'Diavola',
      prezzo:1
    },
    {
      gusto:'Capricciosa',
      prezzo:7
    }
  ]




}
