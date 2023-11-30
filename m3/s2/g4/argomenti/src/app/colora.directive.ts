import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective {

  constructor(
    private ref:ElementRef
  ) { }

  @Input() colore:string = 'red';

  @HostListener('click') onClick(){
    this.ref.nativeElement.style.color = 'purple';
  }

  @HostListener('window:scroll',['$event']) onScroll(){
    console.log(this.ref.nativeElement.getBoundingClientRect())
  }

  ngOnInit(){
    console.log(this.ref.nativeElement);
    this.ref.nativeElement.style.color = this.colore;
  }

}
