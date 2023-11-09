import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetCartComponent } from './projet-cart.component';

describe('ProjetCartComponent', () => {
  let component: ProjetCartComponent;
  let fixture: ComponentFixture<ProjetCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
