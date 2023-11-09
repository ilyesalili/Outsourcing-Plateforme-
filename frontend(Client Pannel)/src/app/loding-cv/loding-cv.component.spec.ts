import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodingCvComponent } from './loding-cv.component';

describe('LodingCvComponent', () => {
  let component: LodingCvComponent;
  let fixture: ComponentFixture<LodingCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodingCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LodingCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
