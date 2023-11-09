import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertaficatCartComponent } from './certaficat-cart.component';

describe('CertaficatCartComponent', () => {
  let component: CertaficatCartComponent;
  let fixture: ComponentFixture<CertaficatCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertaficatCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertaficatCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
