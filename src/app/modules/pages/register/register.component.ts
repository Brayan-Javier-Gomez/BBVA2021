import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent{

  dataRegister:FormGroup = this.fb.group({
    name:['',  [Validators.required]],
    email:['' , [Validators.required, Validators.email]],
    password:['',  [Validators.required, Validators.minLength(4)]]
  })

  constructor(private fb :FormBuilder ) { }

  register(){
    console.log(this.dataRegister.value)
    console.log(this.dataRegister.valid)
  }

}
