import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiConnexionService } from '../services/api-connexion.service';

@Injectable({
  providedIn: 'root'
})
export class BackToLogInGuard implements CanActivate {
  constructor(private apiroot:ApiConnexionService,private route:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject)=>{
      // if(!this.apiroot.isLoggedIn()){
      // resolve(true)}
      // else{
      //   alert('hhhh')
      //   this.route.navigate(['/'])
      // }
    });
  }
  
}
