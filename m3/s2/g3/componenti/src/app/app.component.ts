import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('elemento') elementoCercato!:ElementRef;

  title = 'componenti';

  ngAfterViewInit(){
    console.log(this.elementoCercato.nativeElement.innerText);
    this.elementoCercato.nativeElement.innerText = 'Hello World'
  }
}
