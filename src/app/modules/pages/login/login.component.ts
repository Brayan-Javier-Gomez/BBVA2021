import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent{

  dataFormulario:FormGroup = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['' , [Validators.required, Validators.minLength(5)]]

  });

  constructor( private fb:FormBuilder) { }


  login(){
    console.log(this.dataFormulario.value)
    console.log(this.dataFormulario.valid)
  }

}
