import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicsService } from 'src/app/core/services/basics/basics.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  dataFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]

  });
  rememberMe: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private basicService: BasicsService,
    ) { 
      this.rememberMe = true;
    }


  login() {
    console.log(this.dataFormulario.value);
    this.basicService.loginAuth(this.dataFormulario.value).subscribe(
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
        this.router.navigateByUrl("/dashboard");
      }
    )
    
  }

}
