import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, map } from 'rxjs';
import { LoadWorkers } from 'src/app/store/Worker/worker.actions';
import { WorkerProjectHier } from 'src/app/store/Worker/worker.model';
import { WorkerState_hier } from 'src/app/store/Worker/worker_hier.state';

// interface Filter {
//   id: number;
//   name: string;
// }
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  animations: [
    trigger('moveToCartAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('1s', style({ opacity: 0, height: 0 }))]),
    ]),
  ],
})
export class AccueilComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  @Select(WorkerState_hier.getWorkers) workers$!: Observable<
    WorkerProjectHier[]
  >;
  isSelected = false;
  selectedWorkers: WorkerProjectHier[] = [];
  isSelect(index: number) {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      this.workers$.subscribe((workers) => {
        const selectedWorker = workers[index];
        this.selectedWorkers.push(selectedWorker);
        workers.splice(index, 1);
      });
      this.isSelected = !this.isSelected;
    }
  }

  openFilter: boolean = false;
  currentPage = 1;
  itemsPerPage = 10;
  index = 0;

  constructor(private store: Store) {}
  ngOnInit() {
    this.loadItems(this.index);
  }

  addToCart(worker: WorkerProjectHier) {}

  isExpanded: boolean = false;

  toggleDropdown(): void {
    this.isExpanded = !this.isExpanded;
  }

  loadItems(index: number) {
    this.store.dispatch(new LoadWorkers(index, 8));
  }

  nextPage() {
    if (this.currentPage) {
      this.loadItems(this.currentPage++);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.loadItems(this.currentPage--);
    }
  }
}
