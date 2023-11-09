import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { AuthService } from './auth.service';
import {
  SignIn,
  SignInSuccess,
  SignInError,
  TokenVerifird,
} from './login.action';
import { User } from './login.model';
import { Injectable, NgZone } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
export interface AuthStateModel {
  user: User | null;
  token: any;
  loading: boolean;
  error: any;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService,
     private store: Store,
     private data:DataService,
     private route:Router,
     private zone:NgZone
     ) {}
  @Selector()
  static getUser(state: AuthStateModel): User | null {
    return state.user;
  }
  @Selector()
  static isLoading(state: AuthStateModel): boolean {
    return state.loading;
  }
  @Selector()
  static isToken(state: AuthStateModel): any {
    return state.token;
  }
  @Selector()
  static getError(state: AuthStateModel): any {
    return state.error;
  }

  @Action(SignIn)
  signIn(ctx: StateContext<AuthStateModel>, action: SignIn) {
    ctx.patchState({ loading: true, error: null });
    return this.authService
      .signIn(action.payload)
      .then((response) => {
        const token = response.data;
        console.log('token', token);
        const user: User = action.payload;
        this.store.dispatch(new TokenVerifird(token));
        ctx.patchState({ user, token, loading: false });
        ctx.dispatch(new SignInSuccess({ user, token }));
      })
      .catch((error) => {
        ctx.patchState({ loading: false, error });
        ctx.dispatch(new SignInError(error));
      });
  }

  @Action(SignInSuccess)
  signInSuccess(ctx: StateContext<AuthStateModel>, action: SignInSuccess) {
    const { user, token } = action.payload;
    ctx.patchState({ user, token });
    localStorage.setItem('Token', token);
    this.data.menu2=true
    this.zone.run(()=>this.route.navigate(['/']))
   
  }

  @Action(SignInError)
  signInError(ctx: StateContext<AuthStateModel>, action: SignInError) {
    alert('PassWard or Email Incorrect')
  }
}
