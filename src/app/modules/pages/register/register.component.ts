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
  rememberMe: boolean;
  
  constructor(
    private fb :FormBuilder, 
    private router:Router,
    private basicService: BasicsService,
    ) { 
      this.rememberMe = true;
    }

  register(){
    console.log(this.dataRegister.value)
    this.basicService.registerAjax(this.dataRegister.value).subscribe(
      data => {
        if ( data['status'] ){
          const userName = data['user'].first_name + data['user'].last_name;
          const idUser = data['user'].id;
          const token = data['rest'].access_token;
          const refreshToken = data['rest'].refresh_token;
          window.localStorage.setItem('login','login');
          localStorage.setItem('idUser', idUser.toString());
          localStorage.setItem('userName', userName);
          localStorage.setItem('token', token.toString());
          window.localStorage.setItem('remember_me', this.rememberMe.toString());
        }
        this.router.navigateByUrl("/dashboard")
      }
    )
  }

}
