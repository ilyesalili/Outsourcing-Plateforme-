import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiltypeComponent } from './profiltype.component';

describe('ProfiltypeComponent', () => {
  let component: ProfiltypeComponent;
  let fixture: ComponentFixture<ProfiltypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiltypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
