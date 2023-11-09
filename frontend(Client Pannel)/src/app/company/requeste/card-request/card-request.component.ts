import { Component, Input } from '@angular/core';
import { jobrequest, workeronJob } from 'src/app/store/Comapny/company.model';

@Component({
  selector: 'app-card-request',
  templateUrl: './card-request.component.html',
  styleUrls: ['./card-request.component.scss']
})
export class CardRequestComponent {
  @Input() data: jobrequest;
  totalHours: number = 0;
  totalPrice: number = 0;

  ngOnChanges(): void {
    if (this.data) {
      this.calculateTotalHoursAndPrice();
    }
  }

  calculateTotalHoursAndPrice(): void {
    this.totalHours = 0;
    this.totalPrice = 0;

    for (const worker of this.data.workers) {
      this.totalHours += worker.nbHours;
      this.totalPrice += worker.publicPrice;
    }

    console.log('Total Hours:', this.totalHours);
    console.log('Total Price:', this.totalPrice);
  }
}
