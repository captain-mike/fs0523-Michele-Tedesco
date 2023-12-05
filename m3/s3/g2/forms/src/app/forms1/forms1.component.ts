import { Component } from '@angular/core';

type formObj = {
  nome:string
  cognome:string
}

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrl: './forms1.component.scss'
})
export class Forms1Component {

  formObj:formObj = {
    nome : '',
    cognome : ''
  }

  submit(){
      //INVIA this.formObj attraverso una chiamata http o fanne quel che ti occorre
  }

}
