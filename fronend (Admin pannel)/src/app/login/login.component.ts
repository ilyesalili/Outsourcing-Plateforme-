import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
export interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: any;

  constructor(
    private routee: Router,
    private formbuild:FormBuilder,
   
  ) {
    this.form = this.formbuild.group({
      email: new FormControl([], [Validators.required, Validators.email]),
      password: new FormControl([], [Validators.required]),
    });
  }

  signIn() {
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    let user:User={email:email,password:password}
    axios.post(`http://localhost:7777/auth/signin`,user)
    .then(res=>{
      localStorage.setItem('Token',res.data)
      this.routee.navigate(['/admin']);
      console.log(res)
    }).catch(err=>console.log(err))
  }

  show: boolean = false;

  toggleShow() {
    this.show = !this.show;
  }
  GoToSignUp() {
    this.routee.navigate(['/join']);
  }
  GoToReset() {
    this.routee.navigate(['/login/resetpassword']);
  }

}
