import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SignUp } from '../store/SignUp/signup.action';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: any;
  selectedRole: any;

  constructor(
    private formbuild: FormBuilder,
    private store: Store,
    private active: ActivatedRoute,
    private route: Router,
    private load:DataService
  ) {
    this.form = this.formbuild.group(
      {
        email: new FormControl([], [Validators.required, Validators.email]),
        password: new FormControl(
          [],
          [Validators.required, Validators.minLength(6)]
        ),
        confirm_password: new FormControl([], Validators.required),
      },
      { validator: this.Passwords }
    );
  }
  loading:boolean=false
  ngOnInit(): void {
    this.selectedRole = this.active.snapshot.params;
    console.log(this.selectedRole);
  }
  Passwords(group: FormGroup) {
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['confirm_password'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

  show: boolean = false;
  isshow: boolean = false;

  toggleShow() {
    this.show = !this.show;
  }

  GoToLogIn() {
    this.route.navigate(['/login']);
  }
  CreateUSer() {
    this.loading=true
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    this.store.dispatch(
      new SignUp({
        email: email,
        password: password,
        role: this.selectedRole.role,
      })
    );
  }
}
