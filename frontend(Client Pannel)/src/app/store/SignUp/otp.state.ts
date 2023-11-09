import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Injectable, NgZone } from '@angular/core';
import { Otp } from './signup.model';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { OtpAction, OtpError, OtpSuccess } from './signup.action';
import { Role } from '../Login/login.model';
import jwt_decode from 'jwt-decode';

export interface OtpStateModel {
  otp_send: Otp | null;
  user_id:any
}
@State<OtpStateModel>({
    name: 'Otp_user',
    defaults: {
      otp_send: null,
      user_id:null
    },
  })
@Injectable()
export class OtpState {
    constructor(private signUpsrvc:SignUpService,
      private route:Router,
      private ngZone: NgZone,
      // private localStorageService: LocalStorageService
      ) {}
    @Selector()
    static getUser_otp(state: OtpStateModel): Otp | null {
      return state.otp_send;
    }
  
    @Selector()
    static getUser_id(state:OtpStateModel):any{
      return state.user_id
    }
  
  
    @Action(OtpAction)
    otpAction(ctx: StateContext<OtpStateModel>, action: OtpAction) {
      ctx.patchState({otp_send:action.payload})
      return  this.signUpsrvc
      .VerifyOtp(action.payload)
        .then((response) => {
          const id_user = response.data;

          console.log('user_id', id_user);
          const otp: Otp = action.payload;
          ctx.patchState({ otp_send:otp,user_id:id_user});
          ctx.dispatch(new OtpSuccess({otp:otp,user_id:id_user}));
        })
        .catch((error) => {
          
          ctx.dispatch(new OtpError(error));
        });
    }
  
    @Action(OtpSuccess)
    otpSuccess(ctx: StateContext<OtpStateModel>, action: OtpSuccess) {
      const {otp,user_id}= action.payload;
      let role=localStorage.getItem('Role')
      if(role===Role.Option1){
        this.ngZone.run(()=>this.route.navigate(['/worker']))
        localStorage.clear()
      }else if(role===Role.Option2){
        this.ngZone.run(()=>{this.route.navigate(['/company'])
        localStorage.clear()
      })
      }
      localStorage.setItem('Token', user_id);
    }
  
    @Action(OtpError)
    otpError(ctx: StateContext<OtpStateModel>, action: OtpError) {
      alert(action.payload.response.data)
    }
  }
  
