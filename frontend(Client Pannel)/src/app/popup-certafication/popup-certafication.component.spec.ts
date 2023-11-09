import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCertaficationComponent } from './popup-certafication.component';

describe('PopupCertaficationComponent', () => {
  let component: PopupCertaficationComponent;
  let fixture: ComponentFixture<PopupCertaficationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCertaficationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCertaficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
