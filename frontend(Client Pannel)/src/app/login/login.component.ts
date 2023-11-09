import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SignIn } from '../store/Login/login.action';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: any;

  constructor(
    private formbuild: FormBuilder,
    private routee: Router,
    private store: Store,
    private srvc:DataService
  ) {
    this.form = this.formbuild.group({
      email: new FormControl([], [Validators.required, Validators.email]),
      password: new FormControl([], [Validators.required]),
    });
  }

  signIn() {
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    if(this.store.dispatch(new SignIn({ email: email, password: password }))){
    }
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
