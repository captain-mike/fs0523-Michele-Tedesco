import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  form!:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){

    this.form = this.fb.group({//il form
      nome: this.fb.control(null,[Validators.required]),//campo nome
      cognome: this.fb.control(null,[Validators.required]),//campo cognome
      sports: this.fb.array([]),
      authData: this.fb.group({
        email: this.fb.control(
          null, //valore
          [Validators.required, Validators.email, this.emailProibiteValidator], //validatori sincroni
          this.emailEsistente//validator asincroni
          ),
        password: this.fb.control(null,[Validators.required])
      })
    })

  }


  addSport(){
    let control = new FormControl(null);
    (this.form.get('sports') as FormArray).push(control)
  }

  getSports(){
    return  (this.form.get('sports') as FormArray).controls || 0
  }

  emailProibite:string[] = ['emilio@plances.it','giulio.marinelli@icloud.com'];

  //validatore custom sincrono
  emailProibiteValidator = (formC:FormControl):ValidationErrors|null => {//formC sarà il campo a cui si collega il validatore

    if(this.emailProibite.includes(formC.value)){
      return {//restituisce un oggetto contenente i dettagli della validazione
        invalid: true,
        message: 'Non puòhh entrarehhhh!!'
      }
    }
    return null;//null significa che non ci sono errori

  }

  emailEsistente(formC:AbstractControl){

    return new Promise<ValidationErrors|null>((resolve, reject) => {

      setTimeout(() => {

        if(formC.value == 'admin@admin.it'){

          resolve({//restituisce un oggetto contenente i dettagli della validazione
            invalid: true,
            message: 'Non puòhh entrarehhhh!! (email già presente)'
          })

        }

        reject(null)


      },2000)

    });

  }


  isValid(fieldName:string){
    return this.form.get(fieldName)?.valid
  }

  isTouched(fieldName:string){
    return this.form.get(fieldName)?.touched
  }

  isValidAndTouched(fieldName:string){
    return this.isValid(fieldName) && this.isTouched(fieldName)
  }

  getErrors(fieldName:string){
    return this.form.get(fieldName)?.errors
  }

  getCustomMessage(fieldName:string){
    if(this.form.get(fieldName)?.errors) return ''

    return this.form.get(fieldName)?.errors!['message']
  }

  send(){
    console.log(this.form.value);

  }


}
