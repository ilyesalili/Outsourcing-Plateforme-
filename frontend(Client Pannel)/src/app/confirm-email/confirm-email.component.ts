import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { OtpAction } from '../store/SignUp/signup.action';
import { SignUpService } from '../store/SignUp/signup.service';
import { Observable, map } from 'rxjs';
import { UserState } from '../store/SignUp/signup.state';
import { User } from '../store/SignUp/signup.model';
import { Role } from '../store/Login/login.model';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss'],
})
export class ConfirmEmailComponent implements OnInit {
  form: any;
  @Select(UserState.getTokenId) user_id$: Observable<string>;
  @Select(UserState.getUser) user$:User;
  constructor(
    private formbuild: FormBuilder,
    private store: Store,
    private srvc: SignUpService
  ) {
    this.form = this.formbuild.group({
      code1: new FormControl([], [Validators.required]),
      code2: new FormControl([], [Validators.required]),
      code3: new FormControl([], [Validators.required]),
      code4: new FormControl([], [Validators.required]),
      code5: new FormControl([], [Validators.required]),
      code6: new FormControl([], [Validators.required]),
    });
  }

  codeFields: any[] = [];
  id: any;
  role:Role
  ngOnInit() {
    this.codeFields = [
      document.getElementById('code1'),
      document.getElementById('code2'),
      document.getElementById('code3'),
      document.getElementById('code4'),
      document.getElementById('code5'),
      document.getElementById('code6'),
    ];
    this.codeFields.forEach((field, index) => {
      field.addEventListener('input', (event: any) => {
        this.handleInput(event, index);
      });
    });
    this.user_id$.pipe(
      map((tokenId: string) => {
        this.id=tokenId
        // Process the tokenId here
        console.log('Token ID:', tokenId);
      })
    ).subscribe();
    this.role=this.user$.role
  }
  finalCode: string = '';

  handleInput(event: any, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const pattern = /^[0-9]{1}$/;
  
    if (pattern.test(value)) {
      if (index < this.codeFields.length - 1) {
        this.codeFields[index + 1].focus();
      }
      const code = this.codeFields.map((field) => field.value).join('');
      this.finalCode = code; 
  
    }
  }

  GoToNewRegister() {
    this.store.dispatch(
      new OtpAction({ otp: this.finalCode, tokenId: this.id })
    );
  }
  GoToNewPassword() {
    this.srvc.VerifyOtp({

      otp: this.codeFields.toString(),
      tokenId: this.id,
    });
  }
}
