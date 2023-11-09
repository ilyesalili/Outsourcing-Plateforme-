import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Injectable, NgZone, OnInit } from '@angular/core';
import { User } from './signup.model';
import { SignUp, SignUpError, SignUpSuccess } from './signup.action';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
export interface SignUpStateModel {
  user: User | null;
  tokenId: string | null;
}
@State<SignUpStateModel>({
  name: 'User',
  defaults: {
    user: null,
    tokenId: null,
  },
})
@Injectable()
export class UserState {
  constructor(
    private signUpsrvc: SignUpService,
    private route: Router,
    private ngZone: NgZone,
    private load: DataService,
  ) {}
  @Selector()
  static getUser(state: SignUpStateModel): User | null {
    return state.user;
  }

  @Selector()
  static getTokenId(state: SignUpStateModel): string | null {
    return state.tokenId;
  }

  @Action(SignUp)
  signUp(ctx: StateContext<SignUpStateModel>, action: SignUp) {
    this.load.isLoding = false;
    return this.signUpsrvc
      .GosignUp(action.payload)
      .then((response) => {
        const tokenId = response.data.tokenId;
        console.log('user_id', tokenId);
        const user: User = action.payload;
        ctx.patchState({ user: user, tokenId: tokenId });
        ctx.dispatch(new SignUpSuccess({ user: user, tokenId: tokenId }));
      })
      .catch((error) => {
        alert('Email or password Already existe')
        ctx.dispatch(new SignUpError(error));
        this.ngZone.run(()=>this.route.navigate(['/']))
      });
  }

  @Action(SignUpSuccess)
  signUpSuccess(ctx: StateContext<SignUpStateModel>, action: SignUpSuccess) {
    const { user, tokenId } = action.payload;
    ctx.patchState({ user: user, tokenId: tokenId });
    this.ngZone.run(() => this.route.navigate(['/confirmemail']))
  }

  @Action(SignUpError)
  signUpError(ctx: StateContext<SignUpStateModel>, action: SignUpError) {
    this.load.isLoding=false
  }
}
