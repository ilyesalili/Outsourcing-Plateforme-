import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmcodeemailComponent } from './confirmcodeemail.component';

describe('ConfirmcodeemailComponent', () => {
  let component: ConfirmcodeemailComponent;
  let fixture: ComponentFixture<ConfirmcodeemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmcodeemailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmcodeemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
