import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EducationDetail } from 'src/app/store/Worker/worker.model';

@Component({
  selector: 'app-education-cart',
  templateUrl: './education-cart.component.html',
  styleUrls: ['./education-cart.component.scss']
})
export class EducationCartComponent {
  @Input() data:EducationDetail={}as EducationDetail;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  deleteItem(): void {
    this.delete.emit();
  }
}
