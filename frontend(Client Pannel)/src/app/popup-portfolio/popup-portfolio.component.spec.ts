import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPortfolioComponent } from './popup-portfolio.component';

describe('PopupPortfolioComponent', () => {
  let component: PopupPortfolioComponent;
  let fixture: ComponentFixture<PopupPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
