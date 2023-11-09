import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerHireComponent } from './worker-hire.component';

describe('WorkerHireComponent', () => {
  let component: WorkerHireComponent;
  let fixture: ComponentFixture<WorkerHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerHireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
