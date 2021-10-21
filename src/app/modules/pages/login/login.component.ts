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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private basicService: BasicsService,
    ) { }


  login() {
    console.log(this.dataFormulario.value);
    this.basicService.loginAuth(this.dataFormulario.value).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("/dashboard");
      }
    )
    
  }

}
