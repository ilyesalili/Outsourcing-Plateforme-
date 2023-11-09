import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigatorServicesService } from 'src/app/Services/navigator-services.service';
import {fadeInNavAnimation} from '../../Animations/fade-in.animation'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations:[fadeInNavAnimation]
})
export class NavBarComponent {
  constructor(private translate: TranslateService,private navigationService: NavigatorServicesService,private route:Router) {
  }
  activeItem: string = 'Dashborad';
  setActivePage(page: string) {
    this.setActivePage(page);
  }
  selectedLanguage: string = 'Eng'; 

  changeLanguage(selectedLanguage: string) {
    this.translate.use(selectedLanguage);
  }
  logOut(){
    this.setActivePage('logout')
    localStorage.clear()
    this.route.navigate(['/login'])
  }
}
