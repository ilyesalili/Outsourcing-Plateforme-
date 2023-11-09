import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ApiConnexionService } from '../services/api-connexion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private route: Router,
    private route2: Router,
    private srv: DataService,
    private cnx: ApiConnexionService
  ) {}

  menuTest: boolean =true;

  ngOnInit(): void {
    
    if(this.isTokenPresent()){
     this.srv.menu2=true
    }
    else{
      // alert('Should Be Connected');
      this.srv.menu2=false

    }
    this.menuTest=this.srv.menu2
 
  }
  isTokenPresent(): boolean {
    const token = localStorage.getItem('Token');
    return !!token; // Renvoie true si le token existe, false sinon
  }
  GoToProfilType() {
    return this.route.navigate(['join']);
  }
  GoToLogin() {
    return this.route2.navigate(['/signup']);
  }
  logOut() {
    this.route.navigate(['/']);
    localStorage.clear();
    this.srv.menu2=false
    this.ngOnInit()
  }
}
