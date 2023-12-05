import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

type formObj = {
  nome:string
  cognome:string
}

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrl: './forms2.component.scss'
})
export class Forms2Component {

  @ViewChild('f',{static:true}) form!:NgForm;

  emailRegEx = "[a-z]{2,15}@[a-z]{2,15}.[a-z]{2,7}"

  generi:string[] = [
    'uomo',
    'donna',
    'non definito'
  ];


  isEmail(input:NgModel){
    if(input.errors){
      return input?.errors['pattern'] && input.dirty
    }
    return false;
  }

  isEmpty(input:NgModel){
    return !input.value && input.dirty
  }

  submit(form:NgForm){

    console.log(this.form)
    console.log(form)
    console.log(form.value)

    form.reset()

  }

  setDati(){
    let datiDaInserire = {
      nome:'Mario',
      cognome:'Rossi',
    }

    console.log(this.form)

    this.form.form.patchValue(datiDaInserire)
    //this.form.form.setValue(datiDaInserire)
  }

}
