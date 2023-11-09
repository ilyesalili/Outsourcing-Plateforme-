import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Certification } from 'src/app/store/Worker/worker.model';

@Component({
  selector: 'app-certaficat-cart',
  templateUrl: './certaficat-cart.component.html',
  styleUrls: ['./certaficat-cart.component.scss']
})
export class CertaficatCartComponent {
  @Input() data:Certification={}as Certification;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  deleteItem(): void {
    // Émettre un événement pour informer le composant parent de la suppression
    this.delete.emit();
  }
}
