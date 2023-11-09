import { Injectable } from '@angular/core';
import { RouteApiService } from './route-api.service';
import axios from 'axios';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiConnexionService {
  type_User:string=''
  

  constructor(private apiroot:RouteApiService,private data:DataService,
    private route:Router) { }
 
  verificationToken(token:string):Promise<any>{
    const url=`http://localhost:7777/auth/validate-token?token=${token}`
    const response=axios.get(url)
    return response
  }
  isLoggedIn() {
    // console.log(localStorage.getItem('token'))
    if( localStorage.getItem('token') !== null){
      
      // this.data.menuJoin=true
      console.log('fiudgsyu')
    }
    else{
      // alert('Should Be Connected')
      this.route.navigate(['/login'])
      // this.data.menuJoin=false
    }
  }
}
