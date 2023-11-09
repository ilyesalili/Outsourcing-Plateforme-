import { User, User_Role } from './login.model';

export class SignIn {
  static readonly type = '[Auth] Sign In';
  constructor(public payload: User) {}
}
export class SignInSuccess {
  static readonly type = '[Auth] Sign In Success';
  constructor(public payload: { user: User; token: string }) {}
}
export class SignInError {
  static readonly type = '[Auth] Sign In Failure';
  constructor(public payload: any) {}
}



export class TokenVerifird {
  static readonly type = '[Auth] Token Verified';
  constructor(public payload: string) {}
}
export class TokenVerifirdSuccess {
  static readonly type = '[Auth] Token Verified Success';
  constructor(public payload:User_Role) {}
}
export class TokenVerifirdError {
  static readonly type = '[Auth] Token Verified Failure';
  constructor(public payload: any) {}
}
