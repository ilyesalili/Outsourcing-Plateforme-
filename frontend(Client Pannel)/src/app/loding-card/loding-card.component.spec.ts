import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodingCardComponent } from './loding-card.component';

describe('LodingCardComponent', () => {
  let component: LodingCardComponent;
  let fixture: ComponentFixture<LodingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LodingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
