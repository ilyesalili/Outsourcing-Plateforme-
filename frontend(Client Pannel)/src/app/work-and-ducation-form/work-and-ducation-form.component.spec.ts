import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAndDucationFormComponent } from './work-and-ducation-form.component';

describe('WorkAndDucationFormComponent', () => {
  let component: WorkAndDucationFormComponent;
  let fixture: ComponentFixture<WorkAndDucationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAndDucationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAndDucationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
