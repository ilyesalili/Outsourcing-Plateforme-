import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteApiService {
  baseUrl_worker = 'http://localhost:7777/workers/';
  baseUrl_auth = 'http://localhost:7777/auth';


  constructor() { }
}
