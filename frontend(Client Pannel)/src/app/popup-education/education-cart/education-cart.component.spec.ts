import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCartComponent } from './education-cart.component';

describe('EducationCartComponent', () => {
  let component: EducationCartComponent;
  let fixture: ComponentFixture<EducationCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
