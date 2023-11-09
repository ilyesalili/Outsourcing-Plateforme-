import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Role, User_Role } from './login.model';
import { Injectable, NgZone } from '@angular/core';
import { TokenVerifird, TokenVerifirdError, TokenVerifirdSuccess } from './login.action';
import { ApiConnexionService } from 'src/app/services/api-connexion.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
export interface AuthStateModel {
  user: User_Role | null;
}
@State<AuthStateModel>({
    name: 'User_type',
    defaults: {
      user: null,
    },
  })

  @Injectable()
export class User_type_State {
  constructor(private apisrvc:ApiConnexionService,
    private route:Router,
    private ngZone: NgZone,
    private data:DataService
    ) {}
  role: Role | null = null; 
  @Selector()
  static getUser(state: AuthStateModel): User_Role | null {
    return state.user;
  }


  @Action(TokenVerifird)
  verifyToken(ctx: StateContext<AuthStateModel>, action: TokenVerifird) {
    return this.apisrvc
      .verificationToken(action.payload)
      .then((response) => {
        const user=response.data
        console.log('hhhhhhh', user)
        ctx.patchState({ user:user});
        ctx.dispatch(new TokenVerifirdSuccess(user));
        this.data.menu2=true
      })
      .catch((error) => {
        ctx.dispatch(new TokenVerifirdError(error));
      });
  }

  @Action(TokenVerifirdSuccess)
  verifyTokenSuccess(ctx: StateContext<AuthStateModel>, action: TokenVerifirdSuccess) {
    const user:User_Role = action.payload;
    console.log('here',user)
    this.apisrvc.type_User=user.role
    if(user.role==Role.Option1){
      this.ngZone.run(()=>
        this.route.navigate(['/']))
      }else if(user.role==Role.Option2){
        this.ngZone.run(()=>
        this.route.navigate(['/home']))
      }else{
        ctx.dispatch(new TokenVerifirdError('err'));
        this.ngZone.run(()=>this.route.navigate(['./']))
        this.route.navigate(['/'])
      }
  }

  @Action(TokenVerifirdError)
  verifyTokenError(ctx: StateContext<AuthStateModel>, action: TokenVerifirdError) {}
}