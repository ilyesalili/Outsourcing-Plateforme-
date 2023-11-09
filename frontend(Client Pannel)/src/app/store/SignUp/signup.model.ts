import { Role } from '../Login/login.model';

export interface User {
  email: string;
  password: string;
  role: Role;
}
export interface Otp{
    tokenId:string
    otp:string
}