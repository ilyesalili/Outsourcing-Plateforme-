import { Injectable, NgZone } from '@angular/core';
import axios from 'axios';
import { Otp, User } from './signup.model';
import { RouteApiService } from 'src/app/services/route-api.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(
    private baseUrl: RouteApiService,
    private load: DataService,
    private route: Router,
    private ngZone: NgZone
  ) {}

  GosignUp(user: User): Promise<any> {
    const url = `http://localhost:7777/auth/registration/user`;
    console.log(url);
    const request = axios.post<User>(url, user);

    return request;
  }
  VerifyOtp(otp: Otp): Promise<any> {
    const url = `http://localhost:7777/auth/validate-email`;
    const request = axios.post<Otp>(url, otp);
    return request;
  }
}
