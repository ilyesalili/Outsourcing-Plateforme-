import { Role } from "../Login/login.model";
import { Otp, User } from "./signup.model";

export class SignUp {
    static readonly type = '[SignUp] Sign Up';
    constructor(public payload: User) {}
  }
  export class SignUpSuccess {
    static readonly type = '[SignUp] Sign Up Success';
    constructor(public payload:{user:User,tokenId:any}) {}
  }
  export class SignUpError {
    static readonly type = '[SignUp] Sign Up Failure';
    constructor(public payload: any) {}
  }

export class OtpAction {
    static readonly type = '[OTP] Otp Action';
    constructor(public payload: Otp) {}
  }
  export class OtpSuccess {
    static readonly type = '[OTP] Otp Success';
    constructor(public payload:{otp:Otp,user_id:any}) {}
  }
  export class OtpError {
    static readonly type = '[OTP] Otp Failure';
    constructor(public payload: any) {}
  }
  