import { Component, ContentChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.scss'
})
export class ProjectionComponent {

  @ContentChild('elementoProiettato') elemento!:ElementRef;


  ngAfterViewInit(){
    console.log(this.elemento.nativeElement);

  }

}
