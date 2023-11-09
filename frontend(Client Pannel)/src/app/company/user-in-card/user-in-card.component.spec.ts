import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInCardComponent } from './user-in-card.component';

describe('UserInCardComponent', () => {
  let component: UserInCardComponent;
  let fixture: ComponentFixture<UserInCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
