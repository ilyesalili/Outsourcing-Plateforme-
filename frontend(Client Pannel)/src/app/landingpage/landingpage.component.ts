import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiConnexionService } from '../services/api-connexion.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit{
  constructor(private cnx:ApiConnexionService) {
  }
  ngOnInit(): void {
    // this.cnx.isLoggedIn()
  }

}
