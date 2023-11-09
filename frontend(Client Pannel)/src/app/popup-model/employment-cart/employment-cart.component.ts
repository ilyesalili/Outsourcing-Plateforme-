import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkExperience } from 'src/app/store/Worker/worker.model';

@Component({
  selector: 'app-employment-cart',
  templateUrl: './employment-cart.component.html',
  styleUrls: ['./employment-cart.component.scss']
})
export class EmploymentCartComponent {
  @Input() data:WorkExperience={}as WorkExperience;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  
    constructor() {
  }
  
  deleteItem(): void {
    this.delete.emit();
  }
  
  // editItem(): void {
  //   // Émettre un événement pour informer le composant parent de la modification
  //   this.edit.emit();
  // }
  
}
