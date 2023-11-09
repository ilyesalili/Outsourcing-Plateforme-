import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentCartComponent } from './employment-cart.component';

describe('EmploymentCartComponent', () => {
  let component: EmploymentCartComponent;
  let fixture: ComponentFixture<EmploymentCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
