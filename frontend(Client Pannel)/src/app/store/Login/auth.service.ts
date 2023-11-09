import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  signIn(user: User): Promise<any> {
    const url = `http://localhost:7777/auth/signin`;  
    return   axios.post<User>(url, user)
  } 
}
