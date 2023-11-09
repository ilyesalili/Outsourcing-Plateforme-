import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiConnexionService } from '../services/api-connexion.service';
import { Role } from '../store/Login/login.model';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerguardGuard implements CanActivate {
  constructor(private route:Router,
    private user_type:ApiConnexionService,
    private data:DataService

    ){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject)=>{
      if(this.user_type.type_User==Role.Option1){
        resolve(true)
        this.route.navigate(['/'])
      }else {
        resolve(false)
        this.route.navigate(['/'])
      }
    })
  }
  
}
