import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private fb :FormBuilder, private router:Router ) { }

  register(){
    console.log(this.dataRegister.value)
    this.router.navigateByUrl("/dashboard")
  }

}
