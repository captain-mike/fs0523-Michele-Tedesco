import { Component } from '@angular/core';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrl: './eventi.component.scss'
})
export class EventiComponent {

  show:boolean = true

  showAlert(){
    alert('Lanciato')
  }

  showCustomAlert(message:string){
    alert(message)
  }

  toggleShow(){
    this.show = !this.show
  }

  analizzaEvento(event:Event){
    console.log(event);

  }

}
