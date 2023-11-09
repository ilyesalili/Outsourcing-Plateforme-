import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationOfCampanyComponent } from './information-of-campany.component';

describe('InformationOfCampanyComponent', () => {
  let component: InformationOfCampanyComponent;
  let fixture: ComponentFixture<InformationOfCampanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationOfCampanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationOfCampanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
