import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavigatorServicesService {

  private activePageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Admins');
  public activePage$: Observable<string> = this.activePageSubject.asObservable();

  setActivePage(page: string) {
    this.activePageSubject.next(page);
  }
}
