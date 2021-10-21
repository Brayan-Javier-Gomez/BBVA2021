import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicsService } from 'src/app/core/services/basics/basics.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent{

  dataRegister:FormGroup = this.fb.group({
    firstname:['',  [Validators.required]],
    lastname:['',  [Validators.required]],
    email:['' , [Validators.required, Validators.email]],
    password:['',  [Validators.required, Validators.minLength(4)]]
  })

  constructor(
    private fb :FormBuilder, 
    private router:Router,
    private basicService: BasicsService,
    ) { }

  register(){
    console.log(this.dataRegister.value)
    this.basicService.registerAjax(this.dataRegister.value).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("/dashboard")
      }
    )
  }

}
