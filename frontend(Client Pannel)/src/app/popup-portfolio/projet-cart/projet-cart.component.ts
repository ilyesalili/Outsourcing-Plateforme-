import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioProject } from 'src/app/store/Worker/worker.model';

@Component({
  selector: 'app-projet-cart',
  templateUrl: './projet-cart.component.html',
  styleUrls: ['./projet-cart.component.scss']
})
export class ProjetCartComponent {
  @Input() data:PortfolioProject={}as PortfolioProject;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  deleteItem(): void {
    this.delete.emit();
  }
}
