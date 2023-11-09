import { Component, OnInit } from '@angular/core';
import { NavigatorServicesService } from 'src/app/Services/navigator-services.service';
import { fadeInAnimation } from 'src/app/Animations/fade-in.animation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  animations:[fadeInAnimation]
})
export class AccueilComponent implements OnInit {
  title: any;
  activePage: Observable<string> | undefined;
  constructor(private navigationService: NavigatorServicesService) {}
  ngOnInit(): void {
    this.activePage = this.navigationService.activePage$;
    this.navigationService.activePage$.subscribe((e) => {
      this.title = e;
    });
  }
}
